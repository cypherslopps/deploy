import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks, whatsappLink, companyPhoneLine } from '../lib/constants';
import Portals from './Portals';
import SearchBox from "./SearchBox";
import CartIcon from './CartIcon';
import WhatsappLogo from "../assets/images/social/whatsapp.png";
import PhoneCircleLogo from "../assets/svg/phone-circle.svg";
import UserFormIcon from './UserFormIcon';
import NavigationLink from './NavigationLink';


const Offset = ({ type, closeOffset }) => {
  return (
    <Portals elementID="offset-root">
        <div className="grid grid-rows-[max-content_1fr] border-t border-app-border-dark fixed top-[3.26rem] md:top-[3.6rem] md-lg:top-16 left-0 bg-white w-full h-full z-[70] pb-4 xl:hidden">
            {/* Header */}
            <header>
                {/* Search Box */}
                <SearchBox />

                {/* Action */}
                <div className='flex items-center justify-between border-y border-app-border-dark md:justify-end py-1.5 md:py-0'>
                    {/* Socials */}
                    <div className='flex items-center gap-x-2.5 md:gap-x-3.5 md:hidden pl-3'>
                        {/* Cart Items Count */}
                        <CartIcon />

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
                                className='h-[1.35rem] xs:h-6 sm:h-[1.65rem] md-lg:h-7'
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
                                className='h-[1.15rem] xs:h-5 sm:h-[1.4rem]'
                            />
                        </Link>
                    </div>

                    {/* User Form Icon */}
                    <UserFormIcon info="התחברות לאיזור האישי" />
                </div>
            </header>       

            {/* Links */}
            <nav className='overflow-y-scroll pt-3 sm:pt-5 flex justify-center'>
                <ul className='flex flex-col text-center gap-y-3 md:gap-y-3.5'>
                    {navigationLinks.reverse().map(link => (
                        <NavigationLink 
                            key={link.title}
                            {...link}
                            closeOffset={closeOffset}
                            type={type}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    </Portals>
  )
}

export default Offset