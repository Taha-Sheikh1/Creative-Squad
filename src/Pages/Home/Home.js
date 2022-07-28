import React from 'react'
import DigitalServices from '../../Components/360 Digital Services/DigitalServices';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';
import GetInTouch from '../../Components/Get In Touch/GetInTouch';
import Hero from '../../Components/Hero Section/Hero';
// import PortfolioTabs from '../../Components/Portfolio/PortfolioTabs';
import NewPortfolio from '../../Components/PortfolioDesign/NewPortfolio';
import Results from '../../Components/Providing Results/Results';
import Slider from '../../Components/Slider/Slider';
import Icon1 from './2.webp';
import Icon2 from './3.webp';
import Icon3 from './4.webp';
import Icon4 from './img.webp';
import Icon5 from './trust.webp';

const Home = () => {
  return (
    <div>
    <Hero />
    <Slider
    Title='Our Affiliations'
    Slider1={Icon1}
    Slider2={Icon2}
    Slider3={Icon3}
    Slider4={Icon4}
    Slider5={Icon5}
     />
    <Results />
    <GetInTouch />
    <DigitalServices />
    <NewPortfolio />
    <Trustpilot />
    <Contactform />

    
    </div>
  )
}



export default Home;

