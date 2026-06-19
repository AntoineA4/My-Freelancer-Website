import { useTranslation } from "react-i18next"

function PourquoiMoi() {

  const {t} = useTranslation()
  const items = t('offres.hebergement.whyMe.items', {returnObjects: true})

  return (
    <section className="pourquoi-section">
      <div className="infos-block-head">
        <span className="ih-icon">💡</span>
        <div className="infos-title">{t('offres.hebergement.whyMe.title')}</div>
      </div>
      <div className="infos-body">
        {items.map((raison, index) => (
          <div key={index} className="raison-item">
            <div className="raison-icon">{raison.icon}</div>
            <div>
              <div className="raison-title">{raison.title}</div>
              <div className="raison-desc">{raison.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PourquoiMoi