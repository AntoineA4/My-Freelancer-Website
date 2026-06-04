import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import OPOffre from './pages/OP-Offre';
import SiteVitrineOffre from './pages/Vitrine_offre';
import Hebergement from './pages/Hebergement';
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/offres/site-une-page' element={<OPOffre />} />
        <Route path='/offres/site-vitrine' element={<SiteVitrineOffre />} />
        <Route path='/offres/hebergement' element={<Hebergement />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;