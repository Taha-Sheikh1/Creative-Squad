import React from 'react';
import SearchEngineMarketingHERO from './SearchEngineMarketingHERO';
import RightContent from '../../Components/Image By Content Section/RightContent';
import LeftContent from '../../Components/Image By Content Section/LeftContent';
import ContentImageSEM1 from './Search-Engine-Marketing-e1651098447826.png' ;
import ContentImageSEM3 from './Paid-Google-Ads.png';
import ContentImageSEM2 from './Search-Engine-Results.png';
import SEMPack from '../../Components/Package BOXES/Search Engine Package/SEMPack'
import RecentPortfolio from '../../Components/Recent Portfolio/RecentPortfolio';
import SEMImage1 from './competitive.jpg';
import SEMImage2 from './roadMap.jpg';
import SEMImage3 from './business.jpg';
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';


const SearchEngineMarketing = () => {
  return (
    <div>
    <SearchEngineMarketingHERO Title='Search Engine Marketing Services' />
    <RightContent
    Title= 'Search Engine Marketing'
    Paragraph= 'At Creative Squad, we make use of search engine marketing (paid search/pay per click) to increase the visibility of your website in search engine results pages.'
    CTA= 'Lets Connect'
    ImgURL={ContentImageSEM1}
    TitleColor= '#000000'
    CTAColor= '#000000'
    CTABorderColor= '#000000'
     />
    <LeftContent
    Title= 'Search Engine Results Pages'
    Paragraph= 'We make you lead the Search Engine Results Page (SERP). SERPs tend to include organic search results, paid Google Ads results, Featured Snippets, Knowledge Graphs and video results, any of which could be your brand.'
    CTA= 'Lets Connect'
    ImgURL={ContentImageSEM2}
    TitleColor= '#FF0000'
    CTAColor= '#FF0000'
    CTABorderColor= '#FF0000'
     />
    <RightContent
    Title= 'Paid Google Ads'
    Paragraph= 'We offer paid Google ads through Google AdWords for online advertisements for your brand. We tailor the ads based on the keywords you want to target and get you ranked at the top of the search results page.'
    CTA= 'Call Now'
    ImgURL={ContentImageSEM3}
    TitleColor= '#000000'
    CTAColor= '#000000'
    CTABorderColor= '#000000'
     />
     <SEMPack Title='Search Engine Marketing Pricing Plans' />
     {/* <RecentPortfolio
     ImgURL1={SEMImage1}
     ImgURL2={SEMImage2}
     ImgURL3={SEMImage1}
     ImgURL4={SEMImage3}
     ImgURL5={SEMImage1}
     ImgURL6={SEMImage2}
      /> */}
      <Trustpilot />
      <Contactform />

    </div>
  )
}

export default SearchEngineMarketing;



