import { useTranslation } from "react-i18next";
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

    const {t} = useTranslation()

    return (
        <>
            <LocalisationBar
                section={{ label: 'Offres', href: '/#offres' }}
                page={t('offres.vitrine.nav-loc')}
            />
            <Hero
            tag={t('offres.vitrine.hero.tag')}
            title={t('offres.vitrine.hero.title')}
            highlight={t('offres.vitrine.hero.highlight')}
            heroClass="hero-corail-fonce"
            subtitle={<>
                {t('offres.vitrine.hero.subtitle')}
                <br />
                {t('offres.vitrine.hero.br')}
            </>}
            />
            <PriceBand 
                MainPrice ={t('offres.vitrine.priceRange.mainPrice')}
                SecondPrice ={t('offres.vitrine.priceRange.secondPrice')}
                Note = {t('offres.vitrine.priceRange.note')}
                TVABadge = {t('offres.vitrine.priceRange.tvaBadge')}
                SecondBadge = {t('offres.vitrine.priceRange.secondBadge')}
            />
            <PagesTypiques />
            <WhatsIncluded items={t('offres.vitrine.whatsIncluded.items', {returnObjects: true})} />
            <section className="nonInclude-and-moda">
                <NonInclude items = {t('offres.vitrine.nonIncluded.items', {returnObjects: true})}/>
                <Modalites items = {t('offres.vitrine.modalites.items', {returnObjects: true})}/>
            </section>
            <section style={{margin: '0 4%', borderBottom: 'none'}}>
                <Comparatif 
                    title={t('offres.vitrine.comparatif.title')}
                    headers={t('offres.vitrine.comparatif.headers', { returnObjects: true })}
                    rows={t('offres.vitrine.comparatif.rows', {returnObjects: true})}
                />
            </section>
            <section style={{margin: '0 4%', borderBottom: 'none'}}>
                <Steps 
                    title={t('offres.onePage.steps.title')}
                    titleTag="div" 
                    icon="→"     
                    steps={t('offres.vitrine.steps.items', {returnObjects: true})}
                />
            </section>
            <InfoTips />
            <Extras items ={t('offres.vitrine.extras.items', {returnObjects: true})}
            />
            <section style={{margin: '0 4%', borderBottom: 'none'}}>
                <Faq 
                    title={t('offres.onePage.faq.title')}
                    titleTag="div"  
                    icon="?"     
                    steps={t('offres.vitrine.faq.items', {returnObjects: true})}
                />
            </section>
            <CtaNavOffres 
                ctaSlug="site-vitrine"
            />
        </>
    );
};

export default SiteVitrineOffre;