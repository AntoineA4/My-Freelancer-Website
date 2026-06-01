import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import OPOffre from './pages/OP-Offre';
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/op-offre' element={<OPOffre />}></Route>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;