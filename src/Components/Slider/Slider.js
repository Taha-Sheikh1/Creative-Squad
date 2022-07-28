import React from 'react'
import './Slider.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore,  {Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);

const Slider = ({Title, Slider1, Slider2, Slider3, Slider4, Slider5}) => {

  return (
    <div>

    <section id="clients" className="clients pt-4 pb-1">
    <div className="container" data-aos="zoom-out">
    <h1 className='text-center pb-0 pt-0'>{Title}</h1>
    <Swiper 
    className='swiper' 
    spaceBetween={50}
    slidesPerView={4}
    loop={true}
    autoplay= {{
    delay: 400,
  }}
    breakpoints={{
      992: {
        spaceBetween: 50,
        slidesPerView: 4 
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 3
      },
      578: {
        spaceBetween: 40,
        slidesPerView: 1
      },
      320: {
        spaceBetween: 56,
        slidesPerView: 1
      }
    }}

   >
  <SwiperSlide className='swiper-slide'><img src={Slider1} className="img-fluid" alt="Slider Pic 1" /></SwiperSlide> 
  <SwiperSlide className='swiper-slide'><img src={Slider2} className="img-fluid" alt="Slider Pic 2" /></SwiperSlide>
  <SwiperSlide className='swiper-slide'><img src={Slider3} className="img-fluid"  alt="Slider Pic 3" /></SwiperSlide>
  <SwiperSlide className='swiper-slide'><img src={Slider4} className="img-fluid"  alt="Slider Pic 4" /></SwiperSlide>
  <SwiperSlide className='swiper-slide'><img src={Slider5} className="img-fluid" alt="Slider Pic 5" /></SwiperSlide>
  </Swiper>
  </div>
  </section>
{/* fixed the breakpoint bewlow 768 */}


     </div>
  )
}

export default Slider;

