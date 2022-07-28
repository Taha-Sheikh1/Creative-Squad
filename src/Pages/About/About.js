import React from 'react'
import MeetSquad from '../../Components/Meet The Squad/MeetSquad';
import Pride from '../../Components/Pride Ourseleves/Pride';
import Transactions from '../../Components/Transactions Section/Transactions';
import AboutHero from './AboutHero'; 
import Slider from '../../Components/Slider/Slider';
import SliderImage1 from './1.png';
import SliderImage2 from './2.png';
import SliderImage3 from './3.png';
import SliderImage4 from './4.png';
import SliderImage5 from './5.png';
import LeftContent from '../../Components/Image By Content Section/LeftContent'
import Creativity from './Providing-Creativity-To-Our-image.png';
import CreativityImage1 from './re.png';
import CreativityImage2 from './cloud.png';
import CreativityImage3 from './metspace.png';
import CreativityImage4 from './MRPW.png';
import CreativityImage5 from './oto.png';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';



const About = () => {

  return (
    <div>
     <AboutHero Title='About Us' />
     <MeetSquad />
     <Slider
      Title='Our Affiliations' 
      Slider1={SliderImage1}
      Slider2={SliderImage2}
      Slider3={SliderImage3}
      Slider4={SliderImage4}
      Slider5={SliderImage5} />
     <Pride />
     <Transactions />
     <LeftContent
     Title='Providing Creativity To Our Customers' 
     Paragraph='Want your business to wow people? We can help! Break away from the norm with our fresh and new ideas and boost your brand.'
     ImgURL={Creativity}
     CTA='Chat Now'
     TitleColor='#000000'
     CTAColor='#FF0000'
     CTABorderColor='#FF0000'
     />
     <Slider
      Title='Some Brands We Work With' 
      Slider1={CreativityImage1}
      Slider2={CreativityImage2}
      Slider3={CreativityImage3}
      Slider4={CreativityImage4}
      Slider5={CreativityImage5} />
      <Trustpilot />
      <Contactform />
     
    </div>
  )

}

export default About;

 