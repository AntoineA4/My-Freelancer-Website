import { useTranslation } from 'react-i18next'
import '../../styles/components/Offre-Pages/PagesTypiques.scss'

const pages = [
  { icon: '🏠', name: 'Accueil',      desc: "Présentation, accroche et appel à l'action" },
  { icon: '👤', name: 'À propos',     desc: 'Qui vous êtes, votre parcours, votre philosophie' },
  { icon: '🛠', name: 'Services',     desc: 'Vos offres détaillées avec tarifs si souhaité' },
  { icon: '🖼', name: 'Portfolio',    desc: 'Galerie de vos réalisations (optionnel)' },
  { icon: '⭐', name: 'Avis clients', desc: 'Témoignages pour rassurer (optionnel)' },
  { icon: '✉️', name: 'Contact',      desc: 'Formulaire, carte Google Maps, coordonnées' },
]

function PagesTypiques() {

    const {t} =useTranslation()

    return (
        <section className="pages-typiques-section">
            <div className="infos-block-head">
                <span className="ih-icon">📄</span>
                <div className="infos-title">{t('offres.vitrine.pageTypique.title')}</div>
            </div>
            <div className="infos-body">
                <div className="pages-grid">
                {pages.map((page, index) => (
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