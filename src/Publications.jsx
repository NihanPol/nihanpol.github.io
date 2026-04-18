function Publications() {
  const [category, setCategory] = React.useState('led');
  const [query, setQuery] = React.useState('');

  const applyFilters = (list) =>
    list
      .map((yearBlock) => {
        const items = yearBlock.items.filter((p) => {
          if (query && !p.title.toLowerCase().includes(query.toLowerCase())) return false;
          return true;
        });
        return { ...yearBlock, items };
      })
      .filter((b) => b.items.length);

  const activeSource = category === 'led' ? window.PUBS_LED : window.PUBS_COLL;
  const activeFiltered = applyFilters(activeSource);
  const total = activeSource.reduce((s, b) => s + b.items.length, 0);
  const shown = activeFiltered.reduce((s, b) => s + b.items.length, 0);

  const totalLed  = window.PUBS_LED.reduce((s, b) => s + b.items.length, 0);
  const totalColl = window.PUBS_COLL.reduce((s, b) => s + b.items.length, 0);

  const renderSection = (blocks) =>
    blocks.map((block) => (
      <div className="pub-year" key={block.year}>
        <div className="y">
          {block.year}
          <small>
            {block.items.length} paper{block.items.length !== 1 ? 's' : ''}
          </small>
        </div>
        <div className="pub-list">
          {block.items.map((p, i) => (
            <div className="pub" key={i}>
              <div className="venue-row">
                <span className="venue">{p.venue}</span>
                {p.award && <span className="award">{p.award}</span>}
              </div>
              <div className="title">{p.title}</div>
              <div className="authors">
                {p.authors.map((a, j) => {
                  const me = /\bPol\b/.test(a);
                  const more = a.startsWith('+');
                  return (
                    <React.Fragment key={j}>
                      {me ? <em>{a}</em> : more ? <span className="more">{a}</span> : a}
                      {j < p.authors.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="meta">
                <em>{p.venueName}</em>
              </div>
              <div className="actions">
                {window.pubLinks(p).map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ));

  return (
    <article className="page container">
      <header className="masthead">
        <div className="eyebrow">peer-reviewed journal articles</div>
        <h1 className="name" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>publications</h1>
        <p className="role">
          {totalLed + totalColl} papers total. A complete list is maintained on{' '}
          <a href="https://ui.adsabs.harvard.edu/public-libraries/hy1ifnLSS0Sg1m6J9s2QHw" target="_blank" rel="noopener noreferrer">ADS</a>.
          Papers are split into works I led or made a significant contribution to, and
          collaboration papers with smaller contributions. My name is italicized in the
          author lists.
        </p>
      </header>

      <div className="pub-filters" style={{ marginTop: 30 }}>
        {[
          ['led',  `led / significant contribution (${totalLed})`],
          ['coll', `collaboration (${totalColl})`],
        ].map(([k, lbl]) => (
          <button key={k} className={category === k ? 'active' : ''} onClick={() => setCategory(k)}>
            {lbl}
          </button>
        ))}
        <input
          type="text"
          placeholder="search titles…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            marginLeft: 'auto',
            padding: '5px 12px',
            background: 'transparent',
            border: '1px solid var(--divider-strong)',
            color: 'var(--fg)',
            borderRadius: 2,
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            minWidth: 180,
          }}
        />
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="section-head">
          <span className="num">{category === 'led' ? '01' : '02'}</span>
          <h2>
            {category === 'led'
              ? 'led or significant contribution'
              : 'collaboration papers & smaller contributions'}
          </h2>
          <span className="rule" />
          <span className="more" style={{ borderBottom: 'none', cursor: 'default' }}>
            {shown} / {total}
          </span>
        </div>
        {shown ? (
          renderSection(activeFiltered)
        ) : (
          <p style={{ color: 'var(--fg-muted)', fontStyle: 'italic' }}>
            No matches in this section.
          </p>
        )}
      </section>
    </article>
  );
}
window.Publications = Publications;
