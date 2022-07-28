import React from 'react';
import './RegularHero.css';


const RegularHero = ({Title, Background}) => {

  return (

    <div>
<section id='REGHero' style={{ backgroundImage: `url(${Background})`, height: '460px' }} className='d-flex align-items-center'>
<div className='container'>
  <div className='row'>
    <div className='Text'>
      <h1>{Title}</h1>
    </div>
  </div>
</div>
</section>
    </div>

  )
}

export default RegularHero;
 