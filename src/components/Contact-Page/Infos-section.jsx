import DirectContact from "./Direct-contact";
import ContactSteps from "./Contact-steps";
import ContactFaq from "./Contact-Faq";
import '../../styles/components/Contact_page/InfosSection.scss'

function InfosSection () {

    return (
        <section className="infos-section" aria-label="Informations de contact">
            <div class="dispo-band-infos">
                <span class="dispo-dot"></span>
                <span class="dispo-text">Disponible pour de nouvelles missions</span>
            </div>
            <DirectContact />
           <ContactSteps />
           <ContactFaq />
        </section>

    );
};

export default InfosSection;