import React from 'react';
import './AppHERO.css';



const AppHERO = ({Title}) => {
  return (
    <div>
    
    <section id="AppHero" className="d-flex align-items-center">
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

export default AppHERO;