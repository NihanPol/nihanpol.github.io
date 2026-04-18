function App() {
  const [tweaks, setTweaks] = React.useState(window.TWEAKS);
  const [page, setPage] = React.useState(() => localStorage.getItem('nhp_page') || 'about');
  const [theme, setTheme] = React.useState(() =>
    localStorage.getItem('nhp_theme') || tweaks.defaultTheme || 'light'
  );
  const [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => { localStorage.setItem('nhp_page', page); }, [page]);
  React.useEffect(() => { localStorage.setItem('nhp_theme', theme); }, [theme]);

  // edit-mode protocol (tweaks panel toggle from host)
  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setEditMode(true);
      if (e.data?.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (err) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // apply accent via CSS vars
  const accent = window.ACCENTS[tweaks.accent] || window.ACCENTS.ttured;
  const rootStyle = {
    '--theme-light': accent.light,
    '--theme-dark': accent.dark,
  };

  // scroll to top on page change
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [page]);

  const pages = {
    about: <About setPage={setPage} />,
    news: <News />,
    publications: <Publications />,
    teaching: <Teaching />,
    group: <Group />,
    contact: <Contact />,
  };

  return (
    <div
      className={`root ${theme}`}
      data-landing={tweaks.landing}
      data-density={tweaks.density}
      data-screen-label={`01 ${page}`}
      style={rootStyle}
    >
      <Navbar page={page} setPage={setPage} theme={theme} setTheme={setTheme} />
      {pages[page] || pages.about}
      <Footer />
      {editMode && (
        <Tweaks
          tweaks={tweaks}
          setTweaks={setTweaks}
          active={editMode}
          setActive={setEditMode}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
