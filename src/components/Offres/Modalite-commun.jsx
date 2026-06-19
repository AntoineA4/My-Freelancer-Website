import { useTranslation } from "react-i18next"


function ModalitesCommunes() {

  const {t} = useTranslation()
  const items = t('offres.hebergement.modalites.items', {returnObjects: true})
  return (
    <section className="modalites-communes-section">
      <div className="infos-block-head">
        <span className="ih-icon">ℹ</span>
        <div className="infos-title">{t('offres.hebergement.modalites.title')}</div>
      </div>
      <div className="infos-body">
        {items.map((item, index) => (
          <div key={index} className="modalite-row">
            <span className="modalite-label">{item.label}</span>
            <span className="modalite-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ModalitesCommunes