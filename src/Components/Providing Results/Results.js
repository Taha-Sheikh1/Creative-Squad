import React from 'react';
import './Results.css';

const Results = () => {
  return (
    <div>
    
    <section className='Results py-1 pt-3 pb-1 mb-0'>
    <h1 className='text-center'>How We Provide <span>Results</span></h1>
        <div className='container px-2 my-5 text-center'>
            <div className='row g-2 pt-2'>
              <div className='col-lg-4 mb-5 mb-lg-0 p-4 box'>
              <div className='p-3'>
              <div className='mb-3'>
                 <img src={require('./ideas.png')} className='img-fluid' alt='Innovative Ideas' />
              </div>
              <h4 className='Result_Heading'>Innovative Ideas</h4>
              <p className='Result_Paragraph'>At Creative Squad, we value originality, giving you the most creative ideas for your brand.</p>
              </div>
              </div>

              
              <div className='col-lg-4 mb-5 mb-lg-0 p-4 box'>
              <div className='p-3'>
              <div className='mb-3'>
              <img src={require('./brand.png')} className='img-fluid' alt='Brands' />
              </div>
              <h4 className='Result_Heading'>Personalized Solutions</h4>
              <p className='Result_Paragraph'>Breaking away from generalized patterns, we bring you unique<br /> solutions  tailor-made especially for your brand.</p>
              </div>
              </div>

              
              <div className='col-lg-4 mb-5 mb-lg-0 p-4 box'>
              <div className='p-3'>
              <div className='mb-3'>
              <img src={require('./roi.png')} className='img-fluid' alt='ROI' />
              </div>
              <h4 className='Result_Heading'>ROI Focused</h4>
              <p className='Result_Paragraph'>Sit back and watch your business grow as we provide results-driven ROI for your brand.</p>
              </div>
              </div>


            </div>
        </div>
    </section>

    </div>
  )
}

export default Results;

