import React from 'react'
import ProductDescriptionBannerLinkContainer from './ProductDescriptionBannerLinks'
import { cn } from '../lib/utils'

const ProductPromoContainer = ({ 
    bannerImageSources, 
    heading,
    subHeading,
    links
}) => {
  return (
    <section className="flex justify-center">
        <div className="max-w-[1440px] w-[96.5%] min-h-[500px] bg-grey-200 overflow-hidden grid grid-cols-2 items-center">
            <figure className={cn("w-[81%] ml-14", bannerImageSources?.className)}>
                <img 
                    src={bannerImageSources.source290}
                    alt={heading.title}
                    className="w-full h-full object-cover"
                />
            </figure>

            {/* Content */}
            <div className='flex flex-col items-center mr-[1.04167%] ml-[2.08333%]'>
                <div className="text-center space-y-2 mb-[19px]">
                    <h4 className={cn("text-[21px] font-semibold -tracking-[.011em] text-app-text-dark mb-[.4rem]", heading.className)}>{heading.title}</h4>
                    <h1 className={cn("text-4.7xl font-semibold -tracking-[1.125] text-app-text-dark", subHeading.className)}>{subHeading.title}</h1>
                </div>

                <ProductDescriptionBannerLinkContainer 
                    links={links}
                />
            </div>
        </div>
    </section>
  )
}

export default ProductPromoContainer