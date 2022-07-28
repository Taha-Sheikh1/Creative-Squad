import React from 'react';
import './PackageBOX.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const PackageBOX = ({Title, LiName}) => {
  return (
    <div>
     <section id="Package" className="Package section">
      <div className="container">
    
   <div className='section-title mb-0 pb-0'>
   <h2>{Title}</h2>
   </div>
   
        <div className="row no-gutters">

            <div className="col-lg-4 Packagebox" data-aos="zoom-in">
            <h3>Bronze</h3>
            <h4>$324.99</h4>
            <ul className='content text-center'>
                <li><FontAwesomeIcon icon={faCheck} /> {LiName} </li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera </li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
            </ul>
            <a href="tel: +1-905-598-8414" className="Avail-Now">Call For Pricing</a>
          </div>  

          <div className="col-lg-4 Packagebox featured" data-aos="zoom-in">
            <span className="featured-badge">Featured</span>
            <h3>Silver</h3>
            <h4>$749.99</h4>
            <ul className='content text-center'>
                <li><FontAwesomeIcon icon={faCheck} /> {LiName}</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
            </ul>
            <a href="tel: +1-905-598-8414" className="Avail-Now">Call For Pricing</a>
          </div>

          <div className="col-lg-4 Packagebox" data-aos="zoom-in">
            <h3>Gold</h3>
            <h4>$1,199.99</h4>
            <ul className='content text-center'>
                <li><FontAwesomeIcon icon={faCheck} /> {LiName}</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nec feugiat nisl pretium</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
            </ul>
            <a href="tel: +1-905-598-8414" className="Avail-Now">Call For Pricing</a>
          </div>


        </div>

      </div>
    </section>
    </div>
  )
}

export default PackageBOX