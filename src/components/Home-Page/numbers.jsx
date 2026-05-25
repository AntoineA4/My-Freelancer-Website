import '../../styles/components/Home_page/Numbers.scss'

function Numbers() {
    return(
        <section className='sectionNumbers'>
            <div className="container">
                <div className="section-numbers">
                    <h2>En quelques chiffres</h2>
                </div>
                <div className="reassurance-flex">
                    <div className="reass-card">
                        <div className="reass-val">7j</div>
                        <div className="reass-label">Délai livraison site une page</div>
                    </div>
                    <div className="reass-card">
                        <div className="reass-val">24h</div>
                        <div className="reass-label">Délai de réponse garanti</div>
                    </div>
                    <div className="reass-card">
                        <div className="reass-val">100%</div>
                        <div className="reass-label">Des fichiers remis au client</div>
                    </div>
                    <div className="reass-card">
                        <div className="reass-val">0€</div>
                        <div className="reass-label">Pour un devis détaillé</div>
                    </div>
                </div>
            </div>
</section>

    );
}
export default Numbers;