import React from 'react';
import './PackageBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const PackageBox = ({PackageName}) => {
  return (

    <div>
    <section id="pricing" class="pricing">
      <div className="container-fluid" data-aos="fade-up">

        <div className="section-title">
          <h2>{PackageName}</h2>
        </div>

        <div className="row text-center">

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="Packagebox">
              <h3>Bronze</h3>
              <h4><sup>$</sup>324.99</h4>
              <ul className='content'>

                <li><FontAwesomeIcon icon={faCheck} /> Quam adipiscing vitae proin</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nec feugiat nisl pretium</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="tel: +1-905-598-8414" className="buy-btn">Call For Pricing</a>
            </div>
          </div>


          <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="Packagebox">
              <h3>Silver</h3>
              <h4><sup>$</sup>749.99</h4>
              <ul className='content'>
                <li><FontAwesomeIcon icon={faCheck} /> Quam adipiscing vitae proin</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nec feugiat nisl pretium</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="tel: +1-905-598-8414" className="buy-btn">Call For Pricing</a>
            </div>
          </div>

          <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="Packagebox">
              <h3>Gold</h3>
              <h4><sup>$</sup>1,199.99</h4>
              <ul className='content'>
                <li><FontAwesomeIcon icon={faCheck} /> Quam adipiscing vitae proin</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nec feugiat nisl pretium</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
                <li><FontAwesomeIcon icon={faCheck} /> Nulla at volutpat diam uteera</li>
                <li><FontAwesomeIcon icon={faCheck} /> Pharetra massa massa ultricies</li>
                <li><FontAwesomeIcon icon={faCheck} /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="tel: +1-905-598-8414" className="buy-btn">Call For Pricing</a>
            </div>
          </div>

          <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div className="Packagebox featured">
              <h3 className='mb-5'>Looking For A Customized Plan? We Got You!</h3>
               
              <form id="CustomizedForm">
                             
                            <div className="form-floating mb-0">
                                <input id="name" type="text" placeholder='Full Name' />
                            </div>
                            
                            <div className="form-floating mb-0">
                                <input id="email" type="email" placeholder="Email Address" />
                            </div>
                           
                            <div className="form-floating mb-0">
                                <input id="phone" type="tel" placeholder="Phone No." /> 
                            </div>
                             
                            <div className="form-floating mb-0">
                                <textarea id="Customizedmessage" type="text" placeholder="Message"></textarea>                               
                            </div>                                         

                             
                      </form>

              <a href="tel: +1-905-598-8414" className="buy-btn">Customized Plan</a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>

  )
}



export default PackageBox;