import Hero from "../components/Hero";
import LocalisationBar from "../components/LocalisationBar";
import Comparatif from "../components/Offres/Comparatif";
import ModalitesCommunes from "../components/Offres/Modalite-commun";
import PlansPicker from "../components/Offres/Plans-pick";
import PourquoiMoi from "../components/Offres/WhyMe-offre";
import Faq from "../components/Faq";
import CtaNavOffres from "../components/Offres/Cta-nav-Offre";
import '../styles/pages/Hebergement.scss'

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
                heroClass="hero-bordeaux"
                subtitle={<>
                    Votre site en ligne, stable et suivi. Choisissez la formule adaptée à vos besoins 
                    <br />
                    — sans engagement
                </>}
            />
            <PlansPicker />
            <section className="hebergement-infos-section">
                <div className="left-part">
                    <Comparatif
                        title="Comparatif des formules"
                        tableClass="hebergement-table"
                        headers={[
                            { label: 'Essentiel',  key: 'essentiel' },
                            { label: 'Sérénité',   key: 'serenite', featured: true },
                            { label: 'Premium',    key: 'premium' },
                        ]}
                        rows={[
                            { label: 'Nom de domaine',      essentiel: '✓',          serenite: '✓',        premium: '✓' },
                            { label: 'Hébergement & SSL',   essentiel: '✓',          serenite: '✓',        premium: '✓' },
                            { label: 'Email pro',           essentiel: '1 adresse',  serenite: '1 adresse',premium: '2 adresses' },
                            { label: 'Surveillance 24h/24', essentiel: '—',          serenite: '✓',        premium: '✓' },
                            { label: 'Sauvegardes',         essentiel: '—',          serenite: '✓',        premium: '✓' },
                            { label: 'Modifications/mois',  essentiel: '—',          serenite: '30 min',   premium: '1h30' },
                            { label: 'Support',             essentiel: '—',          serenite: '—',        premium: 'Prioritaire 24h' },
                            { label: 'Audit SEO',           essentiel: '—',          serenite: '—',        premium: 'Trimestriel' },
                            { label: 'Prix mensuel',        essentiel: '20€',        serenite: '45€',      premium: '70€', isPrice: true },
                        ]}
                    />
                    <PourquoiMoi />
                </div>
                <div className="right-part">
                    <ModalitesCommunes />
                    <Faq 
                        title="Questions fréquentes"
                        titleTag="div"
                        classBox="hebergement-faq"  
                        icon="?"     
                        steps={[
                            { title: "J'ai déjà un nom de domaine ?", desc: "On peut le transférer ou le pointer vers mon serveur. Tarif ajusté dans ce cas." },
                            { title: "Que se passe-t-il si je résilie ?", desc: "Je vous remets tous vos fichiers et vous accompagne dans la migration vers un autre hébergeur (gratuit, 30 jours)." },
                            { title: "Puis-je changer de formule ?", desc: "Oui, à tout moment. Le changement prend effet au mois suivant." },
                            { title: "Ce service est-il compatible avec mon site ?", desc: "Oui pour les sites HTML/CSS/JavaScript. Pour les autres technologies, contactez-moi pour vérifier." },
                        ]}
                    />
                </div>
            </section>
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