import '../../styles/components/Home_page/WhyMe.scss'

function WhyMe() {

    return(
        <section className="WhyMe-section">
            <div className="Main-title-WhyMe">
                <h2>Pourquoi me choisir</h2>
            </div>
            <div className="whyMe-flex">
                <div className="whyMe-card">
                    <div className="whyMe-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" stroke="#D85A30" fill="none" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div className="whyMe-title">Livraison rapide</div>
                    <div className="whyMe-desc">Site livré en 7 à 14 jours selon la formule choisie</div>
                </div>
                <div className="whyMe-card">
                    <div className="whyMe-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" stroke="#D85A30" fill="none" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div className="whyMe-title">Interlocuteur direct</div>
                    <div className="whyMe-desc">Vous parlez avec le dev, pas un commercial ou un chef de projet</div>
                </div>
                <div className="whyMe-card">
                    <div className="whyMe-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" stroke="#D85A30" fill="none" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <div className="whyMe-title">Vous restez propriétaire</div>
                    <div className="whyMe-desc">Tous les accès, fichiers sources et le domaine vous sont remis</div>
                </div>
            </div>
        </section>

    );
}

export default WhyMe; 