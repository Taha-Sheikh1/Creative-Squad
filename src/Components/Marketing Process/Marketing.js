import React from 'react';
import './Marketing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCreditCard, faBarsProgress, faFolder } from '@fortawesome/free-solid-svg-icons'


const Marketing = () => {
  return (
    <div>
        <section className='MarketingProcess mt-0'>
        <h2 className='mb-5 text-center'>Our Process Of <span>Marketing Your Brand</span></h2>
           <div className='container text-center'>
           
           <div className='row text-start gy-3 mb-5 text-center'>
             <div className='col-lg-2 col-sm-12 text-lg-end'>            
             <FontAwesomeIcon icon={faFolder} className='fa fa-3x' />
             </div>
             <div className='col-lg-4 col-sm-12 p-2'>
                 <h3 className='mb-0'> Minimize Your Documents.</h3>
                 <p className='mt-0'>Forget about running around with papers. Our squad will minimize all your documents into an online file for your company.</p>
             </div>

             <div className='col-lg-2 col-sm-12 text-lg-end'>
             <FontAwesomeIcon icon={faBook} className='fa fa-3x' />
             </div>

             <div className='col-lg-4 col-sm-12 p-2'>
                 <h3 className='mb-0'>Saved To The Cloud</h3>
                 <p className='mt-0'>Don’t worry about losing your data because we save everything to the cloud, meaning your designs and plans are safe.</p>
            </div>

           </div>

           <div className='row text-center gy-3 text-center'>
             <div className='col-lg-2 col-sm-12 text-lg-end'>

             <FontAwesomeIcon icon={faCreditCard} className='fa fa-3x' />
             </div>
             <div className='col-lg-4 col-sm-12 p-2'>
                 <h3 className='mb-0'>Follow Client Payments</h3>
                 <p className='mt-0'>Tired of manually tracking your e-commerce payments? We can help your business follow client payments through your online business website.</p>
             </div>

             <div className='col-lg-2 col-sm-12 text-lg-end'>
             <FontAwesomeIcon icon={faBarsProgress} className='fa fa-3x' />
             </div>

             <div className='col-lg-4 col-sm-12 p-2'>
                 <h3 className='mb-0'>Automate Repeating Tasks</h3>
                 <p className='mt-0'>Our app developers can help you automate recurring tasks to increase efficiency. No need to manually post when automation can.</p>
             </div>

           </div>
           </div>
        </section>
    </div>
  )
}

export default Marketing;