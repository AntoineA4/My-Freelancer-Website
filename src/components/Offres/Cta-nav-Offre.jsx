import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../styles/components/Offre-Pages/CtaNavOffres.scss'


const {t} = useTranslation()

const offres = [
    {
        slug: '/offres/site-une-page',
        name: 'Site une page',
        price: '300€ – 500€',
        badge: null,
    },
    {
        slug: '/offres/site-vitrine',
        name: 'Site vitrine',
        price: '800€ – 1 200€',
        badge: null,
    },
    {
        slug: '/offres/hebergement',
        name: 'Hébergement',
        price: '20€ – 70€/mois',
        badge: '3 formules',
    },
]

function CtaNavOffres({ ctaTitle = "Ce site", ctaHighlight = "vous correspond ?", ctaSlug, ctaSubtitle="Devis gratuit · Réponse sous 24h · Sans engagement" }) {
    const location = useLocation()

    return (
        <div className="cta-nav-combo">

            <div className="cta-band">
                <div>
                    <div className="cta-title">
                        {ctaTitle} <em>{ctaHighlight}</em>
                    </div>
                    <div className="cta-sub">
                        {ctaSubtitle}
                    </div>
                </div>
                <Link
                    to={`/contact?formule=${ctaSlug}`}
                    className="cta-btn"
                    >
                    Demander un devis →
                </Link>
            </div>

            <div className="nav-offres">
                <div className="nav-offres-header">
                    <span className="nav-offres-label">Comparer les offres</span>
                </div>
                <div className="nav-offres-grid">
                    {offres.map((offre) => {
                        const isActive = location.pathname === offre.slug
                        return (
                        <Link
                            key={offre.slug}
                            to={offre.slug}
                            className={`nav-offre-item ${isActive ? 'active' : ''}`}
                        >
                            <div className="nav-offre-top">
                            <div className="nav-offre-name">{offre.name}</div>
                            {isActive && <span className="active-dot"></span>}
                            </div>
                            <div className="nav-offre-price">{offre.price}</div>
                            {offre.badge && (
                            <div className="nav-offre-badge">{offre.badge}</div>
                            )}
                        </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default CtaNavOffres