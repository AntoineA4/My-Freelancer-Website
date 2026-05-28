import '../styles/components/Hero.scss'

function Hero({
    tag,
    title,
    highlight,
    subtitle,
    showBtn = false, 
    primaryBtn,
    secondaryBtn,


}) {
    return(
        <section className="hero" id='home-hero'>
            <div>
                <div className="hero-tag">{tag}</div>
                <h1 className="hero-title anim-fade">
                    {title} <br />
                    <em>{highlight}</em>
                </h1>
                <p className="hero-sub anim-fade">
                    {subtitle}
                </p>
               {showBtn && (
                 <div className="hero-btns anim-fade">
                    <a href="#offres" class="btn-primary">{primaryBtn}</a>
                    <a href="#" class="btn-secondary">{secondaryBtn}</a>
                </div>
               )}
            </div>
        </section>
    )

};

export default Hero; 