import '../styles/components/Hero.scss'

function Hero() {
    return(
        <section className="hero" id='home-hero'>
            <div>
                <div className="hero-tag">Développeur web freelance</div>
                <h1 className="hero-title anim-fade">
                    Je crée des sites Web <br />
                    <em>qui convertissent</em>
                </h1>
                <p className="hero-sub anim-fade">
                    Sites vitrine, landing pages et intégrations sur-mesure. <br />
                    Disponible à distance, partout dans le monde.
                </p>
                <div className="hero-btns anim-fade">
                    <a href="#offres" class="btn-primary">Voir mes offres</a>
                    <a href="#" class="btn-secondary">Discutons ↗</a>
                </div>
            </div>
            <div className="hero-avatar">
                {/* Inserer photo ici et remplacer lignes du dessous*/}
                <div className="hero-avatar-placeholder">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5" width="80"
                    height="80"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                </div>
            </div>

        </section>
    )

};

export default Hero; 