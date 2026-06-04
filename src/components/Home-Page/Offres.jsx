import { Link } from 'react-router-dom';
import '../../styles/components/Home_page/Offres-section.scss'

function Offres() {
    return (
        <section className='Offres-section' id='offres'>
            <div className="offre-title">
                <h2>Mes Offres</h2>
            </div>
            <div className="offre-card-container">
                <Link to='/offres/site-une-page' className="Offre-card">
                    <div className="card-top-part corrail-card">
                        <h3>Site une page</h3>
                        <p className="title-sub">L'essentiel, bien fait</p>
                    </div>
                    <div className="card-bot-part">
                        <div className="offre-price">300€ <span>à 500€</span></div>
                        <p className="offre-price-sub">Selon complexité & animations</p>
                        <ul className="offre-items">
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Design sur-mesure</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Responsive mobile</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Formulaire de contact</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>SEO de base</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Livraison en 7 jours</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>2 allers-retours inclus</li>
                        </ul>
                        <div className="offre-badge">Idéal pour débuter</div>
                    </div>
                </Link>
                <Link to='/offres/site-vitrine' className="Offre-card">
                    <div className="card-top-part corrail-fonce-card">
                        <h3>Site vitrine</h3>
                        <p className="title-sub">3 à 5 pages professionnelles</p>
                    </div>
                    <div className="card-bot-part">
                        <div className="offre-price">800€ <span>à 1 200€</span></div>
                        <p className="offre-price-sub">Selon le nombre de pages & les fonctionnalités</p>
                        <ul className="offre-items">
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Jusqu'à 5 pages</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Design sur-mesure</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Responsive mobile</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>SEO optimisé</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Livraison en 14 jours</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>3 allers-retours inclus</li>
                        </ul>
                    </div>
                </Link>
                <Link to='/offres/hebergement' className="Offre-card">
                    <div className="card-top-part dark-card">
                        <h3>Pack Hébergement + maintenance</h3>
                        <p className="title-sub">L'essentiel en toute sérénité</p>
                    </div>
                    <div className="card-bot-part">
                        <div className="offre-price">50€ <span>/mois</span></div>
                        <p className="offre-price-sub">Sans engagement — préavis 30j</p>
                        <ul className="offre-items">
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Tout l'hébergement inclus</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Nom de domaine inclus</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Surveillance 24h/24</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Sauvegarde mensuelle</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Rapport mensuel</li>
                            <li><svg viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>1h de modifications/mois</li>
                        </ul>
                        <div className="offre-badge">Sans engagement</div>
                    </div>
                </Link>

            </div>
        </section>
    );
}

export default Offres;