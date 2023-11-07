import React from 'react'
import IStoreCareFullLogo from "../assets/svg/istore_care_full.svg";

const LaboratoryNavigation = () => {
  return (
    <nav className='direction-rtl bg-white/70 backdrop-blur-[20px] backdrop-saturate-[1.8] transition-all duration-75'>
      <div className='wrapper flex items-center px-6 py-4'>
        {/* App Logo */}
        <img 
          src={IStoreCareFullLogo}
          alt="istore"
          className="h-5"
        />
      </div>
    </nav>
  )
}

export default LaboratoryNavigation