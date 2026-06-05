const raisons = [
  {
    icon: '🔒',
    title: 'Vous restez propriétaire',
    desc: "Le domaine et les fichiers sont à vous. Si vous résiliez, vous repartez avec tout — migration accompagnée gratuitement.",
  },
  {
    icon: '👤',
    title: 'Un seul interlocuteur',
    desc: "Problème d'affichage, email qui bug, site lent ? Vous m'écrivez, je gère. Pas de hotline, pas de ticket.",
  },
  {
    icon: '✉️',
    title: 'Email pro inclus',
    desc: "contact@votrenom.fr est bien plus professionnel qu'un @gmail.com. Inclus dans toutes les formules.",
  },
]

function PourquoiMoi() {
  return (
    <section className="pourquoi-section">
      <div className="infos-block-head">
        <span className="ih-icon">💡</span>
        <div className="infos-title">Pourquoi passer par moi ?</div>
      </div>
      <div className="infos-body">
        {raisons.map((raison, index) => (
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