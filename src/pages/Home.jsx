import Hero from "../components/Hero";
import DispoBand from "../components/Dispo-band";
import Reassurance from "../components/Home-Page/Reassurance";
import ForWho from "../components/Home-Page/ForWhoSection";
import WhyMe from "../components/Home-Page/WhyMe";
import Offres from "../components/Home-Page/Offres";
import Projects from "../components/Home-Page/Projects";
import Skills from "../components/Home-Page/Skills";
import ContactHomePage from "../components/Home-Page/Contact-Home-Page";
import { useTranslation } from "react-i18next";

function Home() {

  const {t} = useTranslation()

  return (
    <>
      <Hero 
      tag={t('home.hero.tag')}
      title={t('home.hero.title')}
      highlight={t('home.hero.hightlight')}
      showBreak = {true}
      subtitle={<>
        {t('home.hero.subtitle')}
        <br />
        {t('home.hero.br')}
        </>}
        showBtn={true}
        primaryBtn={t('home.hero.primary-btn')}
        secondaryBtn={t('home.hero.secondary-btn')}/>
      <DispoBand />
      <Reassurance />
      <ForWho />
      <WhyMe />
      <Offres />
      <Projects />
      <Skills />
      <ContactHomePage />
    </>
  );
}

export default Home;