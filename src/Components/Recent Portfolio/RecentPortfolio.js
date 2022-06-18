import React from 'react';
import './RecentPortfolio.css';


const RecentPortfolio = ({ImgURL1, ImgURL2, ImgURL3, ImgURL4, ImgURL5, ImgURL6}) => {
  return (
    <div>

  <section className='RecentPortfolio'>


  <div className='pt-5'>

  <div className='container px-5 px-lg-5'>

  <h2 className='text-center'>Recent Portfolio</h2>


  <div className='row g-2'>

  <div className='col-lg-4'>
     <div className='p-1'>
     <img src={ImgURL1} className='img-fluid' alt='Business' />
     </div>
     <div className='p-1'>
     <img src={ImgURL2} className='img-fluid' alt='Competitve' />
     </div>
      
  </div>

  <div className='col-lg-4'>
     <div className='p-1'>
     <img src={ImgURL3} className='img-fluid' alt='Business' />
      
     </div>
     <div className='p-1'>
     <img src={ImgURL4} className='img-fluid' alt='Competitve' />
     </div>
      
  </div>

  <div className='col-lg-4'>
     <div className='p-1'>
     <img src={ImgURL5} className='img-fluid' alt='Business' />
      
     </div>
     <div className='p-1'>
     <img src={ImgURL6} className='img-fluid' alt='Competitve' />
     </div>
      
  </div>


  </div>


  </div>

  </div>


   
   

 
  </section>
 
 

  
    </div>
  )
}

export default RecentPortfolio;