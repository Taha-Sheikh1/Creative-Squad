import React from 'react';
import './AboutHero.css';

const RegularHero = ({Title}) => {
  return (

    <div>
<section id="Hero" className="d-flex align-items-center">
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
export default RegularHero;




