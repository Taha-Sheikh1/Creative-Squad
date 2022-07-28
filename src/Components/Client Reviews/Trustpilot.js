import React from 'react'
import './Trustpilot.css'
const Trustpilot = () => {

    // const fetchTrustPilotReviews = async () => {
    //     const request = await fetch('URL HERE', {
    //         method: 'GET',
    //         dataType: 'json',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         }
    //     })
    //     const response = await request.json();
    // }


  return (
    <div>
    <section id='client_reviews'>
        <div className='container pt-0 pb-0'>
          <h1 className='text-center Review'>Our Recent Client Reviews</h1>
          {/* <h2>Integrate the reviews here</h2> */}
        </div>
    </section>
    </div>
  )
}

export default Trustpilot