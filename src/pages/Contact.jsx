import Hero from "../components/Hero-home"
import LocalisationBar from "../components/Contact-Page/LocalisationBar";
import ContactForm from "../components/Contact-Page/Form";

function Contact() {
    return (
      <>
        <LocalisationBar />
        <Hero
            tag="Parlons de votre projet"
            title="Un projet en tête ?"
            highlight="Contactez moi"
            subtitle={<>
                Remplissez le formulaire ci-dessous — je vous réponds sous 24h
                <br />
                avec un devis gratuit et sans engagement.
                </>}>
        </Hero>
        <ContactForm />
        

      </>  
    )
}

export default Contact;