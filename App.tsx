import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Construction from './components/Construction';
import RentRoof from './components/RentRoof';
import Services from './components/Services';
import Partners from './components/Partners';
import Portfolio from './components/Portfolio';
import HomeOptions from './components/HomeOptions';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

// Component to handle scroll restoration on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use 'instant' behavior to override global smooth scroll CSS and ensure immediate jump to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

// The Home Page Component assembled from sections
const Home = () => (
  <>
    <Hero />
    <HomeOptions />
    <About />
    <Services />
    <Partners />
    <Portfolio />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans bg-white selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent-roof" element={<RentRoof />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;