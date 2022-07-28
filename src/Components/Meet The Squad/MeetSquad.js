import React from 'react';
import './MeetSquad.css';


const MeetSquad = () => {
  return (
    <div>

     <section>
            <div className='container px-5'>
                <div className='row gx-5 align-items-center justify-content-center justify-content-lg-between'>
                    <div className='col-12 col-lg-5 ms-3'>
                        <h2 className='Title'>Meet the Squad</h2>
                        <p className='mb-5 mb-lg-0 Paragraph'>We’re a team of talented individuals aware of the current marketing trends ready to make use of analytics to provide you with the best ROI.</p>
                         <div className='Mission mt-3'>
                             <h2>
                                <img src={require('./mission-icon.webp')} alt='Mission-Icon' />
                               <span className='ms-1 Mission'>Our Mission</span>
                             </h2>
                             <p className='ms-5 Paragraph'>Providing aesthetically pleasing products to our clients with easy navigation for user-friendliness.</p>
                         </div>

                         <div className='Vision'>
                             <h2>
                                <img src={require('./vision-icon.webp')} alt='Vision-Icon' />
                                <span className='ms-1 Vision'>Our Vision</span>
                             </h2>
                             <p className='ms-5 Paragraph'>Bringing brands to the innovative side one at a time, with work they'll never forget.</p>
                         </div>
                    </div>
                    <div className='col-sm-8 col-md-6'>
                        <div className='px-5 px-sm-0'><img className='img-fluid SquadImage' src={require('./Meet-the-Squad-image.webp')} alt='Meet-The-Squad' /></div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default MeetSquad;