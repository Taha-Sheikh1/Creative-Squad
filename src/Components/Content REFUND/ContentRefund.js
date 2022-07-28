import React from 'react';
import './ContentRefund.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const ContentRefund = () => {
  return (
    <div>
    <section className='ContentRefund'>
       <div className='container text-start'>
           <div className='row mb-3'>
               <div className='col-12'>
                <h2>At Creative Squad, we ensure 100% customer satisfaction. In case of any dissatisfaction or disappointment faced by our customers, we offer a complete refund on certain terms and conditions. Our policy has been devised to define under which conditions we will be offering a refund. By registering for any of Creative Squad services you are declaring that you accept and agree with all the terms and conditions outlined in the refund policy</h2>
               </div>
           </div>

           <div className='row'>
               <div className='col-12'>
                <h1 className='mb-3'>ELIGIBILITY FOR REFUND</h1>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> Frequent unmet deadlines from our production team"s end.</p>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> Miscommunication by key account managers or salespeople</p>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> Lack of performance by the team.</p>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> The project is not being initiated by the team</p>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> Other work-related delays</p>
               </div>
           </div>

           <div className='row'>
               <div className='col-12'>
                <h1 className='mb-3'>REFUND WILL NOT BE PROVIDED IN CASE OF</h1>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> Customer’s change of heart.</p>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> Delay from customer’s end</p>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> The project is completed and uploaded on the server.</p>
                <p><FontAwesomeIcon icon={faChevronRight} className='fa-x' /> Asking for more than what's committed on the agreement.</p>
               </div>
           </div>

           <div className='row'>
               <div className='col-12'>
                <h1 className='mb-3'>PROCESSING OF REFUNDS</h1>
                <h2 className='mb-2'>All refunds will be processed and reflect in your bank account within 14-22 business days of the date of cancellation and will be brought about using the method of payment agreed upon by the client at the beginning of the project.</h2>
                <h2><span>Note:</span>Creative Squad may at any time, without prior notice under its sole discretion, amend this refund policy. You are therefore requested to review this policy periodically. In any case of unmet deadlines and lack of performance, the customer is eligible for 100% refund once our Quality Assurance team has reviewed the case.</h2>
               </div>
           </div>
       </div>
    </section>
    </div>
  )
}

export default ContentRefund