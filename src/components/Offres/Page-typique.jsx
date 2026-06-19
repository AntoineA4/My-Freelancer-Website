import { useTranslation } from 'react-i18next'
import '../../styles/components/Offre-Pages/PagesTypiques.scss'

function PagesTypiques() {

    const {t} =useTranslation()
    const items = t('offres.vitrine.pageTypique.items', {returnObjects: true})

    return (
        <section className="pages-typiques-section">
            <div className="infos-block-head">
                <span className="ih-icon">📄</span>
                <div className="infos-title">{t('offres.vitrine.pageTypique.title')}</div>
            </div>
            <div className="infos-body">
                <div className="pages-grid">
                {items.map((page, index) => (
                    <div key={index} className="page-card">
                    <div className="page-card-icon">{page.icon}</div>
                    <div className="page-card-name">{page.name}</div>
                    <div className="page-card-desc">{page.desc}</div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default PagesTypiques