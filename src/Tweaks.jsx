function Tweaks({ tweaks, setTweaks, active, setActive }) {
  if (!active) return null;
  const set = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
    } catch (e) {}
  };

  const accents = window.ACCENTS;

  return (
    <div className="tweaks-panel">
      <h5>Tweaks</h5>

      <label>Landing layout</label>
      <div className="opts">
        {['timing-array', 'classic', 'text-first'].map((k) => (
          <button key={k} className={tweaks.landing === k ? 'sel' : ''} onClick={() => set('landing', k)}>
            {k === 'timing-array' ? 'timing' : k === 'text-first' ? 'text' : 'classic'}
          </button>
        ))}
      </div>

      <label>Accent color</label>
      <div className="tweaks-swatch-row">
        {Object.entries(accents).map(([k, v]) => (
          <div
            key={k}
            className={`tweaks-swatch ${tweaks.accent === k ? 'sel' : ''}`}
            style={{ background: v.light }}
            onClick={() => set('accent', k)}
            title={v.label}
          />
        ))}
      </div>

      <label>Density</label>
      <div className="opts">
        {['airy', 'compact'].map((k) => (
          <button key={k} className={tweaks.density === k ? 'sel' : ''} onClick={() => set('density', k)}>
            {k}
          </button>
        ))}
      </div>

      <label>Default theme</label>
      <div className="opts">
        {['light', 'dark'].map((k) => (
          <button key={k} className={tweaks.defaultTheme === k ? 'sel' : ''} onClick={() => set('defaultTheme', k)}>
            {k}
          </button>
        ))}
      </div>

      <label>Pulsar strip on home</label>
      <div className="opts">
        {[true, false].map((v) => (
          <button key={String(v)} className={tweaks.showPulsarMast === v ? 'sel' : ''} onClick={() => set('showPulsarMast', v)}>
            {v ? 'on' : 'off'}
          </button>
        ))}
      </div>
    </div>
  );
}
window.Tweaks = Tweaks;
