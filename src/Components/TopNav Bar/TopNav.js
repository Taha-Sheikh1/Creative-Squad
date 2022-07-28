import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './TopNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import TrustpilotIcon from '../../assets/Logos/trustpilot.svg';


const TopNav = () => {

    // https://www.facebook.com/Creative-Squad-100708639126818
    // https://www.instagram.com/creativesquad.ca/
    // https://twitter.com/CreativeSquadCA?fbclid=IwAR0_mglyyw9JnL7oxWD6WPYLLLsQjcI0g9qBqiN9l3y8T0poyGmuKJuGMRY

  return (
    <div>
    <Navbar bg='dark' variant='dark' className='TopBar'>
    <Container className='d-flex justify-content-between'>

       <Navbar.Brand className='d-flex d-flex-row'>
       <FontAwesomeIcon icon={faSignal} className='bars' />  
       <h6><span className='clients ms-1'>REVENUE DRIVEN FOR OUR CLIENTS</span><br /><span className='revenue ms-1'>$978,611</span></h6>
       </Navbar.Brand>
       <Nav className='ms-auto'>
       <Nav.Link rel='noreferrer' href='https://www.facebook.com/Creative-Squad-100708639126818' target='_blank'>
         {/* <a rel='noreferrer' href='https://www.facebook.com/Creative-Squad-100708639126818' target='_blank'>  */}
       <FontAwesomeIcon icon={faFacebook} className='fb fa-x' />
         {/* </a>  */}
       </Nav.Link>  
       <Nav.Link rel='noreferrer' href='https://www.instagram.com/creativesquad.ca' target='_blank'>
        {/* <a rel='noreferrer' href='https://www.instagram.com/creativesquad.ca' target='_blank'>  */}
       <FontAwesomeIcon icon={faInstagram} className='insta fa-x' />
        {/* </a>  */}
       </Nav.Link>
       <Nav.Link rel='noreferrer' href='https://twitter.com/CreativeSquadCA?fbclid=IwAR0_mglyyw9JnL7oxWD6WPYLLLsQjcI0g9qBqiN9l3y8T0poyGmuKJuGMRY' target='_blank'>
        {/* <a rel='noreferrer' href='https://twitter.com/CreativeSquadCA?fbclid=IwAR0_mglyyw9JnL7oxWD6WPYLLLsQjcI0g9qBqiN9l3y8T0poyGmuKJuGMRY' target='_blank'>  */}
       <FontAwesomeIcon icon={faTwitter} className='twitter fa-x' />
        {/* </a>  */}
       </Nav.Link>
       
       </Nav>
       <div className='review-icon'>
       <a rel='noreferrer' href=''>
        <img src={TrustpilotIcon} className='img-fluid trustpilot-logo' />
       </a>
       </div>

    </Container>
    </Navbar>

{/* <section className='TopBar'>
  <div className='container d-flex justify-content-between'>
    <div className='row'>
      <div className='col-lg-6'>
      <h6><span className='clients'>REVENUE DRIVEN FOR OUR CLIENTS</span><br /><span className='revenue'>$978,611</span></h6>
      </div>

      <div className='col-lg-6'>
      <FontAwesomeIcon icon={faFacebook} className='fb fa-x' />
      <FontAwesomeIcon icon={faInstagram} className='insta fa-x' />
      <FontAwesomeIcon icon={faTwitter} className='twitter fa-x' />

      </div>
    </div>
  </div>
</section>
 */}



    </div>
  )
}

export default TopNav;