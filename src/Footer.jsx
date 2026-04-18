function Footer() {
  const S = window.SITE;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          © 2026 {S.name.first} {S.name.last} · {S.institution} ·{' '}
          <a href={`mailto:${S.email}`}>{S.email}</a>
        </div>
        <div className="footer-colophon">
          set in roboto · built with react · no tracking
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
