import React from 'react';
import './Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMagnifyingGlass, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Info = () => {
  return (
    <div>
    <section className='InformationSection'>
        <div className='container'>
        <div className='row text-center align-middle gy-3'>
           <div className='col-lg-4 col-sm-12'>
           <div className='InfoBox p-4'>
           <FontAwesomeIcon icon={faPhone} style={{color: '#ff0000'}} className='fa-2x mb-3' />
             <h2 className='Info'>+1-905-598-8414</h2>
           </div>
           </div>

           <div className='col-lg-4'>
           <div className='InfoBox p-4'>
           <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#ff0000'}} className='fa-2x mb-3' />
           <h2 className='Info'>Yonge Street, Suite 1600· Toronto, ON M4PIE4</h2>
           </div>
           </div>

           <div className='col-lg-4'>
           <div className='InfoBox p-4'>
           <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{color: '#ff0000'}} className='fa-2x mb-3' />
           <h2 className='Info'>Info@creativesquad.ca</h2>
           </div>
           </div>
        </div>
        </div>
    </section>
    </div>
  )
}




export default Info;