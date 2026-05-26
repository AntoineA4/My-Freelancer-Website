import Hero from "../components/Hero-home";
import DispoBand from "../components/Dispo-band";
import Reassurance from "../components/Home-Page/Reassurance";
import ForWho from "../components/Home-Page/ForWhoSection";
import WhyMe from "../components/Home-Page/WhyMe";
import Offres from "../components/Home-Page/Offres";

function Home() {
  return (
    <>
      <Hero />
      <DispoBand />
      <Reassurance />
      <ForWho />
      <WhyMe />
      <Offres />
    </>
  );
}

export default Home;