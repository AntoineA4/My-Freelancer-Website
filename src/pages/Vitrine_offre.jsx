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
import Comparatif from "../components/Offres/Comparatif";
import PagesTypiques from "../components/Offres/Page-typique";
import CtaNavOffres from "../components/Offres/Cta-nav-Offre";
import '../styles/components/Offre-Pages/NonInc-Moda.scss'

function SiteVitrineOffre () {

    return (
        <>
            <LocalisationBar
                section={{ label: 'Offres', href: '/#offres' }}
                page="Site vitrine"
            />
            <Hero
            tag="Offre — Développement web"
            title="Site"
            highlight=" vitrine"
            heroClass="hero-corail-fonce"
            subtitle={<>
                Un site complet, professionnel et sur-mesure pour présenter votre activité,
                <br />
                inspirer confiance et transformer des visiteurs en clients.
            </>}
            />
            <PriceBand 
                MainPrice ='800€'
                SecondPrice ='à 1200€'
                Note = 'Devis fixe selon le nombre de pages et les fonctionnalités'
                TVABadge = 'TVA non applicable — art. 293B CGI'
                SecondBadge = 'Livraison en 14 jours'
            />
            <PagesTypiques />
            <WhatsIncluded items={[
                { main: 'Design sur-mesure', text: "identité visuelle cohérente, palette de couleurs et typographie adaptées à votre activité" },
                { main: "Jusqu'à 5 pages", text: "structure claire et logique pensée pour la conversion" },
                { main: 'Responsive mobile', text: "site parfaitement adapté sur tous les appareils" },
                { main: 'SEO optimisé', text: "balises, structure sémantique, vitesse de chargement, sitemap" },
                { main: 'Formulaire de contact', text: "fonctionnel avec notifications email" }, 
                { main: 'Animations et micro-interactions' , text: "apparitions au scroll, survols, transitions fluides"},
                { main: '3 allers-retours de corrections', text: "inclus après la première livraison" },
                { main: 'Livraison des fichiers sources', text: "vous êtes propriétaire à 100%" },
            ]} />
            <section className="nonInclude-and-moda">
                <NonInclude items = {[
                    {main: 'Plus de 5 pages'},
                    {main: 'Hébergement & domaine'},
                    {main: 'Rédaction des textes'},
                    {main: 'Création de photos ou logo'},
                    {main: 'Maintenance mensuelle'},
                    {main: 'Boutique en ligne'},

                ]}/>
                <Modalites items = {[
                    {main: 'Acompte', text: "50% à la commande"},
                    {main: 'Solde', text: "50% à la livraison"},
                    {main: 'Délai', text: "14 jours ouvrés"},
                    {main: 'Corrections', text: "3 allers-retours"},
                    {main: 'Livrable', text: "Fichiers sources"},
                    {main: 'Paiement', text: "Virement bancaire"},
                ]}/>
            </section>
            <section style={{margin: '0 4%', borderBottom: 'none'}}>
                <Comparatif 
                    title="Comparatif des offres"
                    headers={[
                        { label: 'Site une page', key: 'unePage' },
                        { label: 'Site vitrine',  key: 'vitrine', featured: true },
                    ]}
                    rows={[
                        { label: 'Nombre de pages',  unePage: '1 page',    vitrine: "Jusqu'à 5" },
                        { label: 'Design sur-mesure',unePage: '✓',         vitrine: '✓' },
                        { label: 'Responsive mobile',unePage: '✓',         vitrine: '✓' },
                        { label: 'SEO optimisé',     unePage: 'Basique',   vitrine: 'Complet' },
                        { label: 'Allers-retours',   unePage: '2',         vitrine: '3' },
                        { label: 'Formation incluse',unePage: '—',         vitrine: '✓' },
                        { label: 'Délai de livraison',unePage: '7 jours',  vitrine: '14 jours' },
                        { label: 'Prix',             unePage: '300–500€',  vitrine: '800–1 200€', isPrice: true },
                    ]}
                />
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
                            desc: "Une fois le devis signé et l'acompte reçu (50%), je vous demande vos textes, photos et éléments de marque (logo, couleurs). Puis je commence le design du site",
                            calendar: "Jour 1-2"
                        },
                        { 
                            title: 'Design & développement', 
                            desc: "Je conçois et développe le site. Je vous tiens informé de l'avancement si besoin.",
                            calendar: "Jour 3 à 10"
                        },
                        { 
                            title: 'Livraison & corrections',
                            desc: "Vous reçevez le site en prévisualisation. On fait jusqu'à 3 allers-retours pour affiner.",
                            calendar: "Jour 11 à 14"
                        },
                        { 
                            title: 'Validation & remise des fichiers',
                            desc: "Solde réglé, fichiers sources remis, formation rapide à la prise en main si besoin (notament pour les portfolios). Le site est à vous.",
                            calendar: "Jour 14"
                        },
                    ]}
                />
            </section>
            <InfoTips />
            <Extras items ={[
                {main: 'Page supplémentaire (6e+)', text: "à partir de 150€"},
                {main: 'Animation sur-mesure', text: "à partir de 100€"},
                {main: 'Site Multi-langue', text: "à partir de 50€"},
                {main: 'Intégration calendrier/RDV', text: "à partir de 100€"},
                {main: 'Hébergement + domaine', text: "20€/mois"},
                {main: 'Maintenance mensuelle', text: "à partir de 45€/mois"},
                ]}
            />
            <section style={{margin: '0 4%', borderBottom: 'none'}}>
                <Faq 
                    title="Questions fréquentes"
                    titleTag="div"  
                    icon="?"     
                    steps={[
                        { title: "Quelle est la différence avec le site une page ?", desc: "Le site vitrine comprend plusieurs pages avec navigation (Accueil, Services, À propos, Contact…). Cela permet un meilleur référencement naturel, plus de contenu et une présentation plus complète de votre activité." },
                        { title: "Puis-je modifier le contenu moi-même ?", desc: "Le site est développé en HTML/CSS pur ou Javascript avec React. Les modifications de textes ou images nécessitent des bases techniques. C'est pourquoi je propose des forfaits maintenance avec 30min à 1h30 de modifications incluses par mois." },
                        { title: "Et si j'ai besoin de plus de 5 pages ?", desc: "Chaque page supplémentaire est facturée 150€. Je peux aussi vous faire un devis global si votre projet est plus ambitieux." },
                        { title: "Le site sera-t-il bien référencé sur Google ?", desc: "J'optimise les bases techniques du SEO (structure, vitesse, balises). Le référencement naturel complet prend du temps et dépend aussi de votre contenu. Je recommande de publier régulièrement du contenu de qualité." },
                    ]}
                />
            </section>
            <CtaNavOffres 
                ctaSlug="site-vitrine"
            />
        </>
    );
};

export default SiteVitrineOffre;