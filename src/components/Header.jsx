import React, { useEffect, useState } from 'react';
import Navigation from "./Navigation";
import UserFormIcon from './UserFormIcon';
import AppLogo from './AppLogo';
import IStoreLogo from "../assets/svg/logo.svg";
import AARImage from "../assets/svg/aar.svg";
import MobileNavigation from './MobileNavigation';
import LaboratoryNavigation from './LaboratoryNavigation';
import usePath from '../hooks/usePath';

const Header = () => {
  const [navigationIsSticky, setNavigationIsSticky] = useState(false);
  const { activePath } = usePath("laboratory");

  useEffect(() => {
    window.addEventListener("scroll", stickyNavigation);

    return () => window.removeEventListener("scroll", stickyNavigation);
  }, []);

  function stickyNavigation() {
    if(window.scrollY >= 72)
      setNavigationIsSticky(true);
    else  
      setNavigationIsSticky(false);
  }

  return (
    <>
      <header className='bg-white hidden xl:block'>
        {/* Company Description Navigation */}
        <nav className='wrapper flex items-center justify-between py-[.2rem] px-1.5'>
          {/* Logo */}
          <AppLogo 
            src={IStoreLogo}
            href="/"
            className="max-w-[8em]"
          />

          {/* Actions */} 
          <div className='flex items-center p-2 divide-x divide-app-border'>
            <figure className='pr-4 w-[6.4rem]'>
              <img 
                src={AARImage}
                alt="apple Authorized Reseller"
                loading='lazy'
                className='h-full w-full'
              />
            </figure>

            {/* User Auth Form Button */}
            <UserFormIcon className="pl-4" />
          </div>
        </nav>
        
        {/* Sticky Navigation Container */}
        <div className={`w-full z-50 border-y border-app-border divide-y divide-app-border flex flex-col transition-all duration-1000 ${navigationIsSticky ? "fixed top-0 left-0" : ""}`}>
          {/* Link Navigation */}
          <div className="w-full bg-white">
            <Navigation />
          </div>

          {/* Laboratory Navigation */}
          {activePath === "/מעבדה" && (
            <LaboratoryNavigation />
          )}
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </>
  )
}

export default Header