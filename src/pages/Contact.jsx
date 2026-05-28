import Hero from "../components/Hero-home"

function Contact() {
    return (
      <>
        <Hero
            tag="Parlons de votre projet"
            title="Un projet"
            highlight="en tête ?"
            subtitle={<>
                Remplissez le formulaire ci-dessous — je vous réponds sous 24h
                <br />
                avec un devis gratuit et sans engagement.
                </>}>
        </Hero>

      </>  
    )
}

export default Contact;