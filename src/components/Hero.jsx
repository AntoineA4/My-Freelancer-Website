import { Link } from 'react-router-dom';
import '../styles/components/Hero.scss'

function Hero({
    tag,
    title,
    highlight,
    subtitle,
    showBreak = false,
    showBtn = false, 
    primaryBtn,
    secondaryBtn,
    heroClass = 'hero-corail',


}) {
    return(
        <section className={`hero ${heroClass}`} id='home-hero'>
            <div className='hero-text-cointainer'>
                <div className="hero-tag">{tag}</div>
                <h1 className="hero-title anim-fade">
                    {title} 
                    {showBreak && <br />}
                    <em>{highlight}</em>
                </h1>
                <p className="hero-sub anim-fade">
                    {subtitle}
                </p>
               {showBtn && (
                 <div className="hero-btns anim-fade">
                    <a href="#offres" className="btn-primary">{primaryBtn}</a>
                    <Link to='/contact' className="btn-secondary">{secondaryBtn}</Link>
                </div>
               )}
            </div>
        </section>
    )

};

export default Hero; 