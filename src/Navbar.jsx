function Navbar({ page, setPage, theme, setTheme }) {
  const items = ['about', 'news', 'publications', 'teaching', 'group', 'contact'];
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }}>
          <span className="brand-mark"><span className="first">Nihan</span> Pol</span>
          <span className="brand-tag">ttu · nanograv</span>
        </a>
        <ul className="nav-links">
          {items.map((it) => (
            <li key={it}>
              <a
                href="#"
                className={page === it ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setPage(it); }}
              >
                {it}
              </a>
            </li>
          ))}
          <li>
            <button
              className="theme-btn"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              title="Change theme"
              aria-label="Change theme"
            >
              <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
window.Navbar = Navbar;
