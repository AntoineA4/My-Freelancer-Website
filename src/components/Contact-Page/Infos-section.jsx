import { useTranslation } from "react-i18next";
import DirectContact from "./Direct-contact";
import Steps from "../Steps";
import Faq from "../Faq";
import '../../styles/components/Contact_page/InfosSection.scss'

function InfosSection () {

    const {t}= useTranslation()

    return (
        <section className="infos-section" aria-label="Informations de contact">
            <div className="dispo-band-infos">
                <span className="dispo-dot"></span>
                <span className="dispo-text">{t('contact.infoSection.dispoSpan')}</span>
            </div>
            <DirectContact />
            <Steps 
                title={t('contact.steps.title')}
                titleTag="h3"
                classBox="Contact-Page-Box"        
                steps={t('contact.steps.items', {returnObjects: true})}
            />
            <Faq 
                title={t('contact.faq.title')}
                titleTag="h3" 
                classBox="Contact-Page-Box"     
                steps={t('contact.faq.items', {returnObjects: true})}
            />
        </section>

    );
};

export default InfosSection;