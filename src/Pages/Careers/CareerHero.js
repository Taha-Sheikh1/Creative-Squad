import React from 'react';
import './CareerHero.css';




const CareerHero = ({Title, Para}) => {
  return (
    <div>
    <section id="CareerHero" className="d-flex align-items-center">
<div className="container">
  <div className="row">
    <div className="Title">
      <h1>{Title}</h1>
      <p className='text-center mt-3'>{Para}</p>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default CareerHero;

