import React from 'react'
import { footerLinks, footerSocials } from '../lib/constants'
import FooterLinkCollectionContainer from './FooterLinkCollectionContainer';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-grey-300 direction-rtl text-grey-700 px-3 pt-5 md:px-5 lg:px-8 lg:pt-7 xl:px-10 xl:pt-10'>
      <div className='wrapper pt-8 pb-4 px-2 relative grid gap-y-9 divide-y divide-grey-800/15'>
        {/* Footer Links Collection */}
        <FooterLinkCollectionContainer footerLinks={footerLinks} />

        {/* Footer bottom */}
        <footer className='pt-4 px-2 flex flex-col gap-y-4 md:gap-y-0 md:items-center md:flex-row'>
          {/* Facebook Socials */}
          <ul className='flex items-center gap-x-4 mx-auto'>
            {footerSocials.map(({ Icon, href, props }) => (
              <li key={href}> 
                <Link 
                  {...props}
                  to={href}
                >
                  <Icon className="w-9 md:w-11" />
                </Link>
              </li>
            ))}
          </ul>
          
          <span className='text-grey-700 text-[.82rem]'>© 2023 iStore</span>
        </footer>
      </div>
    </footer>
  )
}

export default Footer