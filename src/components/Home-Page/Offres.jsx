import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../styles/components/Home_page/Offres-section.scss'

function Offres() {
    const { t } = useTranslation()
    const offres = t('home.offres.items', { returnObjects: true })

    return (
        <section className='offres-section' id='offres'>
        <div className="offre-title">
            <h2>{t('home.offres.title')}</h2>
        </div>
        <div className="offre-home-card-container">
            {offres.map((offre) => (
            <Link to={offre.link} key={offre.id} className="offre-home-card">
                <div className={`card-top-part ${offre.colorClass}`}>
                <h3>{offre.name}</h3>
                <p className="title-sub">{offre.subtitle}</p>
                </div>
                <div className="card-bot-part">
                <div className="offre-price">
                    {offre.price} <span>{offre.priceRange}</span>
                </div>
                <p className="offre-price-sub">{offre.priceSub}</p>
                <ul className="offre-items">
                    {offre.items.map((item, index) => (
                    <li key={index}>
                        <svg viewBox="0 0 24 24" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {item}
                    </li>
                    ))}
                </ul>
                {offre.badge && (
                    <div className="offre-badge">{offre.badge}</div>
                )}
                </div>
            </Link>
            ))}
        </div>
        </section>
    )
}

export default Offres