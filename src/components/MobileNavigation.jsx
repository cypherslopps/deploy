import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { companyPhoneLine, whatsappLink } from '../lib/constants';
import useScroll from '../hooks/useScroll';
import AppLogo from './AppLogo';
import CartIcon from './CartIcon';
import AARImage from "../assets/svg/aar.svg";
import IStoreLogo from "../assets/svg/logo.svg";
import WhatsappLogo from "../assets/images/social/whatsapp.png";
import PhoneCircleLogo from "../assets/svg/phone-circle.svg";
import SearchBoxButton from './SearchBoxButton';
import Hamburger from './Hamburger';

const MobileNavigation = () => {
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
    const { navigationIsSticky } = useScroll();
    
    return (
        <nav className={`${navigationIsSticky ? "fixed top-0 left-0" : ""} flex xl:hidden w-full z-50`}>
            <div className="w-full bg-white shadow-mobileNav flex justify-center transition-all duration-1000">
                <div className='wrapper px-2 md:px-3 py-1 lg:p-2 flex items-center justify-between'>
                    {/* Socials */}
                    <div className='hidden sm:flex sm:items-center sm:gap-x-2.5 md:gap-x-3.5'>
                        {/* Cart Items Count */}
                        <CartIcon />

                        {/* Search Button */}
                        <SearchBoxButton openSearchBox={setIsSearchBoxOpen} />

                        {/* Whatsapp contact */}
                        <Link 
                            to={`${whatsappLink}`}
                            title="Contact Us On WhatsApp"
                            target='_blank'
                            className='select-none'
                        >
                            <img 
                                src={WhatsappLogo}
                                alt="Contact us on WhatsApp"
                                loading='lazy'
                                className='h-[1.65rem] md-lg:h-7'
                            />
                        </Link>

                        {/* Company Phone Line */}
                        <Link 
                            to={`${companyPhoneLine}`}
                            className='select-none inline-block md:hidden'
                        >
                            <img 
                                src={PhoneCircleLogo}
                                alt="Company Phone Line"
                                loading='lazy'
                                className='h-[1.4rem]'
                            />
                        </Link>
                    </div>

                    <AppLogo 
                        src={IStoreLogo}
                        href="/"
                        className= "max-w-[5.2em] xs:max-w-[5.5em] md:max-w-[6em]"
                    />

                    {/* Actions */}
                    <div className='flex items-center p-2'>
                        <figure className='pr-2 sm:pr-4 py-0.5 w-20 md:w-24 md-lg:py-0 md-lg:w-[6.7rem] border-r border-app-border'>
                            <img 
                                src={AARImage}
                                alt="apple Authorized Reseller"
                                loading='lazy'
                                className='h-full w-full'
                            />
                        </figure>
                            
                        {/* Hamburger */}
                        <Hamburger className="pl-2 sm:pl-4" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavigation