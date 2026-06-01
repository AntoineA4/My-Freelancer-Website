import Hero from "../components/Hero-home"
import LocalisationBar from "../components/Contact-Page/LocalisationBar";
import ContactForm from "../components/Contact-Page/Form";
import InfosSection from "../components/Contact-Page/Infos-section";
import '../styles/pages/Contact.scss'
function Contact() {
    return (
        <>
            <LocalisationBar />
            <Hero
                tag="Parlons de votre projet"
                title="Un projet en tête ?"
                highlight="Contactez moi"
                showBreak={true}
                subtitle={<>
                    Remplissez le formulaire ci-dessous — je vous réponds sous 24h
                    <br />
                    avec un devis gratuit et sans engagement.
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