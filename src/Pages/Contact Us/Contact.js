import React from 'react' 
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';
import Info from '../../Components/Info Section/Info';
import ContactHero from './ContactHero';
const Contact = () => {
  return (
    <div>
      <ContactHero Title='Contact Us' />
      <Info />
      <Trustpilot />
      <Contactform />
    </div>
  )
}

export default Contact;

