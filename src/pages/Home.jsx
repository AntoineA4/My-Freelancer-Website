import Hero from "../components/Hero-home";
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
      <Hero />
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