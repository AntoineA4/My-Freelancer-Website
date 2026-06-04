import Hero from "../components/Hero";
import LocalisationBar from "../components/LocalisationBar";
import Faq from "../components/Faq";
import CtaNavOffres from "../components/Offres/Cta-nav-Offre";
import '../styles/components/Offre-Pages/NonInc-Moda.scss'

function Hebergement () {

    return (
        <>
            <LocalisationBar
                section={{ label: 'Offres', href: '/#offres' }}
                page="Hébergement & maintenance"
            />
            <Hero
            tag="Offre — Services récurrents"
            title="Hébergement "
            highlight=" & maintenance"
            subtitle={<>
                Votre site en ligne, stable et suivi. Choisissez la formule adaptée à vos besoins 
                <br />
               — sans engagement
            </>}
            />
            <section className="">
                
            </section>
            <Faq 
                title="Questions fréquentes"
                titleTag="div"  
                icon="?"     
                steps={[
                    { title: "J'ai déjà un nom de domaine ?", desc: "On peut le transférer ou le pointer vers mon serveur. Tarif ajusté dans ce cas." },
                    { title: "Que se passe-t-il si je résilie ?", desc: "Je vous remets tous vos fichiers et vous accompagne dans la migration vers un autre hébergeur (gratuit, 30 jours)." },
                    { title: "Puis-je changer de formule ?", desc: "Oui, à tout moment. Le changement prend effet au mois suivant." },
                    { title: "Ce service est-il compatible avec mon site ?", desc: "Oui pour les sites HTML/CSS/JavaScript. Pour les autres technologies, contactez-moi pour vérifier." },
                ]}
            />
            <CtaNavOffres 
                ctaTitle="Pas sûr de votre"
                ctaHighlight="formule ?"
                ctaSlug="hebergement"
                ctaSubtitle="Contactez-moi, on en parle ensemble — devis gratuit sous 24h."
            />
        </>
    );
};

export default Hebergement;