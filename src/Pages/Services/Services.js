import React from 'react';
import Marketing from '../../Components/Marketing Process/Marketing';
import ServiceHERO from './ServiceHERO';
import Results from '../../Components/Providing Results/Results'; 
import DigitalServices from '../../Components/360 Digital Services/DigitalServices';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';




const Services = () => {
  return (
    <div>
    <ServiceHERO Title='Our Digital Marketing Services' />
    <Results />
    <DigitalServices />
    <Marketing />
    <Trustpilot />
    <Contactform />
    </div>
  )
}

export default Services;



