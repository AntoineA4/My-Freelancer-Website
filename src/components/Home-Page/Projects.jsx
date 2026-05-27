import '../../styles/components/Home_page/Projects.scss'

function Projects () {
    return (
        <section className="projects-section">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="Projects-title">Projets récents</h2>
                    <a href="#" className="section-link">Tous les projets →</a>
                </div>
                <div className="projects-flex">
                    <a href="#" className="project-card">
                        <div className="project-thumb pt-corail">
                            <svg viewBox="0 0 24 24" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                        </div>
                        <div className="project-info">
                            <div className="project-name">Site vitrine — Restaurant</div>
                            <div className="project-tags">
                                <span className="tag tag-corail">HTML/CSS</span>
                                <span className="tag tag-corail">JS</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="project-card">
                        <div className="project-thumb pt-purple">
                            <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
                        </div>
                        <div className="project-info">
                            <div className="project-name">Landing page — SaaS</div>
                            <div className="project-tags">
                                <span className="tag tag-purple">React</span>
                                <span className="tag tag-purple">Tailwind</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="project-card">
                        <div className="project-thumb pt-green">
                            <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        </div>
                        <div className="project-info">
                            <div className="project-name">Portfolio — Photographe</div>
                            <div className="project-tags">
                                <span className="tag tag-green">Next.js</span>
                                <span className="tag tag-green">CSS</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="project-card">
                        <div className="project-thumb pt-amber">
                            <svg viewBox="0 0 24 24" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                        </div>
                        <div className="project-info">
                            <div className="project-name">Page YouTubeur</div>
                            <div className="project-tags">
                                <span className="tag tag-amber">HTML/CSS</span>
                                <span className="tag tag-amber">JS</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects; 