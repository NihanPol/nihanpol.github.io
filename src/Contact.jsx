function Contact() {
  const S = window.SITE;
  return (
    <article className="page container">
      <header className="masthead">
        <div className="eyebrow">get in touch</div>
        <h1 className="name" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>contact</h1>
        <p className="role">
          Please feel free to reach out — preferably by email. I reply to legitimate messages within
          a week.
        </p>
      </header>

      <div className="contact-grid" style={{ marginTop: 40 }}>
        <div className="contact-card">
          <h4>Email</h4>
          <p><a href={`mailto:${S.email}`}>{S.email}</a></p>
          <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', marginTop: 8 }}>
            Interested students are welcome to reach out by email or stop by my office.
          </p>
        </div>

        <div className="contact-card">
          <h4>Office</h4>
          <p>{S.office}</p>
          <p>Department of Physics & Astronomy</p>
          <p>{S.institution}</p>
          <p>{S.city}</p>
        </div>

        <div className="contact-card">
          <h4>Office hours</h4>
          <p>By appointment.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', marginTop: 8 }}>
            Email me a few windows that work and I'll confirm one, or stop by my office.
          </p>
        </div>
      </div>

      <div className="social-row">
        {S.socials.map((s, i) => (
          <a key={i} href={s.href} title={s.label} aria-label={s.label}>
            <i className={s.cls}></i>
          </a>
        ))}
      </div>
    </article>
  );
}
window.Contact = Contact;
