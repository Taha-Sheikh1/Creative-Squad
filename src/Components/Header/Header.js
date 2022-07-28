import React, {useState}  from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Navmodal from './Navmodal'; 

 
const Header = () => {


  const [ToggleNav, setToggleNav] = useState(false); 

  const OpenHandler = (e) => {
     e.preventDefault();
      setToggleNav((prevState) => !prevState)
  }
   
  return (
    <div>


  <header id='header'>
  <div className='container d-flex align-items-center justify-content-lg-between'>
  <h1 className='logo me-5 me-lg-0'>
   <NavLink to={'/'}>
   <img src={require('./Logo.jpg')} alt='Logo Of The Creative Squad'  className='Logo' />
   </NavLink>
  </h1>
  <nav id='navbar' className='navbar order-last order-lg-0'>
    <ul>
      <li><NavLink to={'/home'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>Home</NavLink></li>
      <li><NavLink to={'/about'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>About</NavLink></li>
      <li className='dropdown'>
      <NavLink className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'} to={'/digital-marketing-services-in-toronto'}>
      <span>Services</span><FontAwesomeIcon icon={faChevronDown} />
      </NavLink>
       <ul>
       <li><NavLink to={'/social-media-marketing-service-in-toronto'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>Social Media Marketing</NavLink></li>
       <li><NavLink to={'/search-engine-optimization-service-in-toronto'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>Search Engine Optimization</NavLink></li>
       <li><NavLink to={'/search-engine-marketing-service-in-toronto'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>Search Engine Marketing</NavLink></li>
       <li><NavLink to={'/website-design-and-development-service-in-toronto'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>Website Development</NavLink></li>
       <li><NavLink to={'/ecommerce-development-service-in-toronto'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>Ecommerce Development</NavLink></li>
       <li><NavLink to={'/app-development-service-in-toronto'} className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'}>Application Development</NavLink></li>
       </ul>
      </li>
      <li><NavLink className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'} to={'/packages'}>Packages</NavLink></li>
      <li><NavLink className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'} to={'/portfolio'}>Portfolio</NavLink></li>
      <li><NavLink className={navData => navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto'} to={'/contact-us'}>Contact Us</NavLink></li>
    </ul>
  </nav>
  { !ToggleNav ?  <FontAwesomeIcon icon={faBars} className='ms-auto mobile-nav' onClick={OpenHandler} />  : <FontAwesomeIcon icon={faXmark} className='ms-auto mobile-nav' onClick={OpenHandler} />  } 
        
        <a href='tel: +1-905-598-8414' className='get-started-btn'>+1-905-598-8414</a>
  </div>
  </header>
   {ToggleNav ?  <Navmodal ToggleBar={setToggleNav} /> : null}


    </div>
  )
}

export default Header;

 

