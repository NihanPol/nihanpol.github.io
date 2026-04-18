function About({ setPage }) {
  const S = window.SITE;
  return (
    <article className="page container">
      <header className="masthead">
        <div className="eyebrow">assistant professor · astrophysics</div>
        <h1 className="name"><span className="first">Nihan</span> Pol</h1>
        <p className="role">
          Radio & gravitational-wave astronomer at <b>Texas Tech University</b>.
          Member of <a href="https://nanograv.org/" target="_blank" rel="noopener noreferrer">NANOGrav</a> and the <a href="https://ipta4gw.org/" target="_blank" rel="noopener noreferrer">International Pulsar Timing Array</a>.
          I use millisecond pulsars as Galaxy-wide clocks to detect nanohertz gravitational waves.
        </p>
      </header>

      <div className="about-grid">
        <div className="prose">
          <p>
            I'm an Assistant Professor in the Department of Physics & Astronomy at Texas Tech University
            in Lubbock, TX. My research uses pulsar timing arrays — networks of millisecond pulsars
            whose pulse arrival times are tracked for decades — to detect gravitational waves at
            nanohertz frequencies, a regime inaccessible to LIGO and space-based detectors like LISA.
          </p>
          <p>
            In 2023, <a href="https://nanograv.org/" target="_blank" rel="noopener noreferrer">NANOGrav</a> and our <a href="https://ipta4gw.org/" target="_blank" rel="noopener noreferrer">IPTA partners</a> reported the first evidence for a
            stochastic gravitational-wave background — likely sourced by the population of
            supermassive black hole binaries merging throughout cosmic history. My work now focuses
            on sharpening those constraints, searching for individual binary sources, and modeling
            the Galactic pulsar population that underpins the whole enterprise.
          </p>
          <p>
            Before Texas Tech, I was a NANOGrav Postdoctoral Fellow at Oregon State University and
            a Vanderbilt Initiative in Data-intensive Astrophysics (VIDA) Fellow with
            <a href="https://stevertaylor.github.io/" target="_blank" rel="noopener noreferrer"> Stephen Taylor's group</a>. I earned my PhD from West Virginia University in 2020,
            working with <a href="https://gwac.wvu.edu/about/people/maura-mclaughlin" target="_blank" rel="noopener noreferrer">Maura McLaughlin</a> and <a href="https://gwac.wvu.edu/about/people/duncan-lorimer" target="_blank" rel="noopener noreferrer">Duncan Lorimer</a>.
          </p>
          <p>
            Interested students are welcome to reach out by email or stop by my office.
          </p>

          <div className="affils">
            {S.affiliations.map((a, i) => (
              <div className="aff" key={i}>
                <span className="k">{a.k}</span>
                <span className="v">{a.v}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="profile-card">
          <div className="profile-pic" />
          <div className="profile-meta">
            <p><span className="label">research</span>neutron stars · pulsars · gravitational waves · data-intensive astrophysics · astrostatistics</p>
            <p><span className="label">office</span>{S.office}</p>
            <p><span className="label">city</span>{S.city}</p>
            <p><span className="label">email</span><a href={`mailto:${S.email}`}>{S.email}</a></p>
          </div>
        </aside>
      </div>

      {/* news preview */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-head">
          <span className="num">01</span>
          <h2>recent news</h2>
          <span className="rule" />
          <a className="more" href="#" onClick={(e) => { e.preventDefault(); setPage('news'); }}>all news →</a>
        </div>
        <ul className="news-list">
          {window.NEWS.slice(0, 5).map((n, i) => (
            <li key={i}>
              <span className="date">{n.date}</span>
              <span dangerouslySetInnerHTML={{ __html: n.html }} />
            </li>
          ))}
        </ul>
      </section>

      {/* selected pubs */}
      <section className="section">
        <div className="section-head">
          <span className="num">02</span>
          <h2>selected publications</h2>
          <span className="rule" />
          <a className="more" href="#" onClick={(e) => { e.preventDefault(); setPage('publications'); }}>full list →</a>
        </div>
        <div className="pub-list">
          {[window.PUBS_LED[0].items[0], window.PUBS_LED[1].items[0], window.PUBS_LED[3].items[0]].map((p, i) => (
            <div className="pub" key={i}>
              <div className="venue-row">
                <span className="venue">{p.venue}</span>
                {p.award && <span className="award">{p.award}</span>}
              </div>
              <div className="title">{p.title}</div>
              <div className="authors">
                {p.authors.map((a, j) => {
                  const me = a.includes('Pol');
                  const more = a.startsWith('+');
                  return (
                    <React.Fragment key={j}>
                      {me ? <em>{a}</em> : more ? <span className="more">{a}</span> : a}
                      {j < p.authors.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="meta"><em>{p.venueName}</em></div>
              <div className="actions">
                {window.pubLinks(p).map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
window.About = About;
