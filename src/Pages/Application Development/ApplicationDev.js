import React from 'react'; 
import RightContent from '../../Components/Image By Content Section/RightContent';
import LeftContent from '../../Components/Image By Content Section/LeftContent'
import AppHERO from './AppHERO';
import AppContentImage1 from './We-Build-Fascinating-Apps.png'
import AppContentImage2 from './SPA-Designs-Development.png'
import AppContentImage3 from './We-Sell-Profitable-Business-Niche.png'
import AppContentImage4 from './We-Create-Custom-Mobile-Applications.png'
import AppContentImage5 from './E-Commerce-Mobile-App-For-Your-Brand-e1651190211253.png'
import Slider from '../../Components/Slider/Slider';
import SliderImageApp1 from './xamarin.png';
import SliderImageApp2 from './flutter.png';
import SliderImageApp3 from './java.png';
import SliderImageApp4 from './React.png';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';



const ApplicationDev = () => {
  return (
    <div>
     <AppHERO Title='Application Development Services' />

     <RightContent
     Title='We Build Businesses' 
     Paragraph='We build applications that can run on mobile devices, such as a smartphone or tablet computers. Offering clean user interfaces and fast refresh rates, our applications are fascinating and also easy to navigate.'
     ImgURL={AppContentImage1}
     CTA='Lets Connect'
     TitleColor='#FF0000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />

<LeftContent
     Title='SPA Designs & Development' 
     Paragraph='We also offer the development of an SPA, which is a single-page application. You only need to upload a single web document, and its body content will automatically be updated via JavaScript APIs such as XMLHttpRequest and Fetch.'
     ImgURL={AppContentImage2}
     CTA='Call Now'
     TitleColor='#000000'
     CTAColor='#000000'
     CTABorderColor='#000000'
     />

<RightContent
     Title='We Sell Profitable Business Niche' 
     Paragraph='Whatever your business niche may be, we"ll make it profitable. Depending on your category, your application will be made according to industry standards with updated features.'
     ImgURL={AppContentImage3}
     CTA='Lets Connect'
     TitleColor='#FF0000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />

<Slider
    Slider1={SliderImageApp1}
    Slider2={SliderImageApp2}
    Slider3={SliderImageApp3}
    Slider4={SliderImageApp4}
    Slider5={SliderImageApp2}
 />

<LeftContent
     Title='We Create Custom Mobile Applications' 
     Paragraph='We also design and engineer custom mobile applications to provide a highly-tailored experience to users. Custom Squad incorporates specific functionality to meet the unique needs of businesses and their internal or external customers.'
     ImgURL={AppContentImage4}
     CTA='Call Now'
     TitleColor='#000000'
     CTAColor='#000000'
     CTABorderColor='#000000'
     />

<RightContent
     Title='eCommerce Mobile App For Your Brand' 
     Paragraph='We can build an mCommerce mobile app for your brand to facilitate online transactions of your products and allow you to transfer information and funds over the Internet seamlessly and securely.'
     ImgURL={AppContentImage5}
     CTA='Lets Connect'
     TitleColor='#FF0000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />
     <Trustpilot />
     <Contactform />

     
    </div>
  )
}

export default ApplicationDev;

