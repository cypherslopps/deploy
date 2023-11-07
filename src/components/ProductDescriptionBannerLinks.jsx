import React from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from './ui/Button'
import Icons from './Icons'
import { cn } from '../lib/utils'

const ProductDescriptionBannerLinkContainer = ({ size, links, className }) => {
  return (
    <ul className={cn('flex items-center gap-x-2', className)}>
        {links.map(({ title, href, variant, showIcon, className }) => (
            <Link 
                key={title}
                to={`${href}`}
                className={cn(
                    buttonVariants({ variant, size: "none" }), 
                    `${size === "sm" ? "text-sm mt-1" : "text-md md:text-[17px] leading-[1.47059] -tracking-[.022em]"} rounded-full hover:underline gap-x-1 py-1 px-[18px] min-w-[28px]`,
                    className
                )}
            >
                {showIcon && (
                    <Icons.ChevronLeft className='w-3 h-3 mt-[.15rem]' />
                )}
                {title}
            </Link>
        ))}
    </ul>
  )
}

export default ProductDescriptionBannerLinkContainer