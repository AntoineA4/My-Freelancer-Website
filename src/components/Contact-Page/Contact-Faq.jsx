import '../../styles/components/Contact_page/ContactFaq.scss'

function ContactFaq() {
    return (
        <div className="infos-inner">
            <div className="infos-head">
                <h3 className="infos-title">Questions fréquentes</h3>
            </div>
            <div className="infos-body">
                <div className="faq">
                    <div className="faq-question">Le devis est vraiment gratuit ?</div>
                    <div className="faq-answer">Oui, sans conditions. Je prends le temps d'analyser votre projet avant de vous proposer un tarif fixe.</div>
                </div>
                <div className="faq">
                    <div className="faq-question">Je n'ai pas encore tout défini, c'est un problème ?</div>
                    <div className="faq-answer">Pas du tout. Décrivez simplement votre idée, on affine ensemble lors de l'échange.</div>
                </div>
                <div className="faq">
                    <div className="faq-question">Combien de temps pour avoir une réponse ?</div>
                    <div className="faq-answer">Je m'engage à répondre sous 24h ouvrées, souvent bien avant.</div>
                </div>
                <div className="faq">
                    <div className="faq-question">Puis-je vous appeler directement ?</div>
                    <div className="faq-answer">Je préfère un premier contact par email pour préparer l'échange, mais un appel peut être organisé ensuite.</div>
                </div>
            </div>
        </div>
    );
};

export default ContactFaq;