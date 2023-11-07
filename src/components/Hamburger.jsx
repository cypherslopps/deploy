import React from 'react';
import { cn } from '../lib/utils';
import HamburgerIcon from "../assets/images/hamburger.png";
import { useOffscreen } from '../providers';

const Hamburger = ({ className }) => {
  const { toggleOffscreen, setType } = useOffscreen();

  const openNavigationOffset = () => {
    // Set offscreen type
    setType("offset");

    // Open Offscreen
    toggleOffscreen();
  }

  return (
    <div 
      className={cn("cursor-pointer select-none", className)}
      onClick={openNavigationOffset }
    >
      <img 
        src={HamburgerIcon}
        alt="hamburger"
        className='h-5 sm:h-[1.3rem] md-lg:h-[1.4rem]'
      />
    </div>
  )
}

export default Hamburger