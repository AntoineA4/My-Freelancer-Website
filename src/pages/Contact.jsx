import { useTranslation } from "react-i18next";
import Hero from "../components/Hero"
import LocalisationBar from "../components/LocalisationBar";
import ContactForm from "../components/Contact-Page/Form";
import InfosSection from "../components/Contact-Page/Infos-section";
import '../styles/pages/Contact.scss'
function Contact() {

    const{t}= useTranslation()

    return (
        <>
            <LocalisationBar
                page="Contact"
            />

            <Hero
                tag={t('contact.hero.tag')}
                title={t('contact.hero.title')}
                highlight={t('contact.hero.highlight')}
                showBreak={true}
                subtitle={<>
                    {t('contact.hero.subtitle')}
                    <br />
                    {t('contact.hero.br')}
                </>}>
            </Hero>
            <>
                <main className="contact-main">
                    <ContactForm />
                    <InfosSection />
                </main>
            </>
        </>  
    )
}

export default Contact;