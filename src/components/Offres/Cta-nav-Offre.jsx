import { Link, useLocation } from 'react-router-dom'
import '../../styles/components/Offre-Pages/CtaNavOffres.scss'
import { useTranslation } from 'react-i18next'

function CtaNavOffres({ ctaTitle, ctaHighlight, ctaSlug, ctaSubtitle }) {
    const { t } = useTranslation()
    const location = useLocation()
    const offres = t('offres.ctaNav.offres', { returnObjects: true })

    return (
        <div className="cta-nav-combo">
            <div className="cta-band">
                <div>
                <div className="cta-title">
                    {ctaTitle || t('offres.ctaNav.defaultTitle')} <em>{ctaHighlight || t('offres.ctaNav.defaultHighlight')}</em>
                </div>
                <div className="cta-sub">
                    {ctaSubtitle || t('offres.ctaNav.defaultSubtitle')}
                </div>
                </div>
                <Link to={`/contact?formule=${ctaSlug}`} className="cta-btn">
                {t('offres.ctaNav.cta')}
                </Link>
            </div>

            <div className="nav-offres">
                <div className="nav-offres-header">
                <span className="nav-offres-label">{t('offres.ctaNav.compare')}</span>
                </div>
                <div className="nav-offres-grid">
                {Array.isArray(offres) && offres.map((offre) => {
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