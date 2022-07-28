import React from 'react'; 
import PackagesALL from '../../Components/Package BOXES/All Packages/PackagesALL'; 
import PackageHERO from './PackageHERO';
import Results from '../../Components/Providing Results/Results';
import Marketing from '../../Components/Marketing Process/Marketing'
import Trustpilot from '../../Components/Client Reviews/Trustpilot';
import Contactform from '../../Components/Contact Form/Contactform';

const Packages = () => {
  return (
    <div>

    <PackageHERO Title= 'Packages' />
    <Results />
    <PackagesALL />
    <Marketing />
    <Trustpilot />
    <Contactform />
     

    </div>
  )
}

export default Packages;

