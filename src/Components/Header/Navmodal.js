import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Navmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Navmodal = ({ToggleBar}) => {

  const [Clicked, setClicked] = useState(false);

  const ClickHandler = () => {
    ToggleBar(false)
  }

  const DropDownHandler = (e) => {
   e.preventDefault();
   setClicked(prevState => !prevState);
   ToggleBar(true)
  }

  return (
    <>

<div className='container Navbar'>
  <ul className="nav flex-column ms-5 ">
  
  <li><NavLink to={'/home'} onClick={ClickHandler} className={navData => navData.isActive ? 'nav-link' : 'nav-link'}>Home</NavLink></li>
  <li><NavLink to={'/about'} onClick={ClickHandler} className={navData => navData.isActive ? 'nav-link' : 'nav-link'}>About</NavLink></li>
  <li>
           <li className='nav-item'><NavLink to={'/digital-marketing-services-in-toronto'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'}><span onClick={ClickHandler}>Services</span> <FontAwesomeIcon icon={faChevronDown} onClick={DropDownHandler} /></NavLink></li>
          {Clicked ? 
           <ul className="nav flex-column">
              <li><NavLink to={'/social-media-marketing-service-in-toronto'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>Social Media Marketing</NavLink></li>
              <li><NavLink to={'/search-engine-optimization-service-in-toronto'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>Search Engine Optimization</NavLink></li>
              <li><NavLink to={'/search-engine-marketing-service-in-toronto'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>Search Engine Marketing</NavLink></li>
              <li><NavLink to={'/website-design-and-development-service-in-toronto'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>Website Development</NavLink></li>
              <li><NavLink to={'/ecommerce-development-service-in-toronto'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>Ecommerce Development</NavLink></li>             
              <li><NavLink to={'/app-development-service-in-toronto'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>App Development</NavLink></li>
            </ul>
          : null}
  </li>
    <li><NavLink to={'/packages'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>Packages</NavLink></li>
    <li><NavLink to={'/portfolio'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}> Portfolio</NavLink></li>
    <li><NavLink to={'/contact-us'} className={navData => navData.isActive ? 'nav-link' : 'nav-link'} onClick={ClickHandler}>Contact Us</NavLink></li>
    
</ul>   
 </div>

    </>

  )
}

export default Navmodal;
