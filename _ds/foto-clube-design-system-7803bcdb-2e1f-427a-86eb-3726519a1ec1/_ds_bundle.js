/* @ds-bundle: {"format":4,"namespace":"FotoClubeDesignSystem_7803bc","components":[{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Card.jsx":"f6cb13ac92ec","components/core/Tabs.jsx":"1199b83cdf7c","components/feedback/Badge.jsx":"588fb3fc4175","components/feedback/Tag.jsx":"1fdac5f8e681","components/forms/Button.jsx":"ce2810f12bce","components/forms/Checkbox.jsx":"3d09fc8e06ba","components/forms/IconButton.jsx":"424f27ad9cc8","components/forms/Input.jsx":"a8217d57f829","components/forms/Radio.jsx":"29c9d570606d","components/forms/Select.jsx":"8bc32eb672a1","components/forms/Switch.jsx":"0f5b7d1d4b53"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FotoClubeDesignSystem_7803bc = window.FotoClubeDesignSystem_7803bc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  elevated = false
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-width-thin) solid var(--border-default)',
      borderRadius: 'var(--radius-0)',
      padding: 'var(--space-6)',
      boxShadow: elevated ? 'var(--shadow-md)' : 'var(--shadow-none)',
      fontFamily: "'Work Sans',sans-serif"
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      borderBottom: 'var(--border-width-thin) solid var(--border-default)',
      fontFamily: "'Work Sans',sans-serif"
    }
  }, tabs.map(t => {
    const active = t.value === value;
    return React.createElement('button', {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 16px',
        fontSize: '14px',
        fontWeight: 600,
        color: active ? 'var(--brand-primary)' : 'var(--text-muted)',
        borderBottom: '3px solid ' + (active ? 'var(--brand-primary)' : 'transparent'),
        marginBottom: '-1px',
        transition: 'color var(--duration-base) var(--ease-standard)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--neutral-200)',
      color: 'var(--neutral-800)'
    },
    brand: {
      background: 'var(--brand-primary)',
      color: '#fff'
    },
    success: {
      background: 'var(--state-success)',
      color: '#fff'
    },
    error: {
      background: 'var(--state-error)',
      color: '#fff'
    },
    warning: {
      background: 'var(--brand-secondary)',
      color: 'var(--black)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: "'Work Sans',sans-serif",
      fontSize: '12px',
      fontWeight: 600,
      padding: '3px 10px',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      fontFamily: "'Work Sans',sans-serif",
      fontSize: '13px',
      fontWeight: 500,
      padding: '5px 10px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--surface-sunken)',
      border: 'var(--border-width-thin) solid var(--border-default)',
      color: 'var(--text-primary)'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'remove',
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: '14px',
      lineHeight: 1,
      padding: 0
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: '13px'
    },
    md: {
      padding: '11px 20px',
      fontSize: '15px'
    },
    lg: {
      padding: '14px 26px',
      fontSize: '16px'
    }
  };
  const base = {
    fontFamily: "'Work Sans',sans-serif",
    fontWeight: 600,
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'var(--border-width) solid transparent',
    transition: 'background var(--duration-base) var(--ease-standard), opacity var(--duration-base) var(--ease-standard)',
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--brand-secondary)',
      color: 'var(--black)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      borderColor: 'var(--brand-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    }
  };
  const hoverBg = {
    primary: 'var(--brand-primary-hover)',
    secondary: 'var(--brand-secondary-hover)',
    outline: 'var(--brand-primary-tint)',
    ghost: 'var(--surface-sunken)'
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant]
  };
  if (hover && !disabled) style.background = variant === 'outline' || variant === 'ghost' ? hoverBg[variant] : hoverBg[variant];
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: "'Work Sans',sans-serif",
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      border: 'var(--border-width) solid ' + (checked ? 'var(--brand-primary)' : 'var(--border-default)'),
      background: checked ? 'var(--brand-primary)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 3
  }, React.createElement('path', {
    d: 'M4 12l6 6L20 6'
  }))), React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  'aria-label': ariaLabel,
  onClick
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const s = sizes[size];
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: 'var(--border-width-thin) solid var(--border-default)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    width: s,
    height: s,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-0)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background var(--duration-base) var(--ease-standard)',
    ...variants[variant]
  };
  if (hover) style.background = variant === 'primary' ? 'var(--brand-primary-hover)' : 'var(--surface-sunken)';
  return React.createElement('button', {
    style,
    onClick,
    'aria-label': ariaLabel,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--state-error)' : focus ? 'var(--brand-primary)' : 'var(--border-default)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: "'Work Sans',sans-serif",
      width: '100%',
      maxWidth: 320
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    disabled,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "'Work Sans',sans-serif",
      fontSize: '15px',
      padding: '10px 12px',
      border: 'var(--border-width-thin) solid ' + borderColor,
      borderRadius: 'var(--radius-0)',
      outline: 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      boxShadow: focus ? '0 0 0 3px var(--brand-primary-tint)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)'
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--state-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: "'Work Sans',sans-serif",
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: 'var(--border-width) solid ' + (checked ? 'var(--brand-primary)' : 'var(--border-default)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--brand-primary)'
    }
  })), React.createElement('input', {
    type: 'radio',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: "'Work Sans',sans-serif",
      width: '100%',
      maxWidth: 320
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    disabled,
    style: {
      fontFamily: "'Work Sans',sans-serif",
      fontSize: '15px',
      padding: '10px 12px',
      border: 'var(--border-width-thin) solid var(--border-default)',
      borderRadius: 'var(--radius-0)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: "'Work Sans',sans-serif",
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    style: {
      width: 40,
      height: 22,
      background: checked ? 'var(--brand-primary)' : 'var(--neutral-300)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      background: '#fff',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
