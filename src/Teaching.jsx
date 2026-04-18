function Teaching() {
  return (
    <article className="page container">
      <header className="masthead">
        <div className="eyebrow">courses</div>
        <h1 className="name" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>teaching</h1>
        <p className="role">
          I teach courses on gravitational-wave and electromagnetic-wave astrophysics,
          as well as data analysis and machine learning methods.
          Office hours are by appointment — email me with a few times that work.
        </p>
      </header>

      <div className="teach-grid" style={{ marginTop: 36 }}>
        {window.COURSES.map((c, i) => {
          const Wrap = c.href ? 'a' : 'div';
          const props = c.href ? { href: c.href, target: '_blank', rel: 'noopener' } : {};
          return (
            <Wrap className="course" key={i} {...props} style={c.href ? {textDecoration: 'none', color: 'inherit'} : undefined}>
              <span className="code">{c.code}</span>
              <h3>{c.title}</h3>
              <span className="term">{c.term}</span>
              <p>{c.blurb}</p>
              {c.href && <span style={{fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--theme)', marginTop: 6, letterSpacing: '0.04em'}}>course materials on github →</span>}
            </Wrap>
          );
        })}
      </div>

    </article>
  );
}
window.Teaching = Teaching;
