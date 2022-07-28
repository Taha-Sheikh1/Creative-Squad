import React from 'react';
import WebHERO from './WebHERO';
import Slider from '../../Components/Slider/Slider'; 
import WEBSliderImage1 from './laravel.png';
import WEBSliderImage2 from './divi.png';
import WEBSliderImage3 from './magento.jpg';
import WEBSliderImage4 from './shopify.png';
import WEBSliderImage5 from './wordpress.png';
import RightContent from '../../Components/Image By Content Section/RightContent';
import LeftContent from '../../Components/Image By Content Section/LeftContent';
import WEBContentImage1 from './We-Build-Masterpieces.png';
import WEBContentImage2 from './Landing-Page-Design-Development.png';
import WEBContentImage3 from './CMS-Website-Design-Development.png';
import WEBContentImage4 from './Custom-Website-Designs.png';
import WEBContentImage5 from './E-Commerce-Development.png';
import PackageBOX from '../../Components/Package BOXES/Main Package Box/PackageBOX';
import RecentPortfolio from '../../Components/Recent Portfolio/RecentPortfolio';
import WebPortfolioImage1 from './business.jpg';
import WebPortfolioImage2 from './roadMap.jpg';
import WebPortfolioImage3 from './business.jpg';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';



const WebsiteDevelopment = () => {
  return (
    <div>
    <WebHERO Title='Website Development Services' />


    <Slider
    Slider1={WEBSliderImage1}
    Slider2={WEBSliderImage2}
    Slider3={WEBSliderImage3}
    Slider4={WEBSliderImage4}
    Slider5={WEBSliderImage5}
     />


     <RightContent
     Title='We Build Masterpieces' 
     Paragraph='Our squad builds intricate but easy to navigate masterpiece websites on platforms such as WordPress and Shopify depending on your needs. Hire us to have a user-friendly website for your brand.'
     ImgURL={WEBContentImage1}
     CTA='Lets Connect'
     TitleColor='#000000'
     CTAColor='#000000'
     CTABorderColor='#000000'
     />

    <LeftContent
     Title='Landing Page Design & Development' 
     Paragraph='We"ll create enticing landing pages for your target audience and website visitors. This will encourage them to convert from leads into subscribers or customers and your business will grow.'
     ImgURL={WEBContentImage2}
     CTA='Chat Now'
     TitleColor='#FF0000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />

    <RightContent
     Title='CMS Website Design & Development' 
     Paragraph='We can build a website that allows you to manage your content, letting multiple contributors create, edit and publish posts. Your content will be securely stored in a database and displayed in a presentation layer based on a set of templates like a website.'
     ImgURL={WEBContentImage3}
     CTA='Lets Connect'
     TitleColor='#000000'
     CTAColor='#000000'
     CTABorderColor='#000000'
     />

    <LeftContent
     Title='Custom Website Designs' 
     Paragraph='Our designs are tailor-made for your brand, specially created for your target audience to give you an extra edge from your rivals. Website layouts, fonts, and colors will be developed to enhance your online brand.'
     ImgURL={WEBContentImage4}
     CTA='Chat Now'
     TitleColor='#FF0000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />

    <RightContent
     Title='E-Commerce Development' 
     Paragraph='We build eCommerce websites on Shopify and Magento and give you access to hundreds of unique features such as targeted merchandising, segmentation, gift registries, and more.'
     ImgURL={WEBContentImage5}
     CTA='Lets Connect'
     TitleColor='#000000'
     CTAColor='#000000'
     CTABorderColor='#000000'
     />
     <PackageBOX
     Title='Website Development Pricing Plans'
     LiName='WEB DEV DUMMY CONTENT!!!!!'
      />

      {/* <RecentPortfolio
      ImgURL1={WebPortfolioImage1}
      ImgURL2={WebPortfolioImage2}
      ImgURL3={WebPortfolioImage3}
      ImgURL4={WebPortfolioImage1}
      ImgURL5={WebPortfolioImage2}
      ImgURL6={WebPortfolioImage3}
       /> */}

      <Trustpilot />
      <Contactform /> 




    </div>
  )
}

export default WebsiteDevelopment;




