import React from 'react';
import './ServiceHERO.css';


const ServiceHERO = ({Title}) => {
  return (
    <div>
    <section id="ServiceHero" className="d-flex align-items-center">
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

export default ServiceHERO