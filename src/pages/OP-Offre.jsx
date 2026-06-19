import Hero from "../components/Hero";
import LocalisationBar from "../components/LocalisationBar";
import PriceBand from "../components/Offres/Price-range";
import WhatsIncluded from "../components/Offres/Whats-included";
import NonInclude from "../components/Offres/Non-include";
import Modalites from "../components/Offres/Modalites";
import InfoTips from "../components/Offres/Info-tips";
import Extras from "../components/Offres/Extra";
import Steps from "../components/Steps";
import Faq from "../components/Faq";
import CtaNavOffres from "../components/Offres/Cta-nav-Offre";
import { useTranslation } from "react-i18next";
import '../styles/components/Offre-Pages/NonInc-Moda.scss'

function OPOffre () {

    const {t} = useTranslation()

    return (
        <>
            <LocalisationBar
                section={{ label: 'Offres', href: '/#offres' }}
                page="Site une page"
            />
            <Hero
            tag={t('offres.onePage.hero.tag')}
            title={t('offres.onePage.hero.title')}
            highlight={t('offres.onePage.hero.highlight')}
            subtitle={<>
                {t('offres.onePage.hero.subtitle')}
                <br />
                {t('offres.onePage.hero.br')}
            </>}
            />
            <PriceBand 
                MainPrice ={t('offres.onePage.priceRange.mainPrice')}
                SecondPrice ={t('offres.onePage.priceRange.secondPrice')}
                Note = {t('offres.onePage.priceRange.note')}
                TVABadge = {t('offres.onePage.priceRange.tvaBadge')}
                SecondBadge = {t('offres.onePage.priceRange.secondBadge')}
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
            <section style={{margin: '0 4%', borderBottom: 'none'}}>
                <Steps 
                    title="Comment ça se passe"
                    titleTag="div" 
                    icon="→"     
                    steps={[
                        {
                            title: 'Brief & devis', 
                            desc: "On échange par email ou visio pour comprendre votre projet, votre activité et vos goûts. Je vous prépare un devis fixe sous 24h.", 
                            calendar: 'Jour 0'
                        },
                        {
                            title: 'Acompte & démarrage', 
                            desc: "Une fois le devis signé et l'acompte reçu (50%), je commence le design et le développement.",
                            calendar: "Jour 1"
                        },
                        { 
                            title: 'Première livraison', 
                            desc: "Vous reçevez le site en ligne sur un lien de prévisualisation. Vous pouvez me faire tes retours directement.",
                            calendar: "Jour 4 à 6"
                        },
                        { 
                            title: 'Corrections & validation',
                            desc: "J'applique vos retours (2 allers-retours inclus). Une fois validé, vous règlez le solde et je vous remets tous les fichiers.",
                            calendar: "Jour 6 à 7"
                        },
                    ]}
                />
            </section>
            <InfoTips />
            <Extras items ={[
                {main: 'Page supplémentaire', text: "à partir de 150€"},
                {main: 'Animations avancées', text: "à partir de 100€"},
                {main: 'Site Multi-langue', text: "à partir de 50€"},
                {main: 'Intégration Google Maps', text: "à partir de 50€"},
                {main: 'Hébergement + domaine', text: "20€/mois"},
                {main: 'Maintenance mensuelle', text: "45€/mois"},
                ]}
            />
            <section style={{margin: '0 4%', borderBottom: 'none'} }>
                <Faq 
                    title="Questions fréquentes"
                    titleTag="div"  
                    icon="?"     
                    steps={[
                        { title: "Est-ce que je garde la propriété du site ?", desc: "Oui, à 100%. Vous reçevez tous les fichiers sources à la livraison finale. Le site vous appartient complètement, indépendamment de tout abonnement." },
                        { title: "Et si je veux ajouter une page plus tard ?", desc: "Tout à fait possible. Chaque page supplémentaire est facturée à partir de 150€ selon la complexité. Vous pouvez aussi passer sur l'offre site vitrine dès le départ." },
                        { title: "Je n'ai pas de textes ni de logo, c'est un problème ?", desc: "Non, mais ça rallonge les délais. Je peux vous guider pour structurer vos textes. Pour le logo, je peux en créer un simple (typographique) pour 80€ supplémentaires." },
                        { title: "Puis-je modifier le site moi-même après livraison ?", desc: "Le site est en HTML/CSS pur. Sans connaissances techniques c'est difficile. Je recommande mon forfait maintenance pour les mises à jour (1h incluse par mois)." },
                    ]}
                />
            </section>
            <CtaNavOffres 
                ctaSlug="site-une-page"
            />
        </>
    );
};

export default OPOffre;