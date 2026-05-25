import '../../styles/components/Home_page/ForWho.scss'

function ForWho() {
    return (
        <section>
            <div className="section-forWho">
                <h2>Pour qui je travaille</h2>
            </div>
            <div className="pourqui-grid">
                <div className="pq-card">
                    <div className="pq-icon">
                        <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    </div>
                    <div>
                        <div className="pq-name">Artisans & commerçants</div>
                        <div className="pq-desc">Plombiers, électriciens, menuisiers qui veulent être trouvés sur Google</div>
                    </div>
                </div>
            <div className="pq-card">
                <div className="pq-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
                </div>
                <div>
                    <div className="pq-name">Restaurateurs</div>
                    <div className="pq-desc">Carte en ligne, réservation, horaires — tout ce qu'un client cherche</div>
                </div>
            </div>
            <div className="pq-card">
                <div className="pq-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div>
                    <div className="pq-name">Coachs & consultants</div>
                    <div className="pq-desc">Mettre en avant votre expertise et générer des prises de contact</div>
                </div>
            </div>
            <div className="pq-card">
                <div className="pq-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </div>
                <div>
                    <div className="pq-name">Créatifs & photographes</div>
                    <div className="pq-desc">Un portfolio qui met vraiment en valeur votre travail</div>
                </div>
            </div>
            <div className="pq-card">
                <div className="pq-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                </div>
                <div>
                    <div className="pq-name">Créateurs de contenu</div>
                    <div className="pq-desc">Page de présentation, liens bio, monétisation — je connais cet univers</div>
                </div>
            </div>
            <div className="pq-card">
                <div className="pq-icon">
                    <svg viewBox="0 0 24 24" strokeWIdth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div>
                    <div className="pq-name">TPE & indépendants</div>
                    <div className="pq-desc">Toute activité qui a besoin d'une présence en ligne professionnelle</div>
                </div>
            </div>
        </div>
    </section>      
    )
}

export default ForWho; 