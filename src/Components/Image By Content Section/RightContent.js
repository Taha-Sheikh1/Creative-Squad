import React from 'react';
import './Content.css';

const RightContent = ({Title, Paragraph, CTA, ImgURL, TitleColor, CTAColor, CTABorderColor}) => {
  return (
    <div>

    <section>
            <div className='container px-5'>
                <div className='row gx-5 align-items-center justify-content-center justify-content-lg-between'>   
                    <div className='col-sm-8 col-md-6'>
                        <div className='px-5 px-sm-0'><img className='img-fluid ContentImage' src={ImgURL} alt={Title} /></div>
                    </div>
                    <div className='col-12-text-center col-lg-5 ms-3'>
                        <h2 className='ContentTitle mb-2' style={{color: TitleColor}}>{Title}</h2>
                        <p className='mb-2 mb-lg-0 ContentParagraph'>{Paragraph}</p>
                        <div className='mt-4'>
                        <a href='tel: +1-905-598-8414' className='CTA mt-4' style={{backgroundColor: CTAColor, borderColor: CTABorderColor}}>{CTA}</a>
                        </div>
                    </div>  
                </div>
            </div>
        </section>

    </div>
  );
};

export default RightContent;