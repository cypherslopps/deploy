import React from 'react'
import { Link } from 'react-router-dom';
import { navigationLinks, whatsappLink } from '../lib/constants';
import NavigationLink from './NavigationLink';
import Icons from './Icons';
import { Button } from './ui/Button';
import CartIcon from './CartIcon';
import WishlistIcon from './WishlistIcon';
import WhatsappLogo from "../assets/images/social/whatsapp.png";

const Navigation = () => {
  return (
    <nav className='wrapper bg-white px-4 flex items-center justify-between gap-x-3 transition-all duration-1000'>
      {/* Actions */}
      <div className='flex items-center gap-x-3.5'>
        {/* Cart Items Count */}
        <CartIcon />

        {/* Wishlist Items Count */}
        <WishlistIcon />

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
            className='h-7'
          />
        </Link>
      </div>
      
      {/* Links */}
      <ul className='flex justify-center gap-x-3.5'>
        {navigationLinks.map(link => (
          <NavigationLink 
            key={(link.title).toLowerCase()}
            {...link}    
          />
        ))}
      </ul>

      {/* Search Box */}
      <Button title="חפש">
        <Icons.Search className='w-6 h-6' />
      </Button>
    </nav>
  )
}

export default Navigation;