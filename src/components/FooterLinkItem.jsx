import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'
import FooterSubLinkContainer from './FooterSubLinksContainer';

const FooterLinkItem = ({ title, href, Icon, className, props, subLinks }) => {
    const linkProps = props ?? {};
    
    return (
        <li>
            {!subLinks ? (
                <Link 
                    to={`${href}`}
                    {...linkProps}
                    className={cn(`flex items-center gap-x-2 capitalize text-grey-700 ${Icon ? "text-[13px] md:text-[15px]" : "text-[17px] sm:text-[15px]"} text-end sm:text-justify`, className)}
                >
                    {Icon && <Icon className={`${title === "לרשימת הסניפים ושעות הפתיחה" ? "w-7 h-7 md:w-[.9rem] md:h-[.9rem]" : "w-[.9rem] h-[.9rem]"}`} />}
                    {title}
                </Link>
            ) : (
                <FooterSubLinkContainer subLinks={subLinks} />
            )}
        </li>
    )
}

export default FooterLinkItem