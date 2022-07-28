import React from 'react';
import './TermHERO.css';

const TermHERO = ({Title}) => {
  return (
    <div>

    <section id="TermHero" className="d-flex align-items-center">
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

export default TermHERO