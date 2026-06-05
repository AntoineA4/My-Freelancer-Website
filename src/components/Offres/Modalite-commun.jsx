const modalites = [
  { label: 'Engagement',          value: 'Aucun' },
  { label: 'Préavis résiliation', value: '30 jours' },
  { label: 'Paiement',           value: 'Mensuel ou annuel' },
  { label: 'Heures non utilisées', value: 'Non reportées' },
  { label: 'Contact',            value: 'Email uniquement' },
  { label: 'Migration si résiliation', value: 'Accompagnée, gratuite' },
  { label: 'TVA',                value: 'Non applicable, art. 293B' },
]

function ModalitesCommunes() {
  return (
    <section className="modalites-communes-section">
      <div className="infos-block-head">
        <span className="ih-icon">ℹ</span>
        <div className="infos-title">Modalités communes</div>
      </div>
      <div className="infos-body">
        {modalites.map((item, index) => (
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