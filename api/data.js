const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

const connectionString = process.env.DATABASE_URL || process.env.DATABASE_URL_UNPOOLED || process.env.POSTGRES_URL;
const sql = neon(connectionString);

async function ensureTable() {
  await sql`CREATE TABLE IF NOT EXISTS panel_data (key TEXT PRIMARY KEY, value JSONB NOT NULL)`;
}

function seedData() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'dados-servicos.json'), 'utf-8');
  const d = JSON.parse(raw);
  const today = new Date().toISOString().slice(0, 10);
  return {
    fl: (d.fotoLivros || []).map((r, i) => ({ id: 'fl' + i, atualizadoEm: today, ...r })),
    sv: (d.servicos || []).map((r, i) => ({ id: 'sv' + i, atualizadoEm: today, ...r }))
  };
}

module.exports = async function handler(req, res) {
  if (!connectionString) return res.status(500).json({ error: 'missing DATABASE_URL' });
  await ensureTable();

  if (req.method === 'GET') {
    const flRows = await sql`SELECT value FROM panel_data WHERE key = 'fl'`;
    const svRows = await sql`SELECT value FROM panel_data WHERE key = 'sv'`;
    if (flRows.length === 0 || svRows.length === 0) {
      const seed = seedData();
      await sql`INSERT INTO panel_data (key, value) VALUES ('fl', ${JSON.stringify(seed.fl)}::jsonb) ON CONFLICT (key) DO NOTHING`;
      await sql`INSERT INTO panel_data (key, value) VALUES ('sv', ${JSON.stringify(seed.sv)}::jsonb) ON CONFLICT (key) DO NOTHING`;
      return res.status(200).json(seed);
    }
    return res.status(200).json({ fl: flRows[0].value, sv: svRows[0].value });
  }

  if (req.method === 'POST') {
    const { key, list } = req.body || {};
    if (key !== 'fl' && key !== 'sv') return res.status(400).json({ error: 'invalid key' });
    if (!Array.isArray(list)) return res.status(400).json({ error: 'invalid list' });
    await sql`INSERT INTO panel_data (key, value) VALUES (${key}, ${JSON.stringify(list)}::jsonb)
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`;
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
};
