import { Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import OPOffre from './pages/OP-Offre';
import Error from './pages/Error';
import SiteVitrineOffre from './pages/Vitrine_offre';
import Hebergement from './pages/Hebergement';
import ProjectsPage from './pages/Projects-Page';
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
    '/projects-page',
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
        <Route path="/projects-page" element={<ProjectsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {!isErrorPage && <Footer />}
      <SpeedInsights />
    </>
  );
}

export default App;