import DirectContact from "./Direct-contact";
import Steps from "../Steps";
import Faq from "../Faq";
import '../../styles/components/Contact_page/InfosSection.scss'

function InfosSection () {

    return (
        <section className="infos-section" aria-label="Informations de contact">
            <div class="dispo-band-infos">
                <span class="dispo-dot"></span>
                <span class="dispo-text">Disponible pour de nouvelles missions</span>
            </div>
            <DirectContact />
            <Steps 
                title="Comment ça se passe"
                titleTag="h3"
                classBox="Contact-Page-Box"        
                steps={[
                    { title: 'Vous envoyez votre demande', desc: 'Via ce formulaire ou par email directement' },
                    { title: 'Je vous réponds sous 24h',   desc: 'Avec un devis détaillé et gratuit' },
                    { title: 'On affine ensemble',         desc: 'Échange rapide pour caler les détails' },
                    { title: 'On démarre !',               desc: 'Acompte de 50% et la création commence' },
                ]}
            />
            <Faq 
                title="Questions fréquentes"
                titleTag="h3" 
                classBox="Contact-Page-Box"     
                steps={[
                    { title: 'Le devis est vraiment gratuit ?', desc: "Oui, sans conditions. Je prends le temps d'analyser votre projet avant de vous proposer un tarif fixe." },
                    { title: "Je n'ai pas encore tout défini, c'est un problème ?",   desc: "Pas du tout. Décrivez simplement votre idée, on affine ensemble lors de l'échange." },
                    { title: "Combien de temps pour avoir une réponse ?",         desc: "Je m'engage à répondre sous 24h ouvrées, souvent bien avant." },
                    { title: "Puis-je vous appeler directement ?",               desc: "Je préfère un premier contact par email pour préparer l'échange, mais un appel peut être organisé ensuite." },
                ]}
            />
        </section>

    );
};

export default InfosSection;