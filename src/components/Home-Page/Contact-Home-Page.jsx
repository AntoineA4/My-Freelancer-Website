import '../../styles/components/Home_page/Contact-Home.scss'

function ContactHomePage () {

    return(
        <section className="Contact-Home-Section">
            <div className="Contact-Home-Title"> Un projet <em>en tête ?</em></div>
            <p className="Contact-Home-subTitle">Votre devis gratuit, réponse sous 24h.</p>
            <div className="Contact-Home-btn-flex">
                <a href="mailto:contact@tonnom.fr" className="Contact-Home-btn">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    contact@tonnom.fr
                </a>
                <a href="https://linkedin.com/in/tonnom" target="_blank" rel="noopener" className="Contact-Home-btn">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                </a>
                <a href="https://www.malt.fr/profile/tonnom" target="_blank" rel="noopener" className="Contact-Home-btn">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Profil Malt ↗
                </a>
            </div>
        </section>
    );
};

export default ContactHomePage;