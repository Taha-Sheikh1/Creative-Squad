import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div>
    <section id='Get-in-touch'>
        <div className='container'>
            <div className='row'>
                <div className='text-center'>
                    <h1>Get in touch with us</h1>
                    <h4>We use Social Media Marketing to deliver effective marketing solutions to you.</h4>
                    <div className='Btns'>
                        {/* <button className='Tel' href='tel: +1-905-598-8414'>+1-905-598-8414</button> */}
                        <a href='tel: +1-905-598-8414' className='Tel'>+1-905-598-8414</a>
                        <button className='Talk'>Talk To Us</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default GetInTouch