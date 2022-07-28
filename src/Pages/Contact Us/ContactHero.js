import React from 'react';
import './ContactHero.css';

const ContactHero = ({Title}) => {
  return (
    <div>
    <section id="ContactHero" className="d-flex align-items-center">
<div className="container">
  <div className="row">
    <div className="Title">
      <h1>{Title}</h1>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default ContactHero