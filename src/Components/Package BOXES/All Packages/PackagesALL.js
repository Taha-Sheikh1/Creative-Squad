import React, {useState} from 'react';
import './PackageALL.css';
import PackageBOX from '../Main Package Box/PackageBOX';
import SEMPack from '../Search Engine Package/SEMPack';


const PackagesALL = () => {

    const [ToggleServices, setToggleServices] = useState(1);

    const ToggleService = (index) => {
      setToggleServices(index);
    }

  return (
    <div>
    <section className='PackageSection'>
       <div className='container-fluid pt-4 pb-2 mt-0'>

<h2 className='text-center pb-5'>Our Pricing Plans</h2> 

<ul className='nav nav-tabs d-flex justify-content-center' id='myTab' role='tablist'>

  <li className='nav-item'>
    <button className={ToggleServices === 1 ? 'nav-link active' : 'nav-link'} onClick={(evt) => {
     evt.preventDefault();
     ToggleService(1);
     }} id='home-tab' data-bs-toggle='tab' data-bs-target='#web-design' type='button' role='tab' aria-controls='web-design'>Social Media Marketing</button>
  </li>

  <li className='nav-item'>
    <button className={ToggleServices === 2 ? 'nav-link active' : 'nav-link'} id='profile-tab' onClick={(evt) => {
       evt.preventDefault();
       ToggleService(2);
    }} data-bs-toggle='tab' data-bs-target='#branding' type='button' role='tab' aria-controls='branding'>Search Engine Optimization</button>
  </li>

  <li className='nav-item'>
    <button className={ToggleServices === 3 ? 'nav-link active' : 'nav-link'} id='contact-tab' onClick={(evt) => {
      evt.preventDefault();
      ToggleService(3);
    }} data-bs-toggle='tab' data-bs-target='#social-media-marketing' type='button' role='tab' aria-controls='social-media-marketing'>Search Engine Marketing</button>
  </li>

  <li className='nav-item'>
    <button className={ToggleServices === 4 ? 'nav-link active' : 'nav-link'} id='contact-tab' onClick={(evt) => {
      evt.preventDefault();
      ToggleService(4);
    }} data-bs-toggle='tab' data-bs-target='#web-applications' type='button' role='tab' aria-controls='web-applications'>Website Development</button>
  </li>

  <li className='nav-item'>
    <button className={ToggleServices === 5 ? 'nav-link active' : 'nav-link'} id='contact-tab' onClick={(evt) => {
      evt.preventDefault();
      ToggleService(5);
    }} data-bs-toggle='tab' data-bs-target='#eCommerce' type='button' role='tab' aria-controls='eCommerce'>eCommerce Development</button>
  </li>

  <li className='nav-item'>
    <button className={ToggleServices === 6 ? 'nav-link active' : 'nav-link'} id='contact-tab' onClick={(evt) => {
      evt.preventDefault();
      ToggleService(6);
    }} data-bs-toggle='tab' data-bs-target='#mobile-applications' type='button' role='tab' aria-controls='mobile-applications'>Application Development</button>
  </li>

</ul>

<div className='tab-content' id='myTabContent'>

  {ToggleServices === 1 ?
   
  <div className='container px-2 px-lg-5'>
  <div className='row g-1'>

  <div className='col-lg-12'>

    <PackageBOX LiName='SMM PACKAGE! (ALL List Items Will be Updated!!)' />

  </div>

</div>
  </div>
  : null}

  {ToggleServices === 2 ?
   
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-12'>
  <PackageBOX LiName='SEO PACKAGE! (ALL List Items Will be Updated!!)' />
  </div>

</div>
  </div>
 
  : null}

  {ToggleServices === 3 ?
    
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-12'>
  <SEMPack />
  </div>

</div>
  </div>
  
  : null}

  {ToggleServices === 4 ?
    
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-12'>
  <PackageBOX LiName='WEB DEV PACKAGE! (ALL List Items Will be Updated!!)' />
  </div>

</div>
  </div>
  
  : null}

  {ToggleServices === 5 ?
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-12'>
  <PackageBOX LiName='eCOMM PACKAGE! (ALL List Items Will be Updated!!)' />

  </div>

</div>
  </div>
  : null}

  {ToggleServices === 6 ?
     
  <div className='container px-4 px-lg-5'>
  <div className='row g-1'>
  
  <div className='col-lg-12'>
  <PackageBOX LiName='APP PACKAGE! (ALL List Items Will be Updated!!)' />
  </div>

</div>
  </div>
  : null}
  </div>

</div>

</section>

    </div>
  )
}

export default PackagesALL