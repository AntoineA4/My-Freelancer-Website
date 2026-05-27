import '../../styles/components/Home_page/Skills.scss'

function Skills () {

    return(
        <section className="skills-section">
            <div className="skills-title">
                <h2>Compétences</h2>
            </div>
            <div className="skills-flex">
                <div className="skill-pill pill-corail">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    HTML / CSS
                </div>
                <div className="skill-pill pill-corail">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
                    JavaScript
                </div>
                <div className="skill-pill pill-purple">
                    <svg viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" width="16" height="16">
                        {/* Ellipse horizontale */}
                        <ellipse cx="12" cy="12" rx="10" ry="4"/>
                        {/* Ellipse inclinée gauche */}
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
                        {/* Ellipse inclinée droite */}
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
                        {/* Point central */}
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                    </svg>
                    React
                </div>
                <div className="skill-pill pill-green">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    Responsive design
                </div>
                <div className="skill-pill pill-corail">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                    Montage vidéo
                </div>
                <div className="skill-pill pill-amber">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                    Sound design
                </div>
                <div className="skill-pill pill-green">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    SEO
                </div>
                <div className="skill-pill pill-purple">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                    Figma
                </div>
            </div>
        </section>
    )
}
export default Skills; 