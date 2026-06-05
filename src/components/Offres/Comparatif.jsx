const rows = [
  { label: 'Nom de domaine',       essentiel: '✓', serenite: '✓', premium: '✓' },
  { label: 'Hébergement & SSL',    essentiel: '✓', serenite: '✓', premium: '✓' },
  { label: 'Email pro',            essentiel: '1 adresse', serenite: '1 adresse', premium: '2 adresses' },
  { label: 'Surveillance 24h/24',  essentiel: '—', serenite: '✓', premium: '✓' },
  { label: 'Sauvegardes',          essentiel: '—', serenite: '✓', premium: '✓' },
  { label: 'Modifications/mois',   essentiel: '—', serenite: '30 min', premium: '1h30' },
  { label: 'Support',              essentiel: '—', serenite: '—', premium: 'Prioritaire 24h' },
  { label: 'Audit SEO',            essentiel: '—', serenite: '—', premium: 'Trimestriel' },
  { label: 'Prix mensuel',         essentiel: '20€', serenite: '45€', premium: '70€', isPrice: true },
]

function Comparatif() {
  return (
    <section className="comparatif-section">
      <div className="infos-block-head">
        <span className="ih-icon">↔</span>
        <div className="infos-title">Comparatif des formules</div>
      </div>
      <div className="comparatif-body">
        <table className="comparatif-table">
          <thead>
            <tr>
              <th>Fonctionnalité</th>
              <th>Essentiel</th>
              <th className="col-featured">Sérénité</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={row.isPrice ? 'row-price' : ''}>
                <td className="row-label">{row.label}</td>
                <td className={row.essentiel === '✓' ? 'cell-check' : row.essentiel === '—' ? 'cell-dash' : ''}>
                  {row.essentiel}
                </td>
                <td className={`col-featured ${row.serenite === '✓' ? 'cell-check' : row.serenite === '—' ? 'cell-dash' : ''}`}>
                  {row.serenite}
                </td>
                <td className={row.premium === '✓' ? 'cell-check' : row.premium === '—' ? 'cell-dash' : ''}>
                  {row.premium}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Comparatif