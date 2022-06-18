import React from 'react';
import './Pride.css';

const Pride = () => {
  return (
    <div>

     <section className='py-5 pt-4 pb-2'>
    <h1 className='text-center'>What We <span>Pride</span> Ourselves Over</h1>
        <div className='container px-2 my-5 text-center'>


            <div className='row pt-2'>
              <div className='col-lg-4 mb-5 mb-lg-0 p-4'>
              <div className='p-3 boxes'>
              <div className='mb-3'>
                 <img src={require('./serrvicesTiming.png')} className='img-fluid' alt='24/7 Services' />
              </div>
              <h4 className='Heading'>24/7 Services</h4>
              <p className='Paragraph'>Whenever you need us, we are always here.</p>
              {/* <button className='btns'>Call Now</button> */}
              <a href='tel: +1-905-598-8414' className='btns'>Call Now</a>
              </div>
              </div>


              <div className='col-lg-4 mb-5 mb-lg-0 p-4'>
              <div className='p-3 boxes'>
              <div className='mb-3'>
              <img src={require('./All-in-One.png')} className='img-fluid' alt='All-in-One' />
              </div>
              <h4 className='Heading'>All-in-One</h4>
              <p className='Paragraph'>Everything from developing to writing and beyond.</p>
              <button className='btns'>How We Do It</button>
              </div>
              </div>
              

              <div className='col-lg-4 mb-5 mb-lg-0 p-4'>
              <div className='p-3 boxes'>
              <div className='mb-3'>
              <img src={require('./Response-Rate-Icon.png')} className='img-fluid' alt='Response Rate' />
              </div>
              <h4 className='Heading'>100% Response Rate</h4>
              <p className='Paragraph'>Our squad never misses a potential<br />client!</p>
              <button className='btns'>Chat With Us</button>
              </div>
              </div>


            </div>
        </div>
    </section>

    </div>
  )
}

export default Pride;