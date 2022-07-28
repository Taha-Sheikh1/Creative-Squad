import React from 'react';
import './FILT.css'

const FILT = () => {
  return (
    <div>
      <section className='py-5 pt-4 pb-2'>
        <div className='container px-2 my-5 text-left'>

            <div className='row pt-1'>
              <div className='col-lg-3 mb-1 mb-lg-0 p-3'>
              <div className='p-3 FILT_Boxes'>
              <div className='mb-3'>
                 <img src={require('./Facebook.png')} className='img-fluid' alt='Facebook' />
              </div>
              <h4 className='FILT_Heading'>Facebook<br />Marketing</h4>
              <p className='FILT_Paragraph'>Implementing Facebook advertising into your Facebook marketing strategy is one possible technique for increasing likes or driving website clicks.</p>
              
              </div>
              </div>


              <div className='col-lg-3 mb-1 mb-lg-0 p-3'>
              <div className='p-3 FILT_Boxes'>
              <div className='mb-3'>
              <img src={require('./Instagram.png')} className='img-fluid' alt='Instagram Marketing' />
              </div>
              <h4 className='FILT_Heading'>Instagram<br />Marketing</h4>
              <p className='FILT_Paragraph'>Instagram marketing refers to using Instagram to grow brand awareness and launch new products. Instagram allows you to build your brand and connect with followers in a personal way.</p>
              
              </div>
              </div>
              

              <div className='col-lg-3 mb-1 mb-lg-0 p-3'>
              <div className='p-3 FILT_Boxes'>
              <div className='mb-3'>
              <img src={require('./Linked-In.png')} className='img-fluid' alt='LinkedIn Marketing' />
              </div>
              <h4 className='FILT_Heading'>LinkedIn<br />Marketing</h4>
              <p className='FILT_Paragraph'>LinkedIn marketing is the process of using LinkedIn to make connections, generate leads, improve brand awareness, foster business relationships and partnerships, share content, and drive traffic to your website.</p>
             
              </div>
              </div>


              <div className='col-lg-3 mb-1 mb-lg-0 p-3'>
              <div className='p-3 FILT_Boxes'>
              <div className='mb-3'>
              <img src={require('./Twitter.png')} className='img-fluid' alt='Twitter Marketing' />
              </div>
              <h4 className='FILT_Heading'>Twitter<br />Marketing</h4>
              <p className='FILT_Paragraph'>Twitter marketing is an idea, or plan that involves putting money and energy into creating a strategy that will drive traffic, engagement and sales for your business.</p>
             
              </div>
              </div>


            </div>
        </div>
    </section>
    </div>
  )
}

export default FILT;

