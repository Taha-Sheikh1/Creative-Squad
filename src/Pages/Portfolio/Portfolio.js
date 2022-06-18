import React from 'react';
import PortfolioHERO from './PortfolioHERO';
import PortfolioTabs from '../../Components/Portfolio/PortfolioTabs';
import Results from '../../Components/Providing Results/Results'

const Portfolio = () => {
  return (
    <div>
    <PortfolioHERO Title='Portfolio' />
    <PortfolioTabs />
    <Results />
    </div>
  )
}

export default Portfolio;

