import React from 'react';
import PortfolioHero from './PortfolioHERO'
import Results from '../../Components/Providing Results/Results'
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';
import NewPortfolio from '../../Components/PortfolioDesign/NewPortfolio';


const Portfolio = () => {
  return (
    <div>
    <PortfolioHero Title='Portfolio' />
    <NewPortfolio />
    <Results />
    <Trustpilot />
    <Contactform />
    </div>
  )
}

export default Portfolio;

