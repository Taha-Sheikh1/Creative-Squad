import React from 'react';
import './Footer.css';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone, faMagnifyingGlass, faEnvelopesBulk, faCommentDollar, faWindowRestore, faCannabis } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; 


const Footer = () => {

  return (
    <div>
  
       <footer id="footer">
<div className="footer-top">
  <div className="container">
    <div className="row mb-3">

      <div className="col-lg-3 footer-contact mb-5">
        <h3>Let's Talk</h3>
        <Link to='/contact-us'>
        <button className='BtnFooter'>Contact Us</button>
        </Link>
      </div>

      <div className="col-lg-3 footer-links">
      <div className='divider mb-2 mt-2'></div>
        <h4 className='mb-3'>Company</h4>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/about' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>About Us</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/packages' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Packages</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/careers' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Careers</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/refund-policy' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Refund Policy</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/terms-conditions' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Terms & Conditions</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/privacy-policy' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Privacy Policy</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/contact-us' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Contact Us</NavLink></li>
        </ul>
      </div>

      <div className="col-lg-3 footer-links">
      <div className='divider mb-2'></div>
        <h4 className='mb-3'>Services</h4>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/social-media-marketing-service-in-toronto' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Social Media Marketing</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/search-engine-optimization-service-in-toronto' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Search Engine Optimization</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/search-engine-marketing-service-in-toronto' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Search Engine Marketing</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/website-design-and-development-service-in-toronto' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>Web Development</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/ecommerce-development-service-in-toronto' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>eCommerce Development</NavLink></li>
          <li><FontAwesomeIcon icon={faArrowRight} className='fa-Foot fa-x' /> <NavLink to='/app-development-service-in-toronto' className={navData => navData.isActive ? 'ActiveClass' : 'defaultClass'}>App Development</NavLink></li>
        </ul>
      </div>

      <div className="col-lg-3 footer-links">
      <div className='divider mb-2'></div>
      <h4 className='mb-3'>Get In Touch</h4>
      <ul className='Contact-Info'>
          <li><FontAwesomeIcon icon={faEnvelope} className='fa-Foot fa-x' /> <a href="#email-address"> info@creativesqaud.ca</a></li>
          <li><FontAwesomeIcon icon={faPhone} className='fa-Foot fa-x' /> <a href="tel: +1-905-598-8414"> +1-905-598-8414</a></li>
          <li><FontAwesomeIcon icon={faMagnifyingGlass} className='fa-Foot fa-x' /> <a href="#location"> 2300 Yonge Street, Suite 1600 Toronto</a></li>
        </ul>
      </div>

    </div>

    <div className='row mb-3'>

    <div className="col-lg-3 social-links text-md-right pt-3 pt-md-0">
    <div className='divider mb-2'></div>
        <h4 className='mb-2'>Social Media</h4>
          <div className='me-auto mb-5'>

          <a rel="noreferrer" href='https://www.facebook.com/Creative-Squad-100708639126818' target='_blank'><FontAwesomeIcon icon={faFacebook} className='Fb fa-x' /></a>
          <a rel="noreferrer" href='https://www.instagram.com/creativesquad.ca' target='_blank'><FontAwesomeIcon icon={faInstagram} className='Insta fa-x' /></a>
          <a rel="noreferrer" href='https://twitter.com/CreativeSquadCA?fbclid=IwAR0_mglyyw9JnL7oxWD6WPYLLLsQjcI0g9qBqiN9l3y8T0poyGmuKJuGMRY' target='_blank'><FontAwesomeIcon icon={faTwitter} className='Twt fa-x' /></a>

          </div>          
      </div>

    <div className="col-lg-3 footer-links">
    <div className='divider mb-2'></div>
        <h4 className='mb-3'>Free Instant Consultation</h4>
        <ul>
          <li><FontAwesomeIcon icon={faEnvelopesBulk} className='fa-Foot fa-x' /><a href="tel: +1-905-598-8414"> Social Media Marketing</a></li>
          <li><FontAwesomeIcon icon={faCommentDollar} className='fa-Foot fa-x' /> <a href="tel: +1-905-598-8414"> Search Engine Optimization</a></li>
          <li><FontAwesomeIcon icon={faWindowRestore} className='fa-Foot fa-x' /> <a href="tel: +1-905-598-8414"> Website Development</a></li>
        </ul>
      </div>

      <div className="col-lg-3 text-center">
        <img src={require('./Ssl.webp')} className='img-fluid' alt='SSL' /> <br />
        <img src={require('./Payment-Methods.webp')} className='img-fluid' alt='Payment-Methods' />
      </div>

      <div className="col-lg-3 text-center">
      <img src={require('./dmca.webp')} className='img-fluid' alt='Dmca' />
      </div>

    </div>
  </div>
</div>
<div class="container text-center">
  <div>
  Made In <FontAwesomeIcon icon={faCannabis} style={{color: '#FF0000'}} className='fa-x' /> &copy; Copyright <strong><span>2018-2022</span></strong>
  </div> 
  </div>
</footer>
 
      
    </div>
  )
}

export default Footer;

 