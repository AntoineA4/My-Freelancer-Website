import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import LocalisationBar from "../components/LocalisationBar";
import Comparatif from "../components/Offres/Comparatif";
import ModalitesCommunes from "../components/Offres/Modalite-commun";
import PlansPicker from "../components/Offres/Plans-pick";
import PourquoiMoi from "../components/Offres/WhyMe-offre";
import Faq from "../components/Faq";
import CtaNavOffres from "../components/Offres/Cta-nav-Offre";
import Extras from "../components/Offres/Extra";
import '../styles/pages/Hebergement.scss'

function Hebergement () {

    const {t} = useTranslation()
    
    return (
        <>
            <LocalisationBar
                section={{ label:'header.nav.offres', href: '/#offres' }}
                page={t('offres.hebergement.nav-loc')}
            />
            <Hero
                tag={t('offres.hebergement.hero.tag')}
                title={t('offres.hebergement.hero.title')}
                highlight={t('offres.hebergement.hero.highlight')}
                heroClass="hero-bordeaux"
                subtitle={<>
                    {t('offres.hebergement.hero.subtitle')}
                    <br />
                    {t('offres.hebergement.hero.br')}
                </>}
            />
            <PlansPicker />
            <section className="hebergement-infos-section">
                <div className="left-part">
                    <Comparatif
                        title={t('offres.hebergement.comparatif.title')}
                        tableClass="hebergement-table"
                        headers={t('offres.hebergement.comparatif.headers', {returnObjects: true})}
                        rows={t('offres.hebergement.comparatif.rows', {returnObjects: true})}
                    />
                    <PourquoiMoi />
                    <Extras 
                        extrasClass='hebergementExtras'
                        items ={t('offres.hebergement.extras', {returnObjects: true})}
                    />
                </div>
                <div className="right-part">
                    <ModalitesCommunes />
                    <Faq 
                        title={t('offres.onePage.faq.title')}
                        titleTag="div"
                        classBox="hebergement-faq"  
                        icon="?"     
                        steps={t('offres.hebergement.faq', {returnObjects: true})}
                    />
                </div>
            </section>
            <CtaNavOffres 
                ctaTitle={t('offres.hebergement.nav-cta.ctaTitle')}
                ctaHighlight={t('offres.hebergement.nav-cta.ctaHighlight')}
                ctaSlug="hebergement"
                ctaSubtitle={t('offres.hebergement.nav-cta.ctaSubtitle')}
            />
        </>
    );
};

export default Hebergement;