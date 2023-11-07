import React from 'react'
import { cn } from '../lib/utils'

const ProductDescriptionBannerPricing = ({ amount, content, details, containerClassName, className, size }) => {
  return (
    <div className={cn("text-center", containerClassName)}>
        <p className={cn(`${size === "sm" ? "text-base mt-[0.27rem]" : "text-base md:text-lg mt-0.5 xl:mt-3"} tracking-[.012em] text-grey-500`, className)}>
            {content}            
            {" "}<span>{amount}</span>
        </p>

        {/* Detail */}
        {details && (
            <p className={cn('text-black px-3 sm:px-0', details?.className)}>
              {details?.price && (
                <>
                  <span className='text-[.83rem] xs:text-md sm:text-base md:text-lg'>{details.price}</span>
                  <br />
                </>
              )}
              
              <span>{details.content}</span>
            </p>
        )}
    </div>
  )
}

export default ProductDescriptionBannerPricing