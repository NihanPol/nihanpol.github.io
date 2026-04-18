function Group() {
  return (
    <article className="page container">
      <header className="masthead">
        <div className="eyebrow">people</div>
        <h1 className="name" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>group</h1>
        <p className="role">
          The Pol group at Texas Tech studies pulsars, gravitational waves, and the astrophysics of
          compact-object binaries.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="section-head">
          <span className="num">01</span>
          <h2>current members</h2>
          <span className="rule" />
        </div>
        <div className="group-grid">
          {window.GROUP.map((p, i) => (
            <div className="person" key={i}>
              <div className="avatar">{p.avatar}</div>
              <div>
                <div className="name">{p.name}</div>
                <div className="role">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="num">02</span>
          <h2>joining the group</h2>
          <span className="rule" />
        </div>
        <div className="prose">
          <p>
            Interested students are welcome to reach out by email or stop by my office.
          </p>
        </div>
      </section>
    </article>
  );
}
window.Group = Group;
