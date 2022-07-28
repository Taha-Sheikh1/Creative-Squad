import React from 'react';
import './Transactions.css';




const Transactions = () => {
  return (

    <div>
    <section id="Transactions">
            <div className="container px-md-0">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 text-center">
                        <span>
                        <img src={require('./Projects-Delivered.png')} alt='Project Delivered' />
                        </span>
                        <h4 className='mt-3 Numbers'><strong>3,000 +</strong></h4>
                        <p className="text">Projects Delivered</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 text-center">
                        <span>
                        <img src={require('./Qualified-leads-generated.png')} alt='Leads Generated' />
                        </span>
                        <h4 className='mt-3 Numbers'><strong>5,468 +</strong></h4>
                        <p className="text">Qualified Leads Generated</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0 text-center">
                        <span>
                        <img src={require('./Calls-Generated.png')} alt='Calls Generated' />
                        </span>
                        <h4 className='mt-3 Numbers'><strong>26,659 +</strong></h4>
                        <p className="text">
                        Calls Generated
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <span>
                        <img src={require('./eCommerce-Transactions.png')} alt='eCommerce Transactions' />
                        </span>
                        <h4 className='mt-3 Numbers'><strong>30,000 +</strong></h4>
                        <p className="text">eCommerce Transactions</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

  )
}

export default Transactions;

