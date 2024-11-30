import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MobileApp from './components/Services/MobileApp';
import OdooServices from './components/Services/OdooServices';
import Software from './components/Services/Software';
import Quality from './components/Services/Quality';
import Footer from './components/Footer';
import Indusrty from './components/Indusrty';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="font-roboto flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services/Mobile-Application" element={<MobileApp />} />
            <Route path="/services/Odoo-Services" element={<OdooServices />} />
            <Route path="/services/Software-Development" element={<Software />} />
            <Route path="/services/Quality-Assurance" element={<Quality />} />
            <Route path="/industry" element={<Indusrty />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/Privacy-Policy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
