import Hero from "../components/Hero-home";
import PriceBand from "../components/Site-une-page/Price-range";

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
        </>
    );
};

export default OPOffre;