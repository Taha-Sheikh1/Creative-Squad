import React from 'react';
import './SocialMediaHero.css'

const SocialMediaHero = ({Title}) => {
  return (
    <div>

    <section id="SocialMediaHero" className="d-flex align-items-center">
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

export default SocialMediaHero