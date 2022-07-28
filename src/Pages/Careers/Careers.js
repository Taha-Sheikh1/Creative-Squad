import React from 'react'; 
import CareerContent from '../../Components/Content CAREER/CareerContent';
import Perks from '../../Components/Perks/Perks';
import CareerHero from './CareerHero';

const Careers = () => {
  return (
    <div>
    <CareerHero Title='Careers' Para='' />
     <CareerContent />
    <Perks />
    </div>
  )
}

export default Careers;