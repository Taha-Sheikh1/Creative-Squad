import React from 'react';
import './DigitalServices.css';
import { Link } from 'react-router-dom';

const DigitalServices = () => {
  return (
    <div>
    
    <section className='Services mt-0'>

      <div className='container'>

         <h2 className='mt-0 mb-3 text-center Services mb-5'>360 <span className='DigitalServices'>Digital Services</span></h2>

        <div className='row text-center mb-0'>

            <div className='col-lg-4'>
               <div>
                   <img src={require('./Search-Engine-Optimization.png')} className='img-fluid' alt='Search Engine Optimization' />
               </div>
               <h2 className='ServicesTitle'>Search Engine Optimization</h2>
               <p className='ServicesPara'>We use SEO techniques and link keywords so you dominate search results.</p>
               <Link to='/search-engine-optimization-service-in-toronto/'>
               <button className='ServicesBtn'>Read More</button>
               </Link>
            </div>

            <div className='col-lg-4'>
            <div>
                   <img src={require('./Search-Engine-Marketing.png')} className='img-fluid' alt='Search Engine Marketing' />
            </div>
               <h2 className='ServicesTitle'>Search Engine Marketing</h2>
               <p className='ServicesPara'>Effortlessly increase your revenue with our sales-driven plans for your online business.</p>
               <Link to='/search-engine-marketing-service-in-toronto/'>
               <button className='ServicesBtn'>Read More</button>
               </Link>
            </div>

            <div className='col-lg-4'>
            <div>
                   <img src={require('./eCommerce-Development.png')} className='img-fluid' alt='eCommerce Development' />
            </div>
               <h2 className='ServicesTitle'>eCommerce Development</h2>
               <p className='ServicesPara'>Hire us to boost the advertisement of your website on search engines.</p>
               <Link to='/ecommerce-development-service-in-toronto/'>
               <button className='ServicesBtn'>Read More</button>
               </Link>
            </div>

        </div>

        <div className='row text-center mt-5'>

            <div className='col-lg-4'>
               <div>
                   <img src={require('./Branding.png')} className='img-fluid' alt='Branding' />
               </div>
               <h2 className='ServicesTitle'>Social Media Marketing</h2>
               <p className='ServicesPara'>Creative Squad realizes the value of influential social media marketing.</p>
               <Link to='/social-media-marketing-service-in-toronto/'>
               <button className='ServicesBtn'>Read More</button>
               </Link>
            </div>

            <div className='col-lg-4'>
            <div>
                   <img src={require('./App-Development.png')} className='img-fluid' alt='Search Engine Marketing' />
            </div>
               <h2 className='ServicesTitle'>App Development</h2>
               <p className='ServicesPara'>Making apps with efficient functionality and fast navigation, so they never lag.</p>
               <Link to='/app-development-service-in-toronto/'>
               <button className='ServicesBtn'>Read More</button>
               </Link>
            </div>

            <div className='col-lg-4'>
            <div>
                   <img src={require('./Web-Development.png')} className='img-fluid' alt='eCommerce Development' />
            </div>
               <h2 className='ServicesTitle'>Web Development</h2>
               <p className='ServicesPara'>We use WordPress, Shopify, Magento and Custom Paltforms to build smooth and functional websites.</p>
               <Link to='/website-design-and-development-service-in-toronto/'>
               <button className='ServicesBtn'>Read More</button>
               </Link>
            </div>

        </div>

      </div>

    </section>

    </div>
  )
}

export default DigitalServices;