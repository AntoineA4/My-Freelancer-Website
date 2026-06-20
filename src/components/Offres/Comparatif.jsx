import { useTranslation } from 'react-i18next'
import '../../styles/components/Offre-Pages/Comparatifs.scss'

function Comparatif({ title = "Comparatif", icon = "↔", tableClass='', headers = [], rows = [] }) {

  const {t}= useTranslation()

  return (
    <section className={`comparatif-section ${tableClass}`}>
      <div className="infos-block-head">
        <span className="ih-icon">{icon}</span>
        <div className="infos-title">{title}</div>
      </div>
      <div className="comparatif-body">
        <table className="comparatif-table">
          <thead>
            <tr>
              <th>{t('offres.vitrine.comparatif.firstRowName')}</th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={header.featured ? 'col-featured' : ''}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={row.isPrice ? 'row-price' : ''}>
                <td className="row-label">{row.label}</td>
                {headers.map((header, hIndex) => {
                  const val = row[header.key]
                  return (
                    <td
                      key={hIndex}
                      className={`
                        ${header.featured ? 'col-featured' : ''}
                        ${val === '✓' ? 'cell-check' : ''}
                        ${val === '—' ? 'cell-dash' : ''}
                      `}
                    >
                      {val}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Comparatif