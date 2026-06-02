import Hero from "../components/Hero-home";
import PriceBand from "../components/Offres/Price-range";
import WhatsIncluded from "../components/Offres/Whats-included";
import NonInclude from "../components/Offres/Non-include";
import Modalites from "../components/Offres/Modalites";
import InfoTips from "../components/Offres/Info-tips";
import Extras from "../components/Offres/Extra";
import '../styles/pages/OP-Offre.scss'

function OPOffre () {

    return (
        <>
            <Hero
            tag="Offre — Développement web"
            title="Site"
            highlight=" une page"
            subtitle={<>
                L'essentiel, bien fait. Un site rapide, professionnel et responsive
                <br />
                pour vous présenter ou lancer une idée sans vous ruiner.
            </>}
            />
            <PriceBand 
                MainPrice ='300€'
                SecondPrice ='à 500€'
                Note = 'Prix fixe selon le niveau de complexité demandé'
                TVABadge = 'TVA non applicable — art. 293B CGI'
                SecondBadge = 'Livraison en 7 jours'
            />
            <WhatsIncluded items={[
                { main: 'Design sur-mesure', text: "pas de template générique, le site est pensé pour vous et votre activité" },
                { main: 'Responsive mobile', text: "le site s'adapte parfaitement à tous les écrans (mobile, tablette, desktop)" },
                { main: 'Formulaire de contact', text: "formulaire fonctionnel avec réception des messages par email" },
                { main: 'SEO de base', text: "balises title, meta description, structure HTML propre pour Google" },
                { main: 'Animations subtiles', text: "apparition des sections au scroll, effets de survol sur les boutons" }, 
                { main: 'Livraison des fichiers sources' , text: "vous reçevez tous les fichiers HTML/CSS/JS, vous êtes propriétaire à 100%"},
                { main: '2 allers-retours de corrections', text: "inclus après la première livraison" },
            ]} />
            <section className="nonInclude-and-moda">
                <NonInclude items = {[
                    {main: 'Pages supplémentaires'},
                    {main: 'Hébergement & domaine'},
                    {main: 'Rédaction des textes'},
                    {main: 'Création de photos ou logo'},
                    {main: 'Maintenance mensuelle'},
                    {main: 'Boutique en ligne'},

                ]}/>
                <Modalites items = {[
                    {main: 'Acompte', text: "50% à la commande"},
                    {main: 'Solde', text: "50% à la livraison"},
                    {main: 'Délai', text: "7 jours ouvrés"},
                    {main: 'Corrections', text: "2 allers-retours"},
                    {main: 'Livrable', text: "Fichiers sources"},
                    {main: 'Paiement', text: "Virement bancaire"},
                ]}/>
            </section>
            <InfoTips />
            <Extras items ={[
                {main: 'Page supplémentaire', text: "à partir de 150€"},
                {main: 'Animations avancées', text: "à partir de 100€"},
                {main: 'Site Multi-langue', text: "à partir de 50€"},
                {main: 'Intégration Google Maps', text: "à partir de 50€"},
                {main: 'Hébergement + domaine', text: "20€/mois"},
                {main: 'Maintenance mensuelle', text: "45€/mois"},
            ]}/>
        </>
    );
};

export default OPOffre;