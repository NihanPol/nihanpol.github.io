function News() {
  return (
    <article className="page container">
      <header className="masthead">
        <div className="eyebrow">the lab notebook</div>
        <h1 className="name" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>news</h1>
        <p className="role">Papers, talks, grants, and group milestones. Reverse chronological.</p>
      </header>
      <ul className="news-list" style={{ marginTop: 40 }}>
        {window.NEWS.map((n, i) => (
          <li key={i}>
            <span className="date">{n.date}</span>
            <span dangerouslySetInnerHTML={{ __html: n.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
}
window.News = News;
