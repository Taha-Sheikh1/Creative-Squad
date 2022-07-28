import React from 'react';
import './Perks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse, faHandHoldingMedical, faChildren } from '@fortawesome/free-solid-svg-icons'



const Perks = () => {
  return (
    <div>

<section className='Perks'>

<div className='container'>

   <h1 className='mt-0 mb-1 text-center'> Some more Perks Of Confluencing With Us </h1>
   <p className='mt-0 mb-3 text-center'>We value all of our employees equally and offer them the following benefits</p>
   <hr></hr> 

  <div className='row text-center mb-0 mt-0'>

      <div className='col-lg-4 p-3 PerksContentBox'>
         <div className='gx-3'>
         <div className='mb-2'>
              <FontAwesomeIcon icon={faHeartPulse} className='fa-3x' style={{color: '#FF0909'}} />
         </div>
         <h2 className='PerksHeading'>Health Care</h2>
         <p className='PerksPara'>The healthcare sector consists of businesses that provide medical services, manufacture medical equipment or drugs, provide medical insurance, or otherwise facilitate the provision of healthcare to patients.</p>    
         </div>
      </div>

      <div className='col-lg-4 p-3 PerksContentBox2'>
      <div>
      <div className='mb-2'>
      <FontAwesomeIcon icon={faHandHoldingMedical} className='fa-3x' style={{color: '#FF0909'}} />
      </div>
         <h2 className='PerksHeading'>Life Insurance</h2>
         <p className='PerksPara'>A life insurance policy is often the cornerstone of a business's succession plan. When a business uses life insurance as the funding vehicle of a buy-sell agreement, the death benefits are used to purchase a deceased partner's share of the business from their estate.</p>
      </div>
      </div>

      <div className='col-lg-4 p-3 PerksContentBox3'>
      <div className='mb-2'>
      <div className='mb-2'>
      <FontAwesomeIcon icon={faChildren} className='fa-3x' style={{color: '#FF0909'}} />
      </div>
         <h2 className='PerksHeading'>7-Days Parental Leave</h2>
         <p className='PerksPara'>A leave policy is a document that lays down the rules and regulations related to various types of leaves that an employee can avail of.</p>
      </div>
      </div>

  </div>

   </div>
</section>

    </div>
  )
}

export default Perks