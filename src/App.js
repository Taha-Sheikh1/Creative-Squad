import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import TopNav from './Components/TopNav Bar/TopNav';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import SocialMediaMarketing from './Pages/Social Media Marketing/SocialMediaMarketing';
import SearchEngineOptimization from './Pages/Search Engine Optimization/SearchEngineOptimization';
import SearchEngineMarketing from './Pages/Search Engine Marketing/SearchEngineMarketing';
import WebsiteDevelopment from './Pages/Website Development/WebsiteDevelopment';
import EcommerceDev from './Pages/eCommerce Development/EcommerceDev';
import ApplicationDev from './Pages/Application Development/ApplicationDev';
import Packages from './Pages/Packages/Packages';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact Us/Contact';
import Terms from './Pages/Terms & Conditions/Terms';
import Careers from './Pages/Careers/Careers';
import RefundPolicy from './Pages/Refund Policy/RefundPolicy';
import PrivacyPolicy from './Pages/Privacy Policy/PrivacyPolicy';
import ScrollToTop from './Components/Scroll To Top/ScrollToTop';
import NotFound from './Pages/Page Not Found/NotFound';
 


function App() {

  return (
    <Router>
    <React.Fragment>
       <ScrollToTop>
      <TopNav />
      <Header />
      {/* <Route path='/' element={} /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/digital-marketing-services-in-toronto' element={<Services />} />
          <Route path='/social-media-marketing-service-in-toronto' element={<SocialMediaMarketing />} />
          <Route path='/search-engine-optimization-service-in-toronto' element={<SearchEngineOptimization />} />
          <Route path='/search-engine-marketing-service-in-toronto' element={<SearchEngineMarketing />} />
          <Route path='/website-design-and-development-service-in-toronto' element={<WebsiteDevelopment />} />
          <Route path='/ecommerce-development-service-in-toronto' element={<EcommerceDev />} />
          <Route path='/app-development-service-in-toronto' element={<ApplicationDev />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/terms-conditions' element={<Terms />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
      </ScrollToTop>
    </React.Fragment>
    </Router>
  );
};

export default App;




