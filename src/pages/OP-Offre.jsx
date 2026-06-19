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
                page={t('offres.onePage.nav-loc')}
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
            <WhatsIncluded items = {t('offres.onePage.whatsIncluded.items', {returnObjects: true})}/>
            <section className="nonInclude-and-moda">
                <NonInclude items = {t('offres.onePage.nonIncluded.items', {returnObjects: true})}/>
                <Modalites items = {t('offres.onePage.modalites.items', {returnObjects: true})}/>
            </section>
            <section style={{margin: '0 4%', borderBottom: 'none'}}>
                <Steps 
                    title={t('offres.onePage.steps.title')}
                    titleTag="div" 
                    icon="→"     
                    steps={t('offres.onePage.steps.items', {returnObjects: true})}
                />
            </section>
            <InfoTips />
            <Extras items = {t('offres.onePage.extras.items', {returnObjects: true})}
            />
            <section style={{margin: '0 4%', borderBottom: 'none'} }>
                <Faq 
                    title={t('offres.onePage.faq.title')}
                    titleTag="div"  
                    icon="?"     
                    steps={t('offres.onePage.faq.items',{returnObjects: true} )}
                />
            </section>
            <CtaNavOffres 
                ctaSlug="site-une-page"
            />
        </>
    );
};

export default OPOffre;