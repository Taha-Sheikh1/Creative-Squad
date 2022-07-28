import React from 'react';
import LeftContent from '../../Components/Image By Content Section/LeftContent';
import RightContent from '../../Components/Image By Content Section/RightContent';
import ImageContent1 from '../../assets/Social Media/SEO Image.jpg';
import ImageContent2 from './seo.jpg';
import ImageContent3 from './Professional-SEO-Leads-to-the-Increment-of-Your-Brands-Growth.png';
import Marketing from '../../Components/Marketing Process/Marketing';
import PackageBOX from '../../Components/Package BOXES/Main Package Box/PackageBOX';
import SearchEngineOptHERO from './SearchEngineOptHERO';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';



const SearchEngineOptimization = () => {
  return (
    <div>
    <SearchEngineOptHERO Title='Search Engine Optimization Services' />
    <LeftContent 
    Title='Grow Your Website Traffic'
    ImgURL={ImageContent1}
    Paragraph='Premium Search Engine Optimization Services to Get You in Google"s Good Books'
    CTA='Call Now'
    TitleColor='#f40000'
    CTAColor='#f40000'
    CTABorderColor='#f40000'
     />

  <RightContent 
    Title='Grow Your Website Traffic'
    ImgURL={ImageContent2}
    Paragraph='We will use the ROI SEO formulas to produce organic website traffic, search engine rankings, and complete the targets you set. Our strategies will keep your budgets and your consumers happy.'
    CTA='Chat Now'
    TitleColor='#000000'
    CTAColor='#000000'
    CTABorderColor='#000000'
     />

  <LeftContent 
    Title='Professional SEO Leads'
    ImgURL={ImageContent3}
    Paragraph='We provide on-page SEO, off-page SEO, and technical SEO, all of which contribute to a well rounded strategy to organize and execute your optimization plans.'
    CTA='Get Started'
    TitleColor='#f40000'
    CTAColor='#f40000'
    CTABorderColor='#f40000'
     />
    <Marketing />
    <PackageBOX 
    Title='Search Engine Optimization Pricing Plans'
    LiName='SEO PACKAGE DUMMY LIST ITEMS!!!'
     />
     <Trustpilot />
     <Contactform />

    </div>
  )
}

export default SearchEngineOptimization;



