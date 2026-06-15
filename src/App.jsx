import { Routes, Route, useLocation } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import OPOffre from './pages/OP-Offre';
import Error from './pages/Error';
import SiteVitrineOffre from './pages/Vitrine_offre';
import Hebergement from './pages/Hebergement';
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
function App() {
  const location = useLocation();

  const isErrorPage = ![
    '/',
    '/contact',
    '/offres/site-une-page',
    '/offres/site-vitrine',
    '/offres/hebergement',
  ].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!isErrorPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offres/site-une-page" element={<OPOffre />} />
        <Route path="/offres/site-vitrine" element={<SiteVitrineOffre />} />
        <Route path="/offres/hebergement" element={<Hebergement />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {!isErrorPage && <Footer />}
    </>
  );
}

export default App;