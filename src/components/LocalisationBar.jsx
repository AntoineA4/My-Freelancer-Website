import { Link, useNavigate } from 'react-router-dom'
import '../styles/components/LocalisationBar.scss'

function LocalisationBar({ section, page }) {
  const navigate = useNavigate()

  const handleSectionClick = (e) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      const target = document.querySelector('#offres')
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="localisationBar">
      <div className="localisationBar-inner">

        <Link to="/">Accueil</Link>

        {section && (
          <>
            <span className="bc-sep">›</span>
            {page ? (
              <a href="/#offres" onClick={handleSectionClick} className="bc-link">
                {section.label}
              </a>
            ) : (
              <span className="localBar-text">{section.label}</span>
            )}
          </>
        )}

        {page && (
          <>
            <span className="bc-sep">›</span>
            <span className="localBar-text">{page}</span>
          </>
        )}

      </div>
    </div>
  )
}

export default LocalisationBar