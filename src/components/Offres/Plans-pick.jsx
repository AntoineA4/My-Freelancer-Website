import { Link } from 'react-router-dom'

const plans = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    desc: 'Hébergement uniquement',
    price: '20€',
    period: '/mois',
    priceSub: 'facturé annuellement — 240€/an',
    headClass: 'plan-head-essentiel',
    btnClass: 'plan-btn-outline',
    items: [
      { included: true,  text: 'Nom de domaine inclus' },
      { included: true,  text: 'Hébergement serveur rapide' },
      { included: true,  text: 'Certificat SSL/HTTPS' },
      { included: true,  text: 'Email pro (1 adresse)' },
      { included: true,  text: 'Mise en ligne complète' },
      { included: false, text: 'Surveillance & sauvegardes' },
      { included: false, text: 'Modifications mensuelles' },
    ],
  },
  {
    id: 'serenite',
    name: 'Sérénité',
    desc: 'Hébergement + maintenance',
    price: '45€',
    period: '/mois',
    priceSub: 'sans engagement — préavis 30 jours',
    headClass: 'plan-head-serenite',
    btnClass: 'plan-btn-fill',
    featured: true,
    badge: 'Le plus demandé',
    items: [
      { included: true,  text: "Tout l'Essentiel inclus" },
      { included: true,  text: 'Surveillance 24h/24' },
      { included: true,  text: 'Sauvegarde mensuelle' },
      { included: true,  text: 'Vérification SSL mensuelle' },
      { included: true,  text: '30 min de modifications/mois' },
      { included: true,  text: 'Rapport mensuel' },
      { included: false, text: 'Support prioritaire' },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    desc: 'Service complet & prioritaire',
    price: '70€',
    period: '/mois',
    priceSub: 'sans engagement — préavis 30 jours',
    headClass: 'plan-head-premium',
    btnClass: 'plan-btn-dark',
    items: [
      { included: true, text: 'Tout Sérénité inclus' },
      { included: true, text: '1h30 de modifications/mois' },
      { included: true, text: 'Support prioritaire (24h)' },
      { included: true, text: 'Rapport détaillé mensuel' },
      { included: true, text: 'Optimisation performance' },
      { included: true, text: 'Audit SEO trimestriel' },
      { included: true, text: '2 adresses email pro' },
    ],
  },
]

function PlansPicker() {
  return (
    <section className="plans-section">
      <div className="plans-header">
        <span className="ih-icon">☰</span>
        <div className="infos-title">Choisissez votre formule</div>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${plan.featured ? 'plan-featured' : ''}`}
          >
            <div className={`plan-head ${plan.headClass}`}>
              {plan.badge && (
                <div className="plan-badge">{plan.badge}</div>
              )}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-desc">{plan.desc}</div>
            </div>
            <div className="plan-body">
              <div className="plan-price">
                {plan.price}
                <span>{plan.period}</span>
              </div>
              <div className="plan-price-sub">{plan.priceSub}</div>
              <ul className="plan-items">
                {plan.items.map((item, index) => (
                  <li
                    key={index}
                    className={item.included ? 'item-included' : 'item-excluded'}
                  >
                    <span className="item-ico">
                      {item.included ? '✓' : '✗'}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?formule=hebergement"
                className={`plan-btn ${plan.btnClass}`}
              >
                Choisir {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlansPicker