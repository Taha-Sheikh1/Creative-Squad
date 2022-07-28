import React from 'react';
import '../Main Package Box/PackageBOX.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SEMPack = ({Title}) => {
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
            <h4>$200</h4>
            <ul className='content text-center'>
                <li><FontAwesomeIcon icon={faCheck} /> Setup By Google Ads Professional </li>
                <li><FontAwesomeIcon icon={faCheck} /> 1 Ads Campaign (PPC, DISPLAY) </li>
                <li><FontAwesomeIcon icon={faCheck} /> 20 Keywords</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> Bid Management</li>
                <li><FontAwesomeIcon icon={faCheck} /> Complete Analytics Setup</li>
                <li><FontAwesomeIcon icon={faCheck} /> Ad Copy Management</li>
                <li><FontAwesomeIcon icon={faCheck} /> Ad Optimization on going basis</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monyhly Keyword Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Traffic Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> In Person/Phone Support as needed</li>
            </ul>
            <a href="tel: +1-905-598-8414" className="Avail-Now">Avail Now</a>
          </div>  

          <div className="col-lg-4 Packagebox featured" data-aos="zoom-in">
            <span className="featured-badge">Featured</span>
            <h3>Silver</h3>
            <h4>$300</h4>
            <ul className='content text-center'>
                <li><FontAwesomeIcon icon={faCheck} /> Setup By Google Professional </li>
                <li><FontAwesomeIcon icon={faCheck} /> 3 Ads Campaigns (PPC, Display) </li>
                <li><FontAwesomeIcon icon={faCheck} /> 30 Keywords </li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> Bid Management</li>
                <li><FontAwesomeIcon icon={faCheck} /> Complete Google Tag Manager Setup</li>
                <li><FontAwesomeIcon icon={faCheck} /> Ad Copy Management</li>
                <li><FontAwesomeIcon icon={faCheck} /> On going Ads campaign Optimization</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Keyword Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Traffic Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> In person/Phone Support as needed</li>
            </ul>
            <a href="tel: +1-905-598-8414" className="Avail-Now">Avail Now</a>
          </div>

          <div className="col-lg-4 Packagebox" data-aos="zoom-in">
            <h3>Gold</h3>
            <h4>$400</h4>
            <ul className='content text-center'>
                <li><FontAwesomeIcon icon={faCheck} /> Setup By Google Professional </li>
                <li><FontAwesomeIcon icon={faCheck} /> 5 Ads Campaigns(PPC, Display)</li>
                <li><FontAwesomeIcon icon={faCheck} /> 75 Keywords</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> Bid Management</li>
                <li><FontAwesomeIcon icon={faCheck} /> Comolete google tag manager Setup</li>
                <li><FontAwesomeIcon icon={faCheck} /> Ad Copy Management</li>
                <li><FontAwesomeIcon icon={faCheck} /> On going Ads campaign Optimization</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Keyword Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> Monthly Traffic Reports</li>
                <li><FontAwesomeIcon icon={faCheck} /> In person/Phone Support as needed</li>
            </ul>
            <a href="tel: +1-905-598-8414" className="Avail-Now">Avail Now</a>
          </div>


        </div>

      </div>
    </section>
    </div>
  )
}

export default SEMPack