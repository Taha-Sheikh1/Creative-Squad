import React, {useState} from 'react';
import './Portfolio.css';


const Portfolio = () => {

    const [TogglePics, setTogglePics] = useState(1);

    const TogglePictures = (index) => {
      setTogglePics(index);
    }

  return (
    <div>


<div className='container pt-2'>

<h1 className='text-center pb-2'>Our Portfolio</h1> 

<ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">

  <li className="nav-item">
    <button className={TogglePics === 1 ? 'nav-link active' : 'nav-link'} onClick={(evt) => {
     evt.preventDefault();
     TogglePictures(1);
     }} id="home-tab" data-bs-toggle="tab" data-bs-target="#web-design" type="button" role="tab" aria-controls="web-design">Web Development</button>
  </li>

  <li className="nav-item">
    <button className={TogglePics === 2 ? 'nav-link active' : 'nav-link'} id="profile-tab" onClick={(evt) => {
       evt.preventDefault();
       TogglePictures(2);
    }} data-bs-toggle="tab" data-bs-target="#branding" type="button" role="tab" aria-controls="branding">SEM</button>
  </li>

  <li className="nav-item">
    <button className={TogglePics === 3 ? 'nav-link active' : 'nav-link'} id="contact-tab" onClick={(evt) => {
      evt.preventDefault();
      TogglePictures(3);
    }} data-bs-toggle="tab" data-bs-target="#social-media-marketing" type="button" role="tab" aria-controls="social-media-marketing">eCommerce Development</button>
  </li>

  <li className="nav-item">
    <button className={TogglePics === 4 ? 'nav-link active' : 'nav-link'} id="contact-tab" onClick={(evt) => {
      evt.preventDefault();
      TogglePictures(4);
    }} data-bs-toggle="tab" data-bs-target="#web-applications" type="button" role="tab" aria-controls="web-applications">SEO</button>
  </li>

  <li className="nav-item">
    <button className={TogglePics === 5 ? 'nav-link active' : 'nav-link'} id="contact-tab" onClick={(evt) => {
      evt.preventDefault();
      TogglePictures(5);
    }} data-bs-toggle="tab" data-bs-target="#eCommerce" type="button" role="tab" aria-controls="eCommerce">Social Media Marketing</button>
  </li>

  <li className="nav-item">
    <button className={TogglePics === 6 ? 'nav-link active' : 'nav-link'} id="contact-tab" onClick={(evt) => {
      evt.preventDefault();
      TogglePictures(6);
    }} data-bs-toggle="tab" data-bs-target="#mobile-applications" type="button" role="tab" aria-controls="mobile-applications">Mobile Applications</button>
  </li>

</ul>

<div className="tab-content" id="myTabContent">

  {TogglePics === 1 ?
  <div className='pt-5'>
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>

  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

  <div className='col-lg-3 g-1'>
  <div className='p-1'>
  <img src={require('./damco.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

  <div className='col-lg-3 g-1'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

  <div className='col-lg-3 g-1'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./hand.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

</div>
  </div>
  </div>
  : null}

  {TogglePics === 2 ?
  <div className='pt-5'>
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./damco.png')} className='img-fluid' alt='Ecom Banner' />
  </div> 
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./phi.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./marketing.jpg')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

</div>
  </div>
  </div>
  : null}

  {TogglePics === 3 ?
    <div className='pt-5'>
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./damco.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./hand.png')} className='img-fluid' alt='Ecom Banner' />
  </div> 
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./marketing.jpg')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./SEM.jpg')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

</div>
  </div>
  </div>
  : null}

  {TogglePics === 4 ?
    <div className='pt-5'>
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div> 
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./marketing.jpg')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./damco.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

</div>
  </div>
  </div>
  : null}

  {TogglePics === 5 ?
    <div className='pt-5'>
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div> 
  <div className='p-1'>
  <img src={require('./damco.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./SEM.jpg')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./phi.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

</div>
  </div>
  </div>
  : null}

  {TogglePics === 6 ?
    <div className='pt-5'>
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./hand.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div> 
  <div className='p-1'>
  <img src={require('./phi.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./SEM.jpg')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>
  <div className='col-lg-3'>
  <div className='p-1'>
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'>
  <img src={require('./marketing.jpg')} className='img-fluid' alt='Ecom Banner' />
  </div>
  <div className='p-1'> 
  <img src={require('./ecom.png')} className='img-fluid' alt='Ecom Banner' />
  </div>
  </div>

</div>
  </div>
  </div>
  : null}

</div>


</div>
 
    </div>
  )
}

export default Portfolio;


