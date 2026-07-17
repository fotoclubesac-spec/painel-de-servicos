const { sql } = require('@vercel/postgres');
const fs = require('fs');
const path = require('path');

async function ensureTable() {
  await sql`CREATE TABLE IF NOT EXISTS panel_data (key TEXT PRIMARY KEY, value JSONB NOT NULL)`;
}

function seedData() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'dados-servicos.json'), 'utf-8');
  const d = JSON.parse(raw);
  return { fl: d.fotoLivros || [], sv: d.servicos || [] };
}

module.exports = async function handler(req, res) {
  await ensureTable();

  if (req.method === 'GET') {
    const flRow = await sql`SELECT value FROM panel_data WHERE key = 'fl'`;
    const svRow = await sql`SELECT value FROM panel_data WHERE key = 'sv'`;
    if (flRow.rows.length === 0 || svRow.rows.length === 0) {
      const seed = seedData();
      await sql`INSERT INTO panel_data (key, value) VALUES ('fl', ${JSON.stringify(seed.fl)}::jsonb) ON CONFLICT (key) DO NOTHING`;
      await sql`INSERT INTO panel_data (key, value) VALUES ('sv', ${JSON.stringify(seed.sv)}::jsonb) ON CONFLICT (key) DO NOTHING`;
      return res.status(200).json(seed);
    }
    return res.status(200).json({ fl: flRow.rows[0].value, sv: svRow.rows[0].value });
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
