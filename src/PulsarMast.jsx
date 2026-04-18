// Masthead: two-panel illustration of the NANOGrav 2023 15-year result.
//   LEFT:  Hellings–Downs correlation curve with 1σ band and 15 binned
//          measurements with error bars. (Agazie et al. 2023, ApJL 951 L8)
//   RIGHT: Mollweide sky map of 68 pulsars in galactic coordinates with
//          faint anisotropy hotspots and full graticule.
//          (Agazie et al. 2023, ApJL 956 L3)
function PulsarMast({ seed = 7 }) {
  const W = 760, H = 340;

  const rand = (i) => {
    const x = Math.sin(i * 9301 + seed * 49297) * 233280;
    return x - Math.floor(x);
  };

  // ---------- LEFT PANEL: Hellings–Downs ----------
  const LX = 40, LY = 40, LW = 320, LH = 230;
  const plotX = LX + 48, plotY = LY + 28;
  const plotW = LW - 72, plotH = LH - 68;

  // HD analytic curve
  const hd = (z) => {
    const x = (1 - Math.cos(z)) / 2;
    return 0.5 * (1 + 3 * x * (Math.log(Math.max(x, 1e-6)) - 1 / 6));
  };

  const yMin = -0.35, yMax = 1.05;
  const yToPx = (y) => plotY + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
  const xToPx = (zFrac) => plotX + zFrac * plotW;

  // Theory curve
  const NC = 80;
  const curvePts = [];
  for (let i = 0; i <= NC; i++) {
    const t = i / NC;
    curvePts.push([xToPx(t), yToPx(hd(t * Math.PI))]);
  }
  const curvePath = curvePts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");

  // 1σ band around curve (shaded)
  const bandW = 0.13;
  const bandTop = curvePts.map(([x, y]) => `${x.toFixed(1)},${(y - 14).toFixed(1)}`);
  const bandBot = [...curvePts].reverse().map(([x, y]) => `${x.toFixed(1)},${(y + 14).toFixed(1)}`);
  const bandPath = `M ${bandTop.join(" L ")} L ${bandBot.join(" L ")} Z`;

  // 15 measurement bins with error bars
  const NB = 15;
  const bins = [];
  for (let i = 0; i < NB; i++) {
    const t = (i + 0.5) / NB;
    const z = t * Math.PI;
    const yT = hd(z);
    const noise = (rand(i + 11) - 0.5) * 0.18;
    const yObs = yT + noise;
    bins.push({
      px: xToPx(t),
      py: yToPx(yObs),
      err: 10 + rand(i + 21) * 8,
    });
  }

  // ---------- RIGHT PANEL: Mollweide sky map ----------
  const RX = 400, RY = 40, RW = 320, RH = 230;
  const mcx = RX + RW / 2;
  const mcy = RY + RH / 2 + 4;
  const ma = 140;
  const mb = 82;

  // 68 pulsars scattered inside ellipse
  const NP = 68;
  const pulsars = [];
  for (let i = 0; i < NP; i++) {
    let x = 0, y = 0, ok = false, tries = 0;
    while (!ok && tries < 40) {
      x = (rand(i * 2 + 1) - 0.5) * 2;
      y = (rand(i * 2 + 2) - 0.5) * 2;
      if (x * x + y * y < 0.92) ok = true;
      tries++;
    }
    pulsars.push({ x: mcx + x * ma, y: mcy + y * mb });
  }

  // Graticule: meridians every 30deg, parallels every 30deg
  const meridians = [-60, -30, 0, 30, 60];
  const parallels = [-60, -30, 0, 30, 60];

  return (
    <div className="gw-mast" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="hot1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="var(--theme)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--theme)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cold1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="var(--fg)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--fg)" stopOpacity="0" />
          </radialGradient>
          <clipPath id="sky-clip">
            <ellipse cx={mcx} cy={mcy} rx={ma} ry={mb} />
          </clipPath>
        </defs>

        {/* ================= LEFT PANEL ================= */}
        <g>
          <text x={LX} y={LY + 4} fill="var(--fg)"
                fontFamily="var(--font-mono)" fontSize="11"
                fontWeight="700" letterSpacing="0.08em">
            hellings–downs correlation
          </text>
          <text x={LX} y={LY + 18} fill="var(--fg-muted)"
                fontFamily="var(--font-mono)" fontSize="9">
            agazie et al. 2023 · apjl 951 l8
          </text>

          {/* Axes */}
          <line x1={plotX} y1={plotY + plotH} x2={plotX + plotW} y2={plotY + plotH}
                stroke="var(--fg)" strokeWidth="1" />
          <line x1={plotX} y1={plotY} x2={plotX} y2={plotY + plotH}
                stroke="var(--fg)" strokeWidth="1" />

          {/* zero line */}
          <line x1={plotX} y1={yToPx(0)} x2={plotX + plotW} y2={yToPx(0)}
                stroke="var(--fg)" strokeWidth="0.6"
                strokeDasharray="2 3" opacity="0.4" />

          {/* x-axis ticks at 0, 45, 90, 135, 180 deg */}
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
            <g key={i}>
              <line x1={xToPx(t)} y1={plotY + plotH}
                    x2={xToPx(t)} y2={plotY + plotH + 4}
                    stroke="var(--fg)" strokeWidth="1" />
              <text x={xToPx(t)} y={plotY + plotH + 14}
                    fill="var(--fg-muted)" fontFamily="var(--font-mono)"
                    fontSize="8" textAnchor="middle">
                {Math.round(t * 180)}°
              </text>
            </g>
          ))}

          {/* y-axis ticks */}
          {[-0.25, 0, 0.25, 0.5, 0.75, 1].map((v, i) => (
            <g key={i}>
              <line x1={plotX - 3} y1={yToPx(v)}
                    x2={plotX} y2={yToPx(v)}
                    stroke="var(--fg)" strokeWidth="1" />
              <text x={plotX - 6} y={yToPx(v) + 3}
                    fill="var(--fg-muted)" fontFamily="var(--font-mono)"
                    fontSize="8" textAnchor="end">
                {v.toFixed(2)}
              </text>
            </g>
          ))}

          {/* 1σ band */}
          <path d={bandPath} fill="var(--theme)" opacity="0.18" />

          {/* HD theory curve */}
          <path d={curvePath}
                fill="none" stroke="var(--theme)"
                strokeWidth="2" />

          {/* 15 measurement bins */}
          {bins.map((b, i) => (
            <g key={i}>
              <line x1={b.px} y1={b.py - b.err} x2={b.px} y2={b.py + b.err}
                    stroke="var(--fg)" strokeWidth="1" />
              <line x1={b.px - 3} y1={b.py - b.err} x2={b.px + 3} y2={b.py - b.err}
                    stroke="var(--fg)" strokeWidth="1" />
              <line x1={b.px - 3} y1={b.py + b.err} x2={b.px + 3} y2={b.py + b.err}
                    stroke="var(--fg)" strokeWidth="1" />
              <circle cx={b.px} cy={b.py} r="2.5"
                      fill="var(--fg)" />
            </g>
          ))}

          {/* Axis labels */}
          <text x={plotX + plotW / 2} y={plotY + plotH + 28}
                fill="var(--fg-muted)" fontFamily="var(--font-mono)"
                fontSize="9" textAnchor="middle">
            angular separation ζ
          </text>
          <text x={plotX - 34} y={plotY + plotH / 2}
                fill="var(--fg-muted)" fontFamily="var(--font-mono)"
                fontSize="9" textAnchor="middle"
                transform={`rotate(-90, ${plotX - 34}, ${plotY + plotH / 2})`}>
            correlation Γ(ζ)
          </text>
        </g>

        {/* ================= RIGHT PANEL ================= */}
        <g>
          <text x={RX} y={RY + 4} fill="var(--fg)"
                fontFamily="var(--font-mono)" fontSize="11"
                fontWeight="700" letterSpacing="0.08em">
            pulsar timing array sky
          </text>
          <text x={RX} y={RY + 18} fill="var(--fg-muted)"
                fontFamily="var(--font-mono)" fontSize="9">
            agazie et al. 2023 · apjl 956 l3
          </text>

          {/* Mollweide ellipse */}
          <ellipse cx={mcx} cy={mcy} rx={ma} ry={mb}
                   fill="var(--bg)" stroke="var(--fg)"
                   strokeWidth="1.2" />

          {/* Faint anisotropy hotspots/coldspots */}
          <g clipPath="url(#sky-clip)">
            <circle cx={mcx - 48} cy={mcy - 22} r="48" fill="url(#hot1)" />
            <circle cx={mcx + 60} cy={mcy + 20} r="42" fill="url(#cold1)" />
            <circle cx={mcx + 20} cy={mcy - 30} r="28" fill="url(#hot1)" />
          </g>

          {/* Graticule */}
          <g clipPath="url(#sky-clip)" opacity="0.28">
            {parallels.map((lat, i) => {
              const y = mcy - (lat / 90) * mb;
              return (
                <line key={`p${i}`} x1={mcx - ma} y1={y} x2={mcx + ma} y2={y}
                      stroke="var(--fg)" strokeWidth="0.6" />
              );
            })}
            {meridians.map((lon, i) => {
              const offset = (lon / 90) * ma;
              return (
                <line key={`m${i}`}
                      x1={mcx + offset} y1={mcy - mb}
                      x2={mcx + offset} y2={mcy + mb}
                      stroke="var(--fg)" strokeWidth="0.6" />
              );
            })}
          </g>

          {/* Prime meridian + equator */}
          <g clipPath="url(#sky-clip)" opacity="0.5">
            <line x1={mcx} y1={mcy - mb} x2={mcx} y2={mcy + mb}
                  stroke="var(--fg)" strokeWidth="0.8" />
            <line x1={mcx - ma} y1={mcy} x2={mcx + ma} y2={mcy}
                  stroke="var(--fg)" strokeWidth="0.8" />
          </g>

          {/* 68 pulsars */}
          {pulsars.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2"
                    fill="var(--theme)" />
          ))}

          {/* Small legend */}
          <g transform={`translate(${RX + 8}, ${RY + RH - 14})`}>
            <circle cx="4" cy="0" r="2" fill="var(--theme)" />
            <text x="12" y="3" fill="var(--fg-muted)"
                  fontFamily="var(--font-mono)" fontSize="8">
              n = 68 pulsars
            </text>
          </g>
        </g>
      </svg>

      <div className="mast-disclaimer">
        illustration inspired by agazie et al. 2023 · apjl 951 l8 + apjl 956 l3
      </div>
    </div>
  );
}
window.PulsarMast = PulsarMast;
