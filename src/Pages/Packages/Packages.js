import React from 'react'; 
import PackagesALL from '../../Components/Package BOXES/All Packages/PackagesALL'; 
import PackageHERO from './PackageHERO';
import Results from '../../Components/Providing Results/Results';
import Marketing from '../../Components/Marketing Process/Marketing'

const Packages = () => {
  return (
    <div>

    <PackageHERO Title= 'Packages' />
    <Results />
    <PackagesALL />
    <Marketing />
     

    </div>
  )
}

export default Packages;

