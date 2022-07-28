import React from 'react';
import FILT from '../../Components/FILT Marketing/FILT';
import LeftContent from '../../Components/Image By Content Section/LeftContent';
import RightContent from '../../Components/Image By Content Section/RightContent';
import Image1 from './Maximize-Your-Reach.webp';
import Image2 from './Content-Creation.webp';
import Image3 from './Influencer-Marketing.webp';
import Image4 from './Lead-Generation.webp';
import Image5 from './Paid-Advertisement.webp';
import Image6 from './Social-Media-Management.webp';
import SocialMediaHero from './SocialMediaHero';
import Slider from '../../Components/Slider/Slider';
import SliderImg1 from './facebook-icon.webp';
import SliderImg2 from './insta.jpg';
import SliderImg3 from './linkedin-logo.webp';
import SliderImg4 from './twitter.webp';
import RecentPortfolio from '../../Components/Recent Portfolio/RecentPortfolio';
import PackageBOX from '../../Components/Package BOXES/Main Package Box/PackageBOX';
import PortfolioImage1 from './ssss-2.jpg';
import PortfolioImage2 from './ssss-2.jpg';
import PortfolioImage3 from './um-1.jpg';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';






const SocialMediaMarketing = () => {
  return (
    <div>

    <SocialMediaHero Title='Social Media Marketing Services' />
    <Slider
    Slider1={SliderImg1}
    Slider2={SliderImg4}
    Slider3={SliderImg3}
    Slider4={SliderImg2}
    Slider5={SliderImg3}
     />
    <RightContent 
    Title='Maximize Your Reach'
    ImgURL={Image1}
    Paragraph='Creative Squad realizes the value of influential social media marketing. That’s why we help you create, optimize, and market content across all social media platforms.' 
    CTA='Lets Connect'
    TitleColor='#000000'
    CTAColor='#000000' 
    CTABorderColor='#000000'
    />
    <LeftContent
    Title='Social Media Management'
    ImgURL={Image6}
    Paragraph='We offer paid advertisements to your brand with guaranteed ROI in the form of sales. Paid advertisements are a great way to boost your revenue.'
    CTA='Lets Connect'
    TitleColor='#f40000'
    CTAColor='#f40000'
    CTABorderColor='#f40000'
     />
     <RightContent 
    Title='Paid Advertisement'
    ImgURL={Image5}
    Paragraph='Paid advertising is an online advertising model where advertisers bid to participate in real-time auctions in order to show their ads within slots on a specific platform or network. For example, in this search on patio furniture you can see both shopping ads and text ads.' 
    CTA='Call Now'
    TitleColor='#000000'
    CTAColor='#000000' 
    CTABorderColor='#000000'
    />
    <LeftContent
    Title='Content Creation'
    ImgURL={Image2}
    Paragraph='We provide content creation services by formalizing your strategy (keyword or otherwise), and then producing it. Creating great content is no big deal for Creative Squad.'
    CTA='Call Now'
    TitleColor='#f40000'
    CTAColor='#f40000'
    CTABorderColor='#f40000'
     />
      <RightContent 
    Title='Influencer Marketing'
    ImgURL={Image3}
    Paragraph='We employ leading and niche content creators to improve brand awareness, increase traffic, and drive your brand"s message to your target audience. These content creators market to your ideal audience across different channels which allows you to expand your reach across your buyer personas.' 
    CTA='Call Now'
    TitleColor='#000000'
    CTAColor='#000000' 
    CTABorderColor='#000000'
    />
     <LeftContent
    Title='Lead Generation'
    ImgURL={Image4}
    Paragraph='We utilize lead generation to gain the interest of potential customers to increase future sales of your product. We keep track of anyone who has shown interest in your products or services, so that we can make them a customer when the time comes.'
    CTA='Call Now'
    TitleColor='#f40000'
    CTAColor='#f40000'
    CTABorderColor='#f40000'
     />
    <FILT />
    <PackageBOX
    Title='Social Media Marketing Pricing Plans'
    LiName='SMM DUMMY CONTENT!' />
    {/* <RecentPortfolio
     ImgURL1={PortfolioImage1}
     ImgURL2={PortfolioImage2}
     ImgURL3={PortfolioImage3}
     ImgURL4={PortfolioImage2}
     ImgURL5={PortfolioImage1}
     ImgURL6={PortfolioImage3}
     /> */}
     <Trustpilot />
     <Contactform />

    </div>
  )
}

export default SocialMediaMarketing;


