import React from 'react'
import './NewPortfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore,  {Autoplay, Navigation} from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css/navigation';
import Slider1 from '../../assets/Portfolio Images/1.png';
import Slider2 from '../../assets/Portfolio Images/2.png';
import Slider3 from '../../assets/Portfolio Images/4.png';
import Slider4 from '../../assets/Portfolio Images/5.png';
import Slider5 from '../../assets/Portfolio Images/6.png';


SwiperCore.use([Autoplay, Navigation]);

const NewPortfolio = () => {
  return (
    <div>

    <section id='clientsPortfolio' className='clients pt-4 pb-1'>
    <div className='container' data-aos='zoom-out'>
      <div className='row'> 
        <div className='col-lg-9 col-md-12'>
        
        <h1 className='heading-portfolio'>Our Portfolio</h1> 
        </div>
        <div className='col-lg-3 col-md-12 d-lg-flex justify-content-lg-end'>
        <div className='row me-3'>
        <div className='col-lg-2 col-6'>
        <div className='review-swiper-button-prev d-flex justify-content-end d-lg-flex justify-content-lg-end'>
        <button><FontAwesomeIcon icon={faChevronLeft} className='icon' /></button>
      </div>
        </div>
        <div className='col-lg-2 col-6'>
        <div className='review-swiper-button-next'>
        <button><FontAwesomeIcon icon={faChevronRight} className='icon' /></button>
        </div>

        </div>
        </div>
         
        </div>
      </div>
      
   
    <Swiper 
    className='swiper' 
    navigation={{
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev',
      }}
    spaceBetween={0}
    slidesPerView={4}
    loop={true}
    autoplay= {{
    delay: 600,
  }}
    breakpoints={{
      992: {
        spaceBetween: 0,
        slidesPerView: 4 
      },
      768: {
        spaceBetween: 0,
        slidesPerView: 3
      },
      578: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      320: {
        spaceBetween: 0,
        slidesPerView: 1
      }
    }}

   >
  <SwiperSlide className='swiper-slide'><img src={Slider1} className='img-fluid' alt='Slider Pic 1' /></SwiperSlide> 
  <SwiperSlide className='swiper-slide'><img src={Slider2} className='img-fluid' alt='Slider Pic 2' /></SwiperSlide>
  <SwiperSlide className='swiper-slide'><img src={Slider3} className='img-fluid' alt='Slider Pic 3' /></SwiperSlide>
  <SwiperSlide className='swiper-slide'><img src={Slider4} className='img-fluid' alt='Slider Pic 4' /></SwiperSlide>
  <SwiperSlide className='swiper-slide'><img src={Slider5} className='img-fluid' alt='Slider Pic 5' /></SwiperSlide>
  </Swiper>
  </div>
  </section>
{/* fixed the breakpoint bewlow 768 */}


     </div>
  )
}

export default NewPortfolio;

