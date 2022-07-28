import React from 'react';
import ECOMHero from './ECOMHero';
import RightContent from '../../Components/Image By Content Section/RightContent';
import LeftContent from '../../Components/Image By Content Section/LeftContent';
import ECOMContentImage1 from './We-Build-Businesses.png';
import ECOMContentImage2 from './E-commerce-Pages-Development.png';
import ECOMContentImage3 from './Database-Development-With-PhP-MySQL.png';
import ECOMContentImage4 from './Custom-E-commerce-Website.png';
import Slider from '../../Components/Slider/Slider';
import ECOMSliderImage1 from './mern.png';
import ECOMSliderImage2 from './divi.png';
import ECOMSliderImage3 from './shopify.png';
import ECOMSliderImage4 from './laravel.png';
import ECOMSliderImage5 from './wordpress.png';
import PackageBOX from '../../Components/Package BOXES/Main Package Box/PackageBOX';
import RecentPortfolio from '../../Components/Recent Portfolio/RecentPortfolio';
import ECOMPortfolioImage1 from './business.jpg';
import ECOMPortfolioImage2 from './competitive.jpg';
import ECOMPortfolioImage3 from './roadMap.jpg';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';

const EcommerceDev = () => {
  return (
    <div>
      <ECOMHero Title='E-commerce Development Services' />
      <RightContent
     Title='We Build Businesses' 
     Paragraph='The team at Creative Squad is well versed at building businesses. We can set up an ecommerce business for you from start to finish with a user-friendly interface, and unique features to boost your brand.'
     ImgURL={ECOMContentImage1}
     CTA='Lets Connect'
     TitleColor='#FF0000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />
     <LeftContent
     Title='E-commerce Development' 
     Paragraph='We structure your online retail business so it works smoothly on both your end and your customers’ end. We also ensure proper marketing and customer communication, keeping in line with your brand image.'
     ImgURL={ECOMContentImage2}
     CTA='Chat Now'
     TitleColor='#000000'
     CTAColor='#000000'
     CTABorderColor='#000000'
     />
     <Slider
     Slider1={ECOMSliderImage1}
     Slider2={ECOMSliderImage2}
     Slider3={ECOMSliderImage3}
     Slider4={ECOMSliderImage4}
     Slider5={ECOMSliderImage5}
      />

<RightContent
     Title='Database Development With PhP/MySQL' 
     Paragraph='We use PhP and MySQL to develop the database that organizes your data, ensuring utmost perfection and security. This allows you to organize your order transactions and other ecommerce data according to the parameters you define yourself.'
     ImgURL={ECOMContentImage3}
     CTA='Lets Connect'
     TitleColor='#FF0000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />

<LeftContent
     Title='Custom E-commerce Website' 
     Paragraph='Custom Squad also offers custom ecommerce development by designing an ecommerce solution uniquely and specifically for your business. We follow a thorough analysis of your business requirements.'
     ImgURL={ECOMContentImage4}
     CTA='Chat Now'
     TitleColor='#000000'
     CTAColor='#000000'
     CTABorderColor='#000000'
     />

     <PackageBOX Title='eCommerce Development Pricing Plans' LiName='ECOM DUMMY CONTENT!!!' />

    {/* <RecentPortfolio
    ImgURL1={ECOMPortfolioImage1}
    ImgURL2={ECOMPortfolioImage2}
    ImgURL3={ECOMPortfolioImage1}
    ImgURL4={ECOMPortfolioImage3}
    ImgURL5={ECOMPortfolioImage1}
    ImgURL6={ECOMPortfolioImage2}
     /> */}
     <Trustpilot />
     <Contactform />
   

    </div>
  )
}

export default EcommerceDev;


