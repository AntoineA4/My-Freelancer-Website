import Hero from "../components/Hero";
import DispoBand from "../components/Dispo-band";
import Reassurance from "../components/Home-Page/Reassurance";
import ForWho from "../components/Home-Page/ForWhoSection";
import WhyMe from "../components/Home-Page/WhyMe";
import Offres from "../components/Home-Page/Offres";
import Projects from "../components/Home-Page/Projects";
import Skills from "../components/Home-Page/Skills";
import ContactHomePage from "../components/Home-Page/Contact-Home-Page";

function Home() {
  return (
    <>
      <Hero 
      tag="Développeur web freelance"
      title="Je crée des sites Web"
      highlight="qui convertissent"
      showBreak = {true}
      subtitle={<>
        Sites vitrine, landing pages et intégrations sur-mesure.
        <br />
        Disponible à distance, partout dans le monde.
        </>}
        showBtn={true}
        primaryBtn="Voir mes offres"
        secondaryBtn="Discutons ↗"/>
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