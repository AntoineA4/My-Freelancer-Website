import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function PlansPicker() {

  const {t} = useTranslation()
  const plans = t('offres.hebergement.plansPick.plans', {returnObjects: true})

  return (
    <section className="plans-section">
      <div className="plans-header">
        <div className="infos-title">{t('offres.hebergement.plansPick.title')}</div>
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
                {t('offres.hebergement.plansPick.btn')} {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlansPicker