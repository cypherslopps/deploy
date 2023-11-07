import React from 'react';
import { cn } from '../lib/utils';
import ProductDescriptionBannerLinkContainer from './ProductDescriptionBannerLinks';
import ProductDescriptionBannerPricing from './ProductDescriptionBannerPricing';

const ProductDescriptionBanner = ({ 
    size = "default", 
    headline,
    containerClassName,
    heading, 
    subHeading, 
    pricing, 
    info, 
    links,
    bannerImageSources,
    rearrangePricingPosition
}) => {
  return (
    <section className={cn("h-[490px] md:h-[580px] text-[#fbfbfd] pt-8 xs:pt-10 md:pt-16 flex flex-col justify-between overflow-hidden direction-rtl", containerClassName)}>
        {/* Content */}
        <div className='flex flex-col items-center'>
            {/* Headline */}
            {headline && <span className={cn("text-[15px] mb-2.5 leading-[1.47059] -tracking-[.022em]", headline.className)}>{headline.title}</span>}

            {/* Heading */}
            <h2
                className={cn("text-2xl xxs:text-[1.52rem] text-center sm:text-2xl md:text-5xl xl:text-5.5xl -tracking-[.002em] font-semibold", heading?.headingClassName || "")}
                style={{ 
                    background: `url('${heading.imageSource}')`,
                    backgroundPosition: "center",
                    backgroundSize: heading?.imageSourceSize ? heading?.imageSourceSize : "auto 75%",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <p className={`${heading.imageSource ? "invisible" : ""}`}>
                    {heading.title}
                    {heading?.subTitle && <span>{heading.subTitle}</span>}
                </p>
            </h2>

            {/* Subheading */}
            <div className="mt-0.5 md:mt-1.5 text-center grid gap-y-0.5">
                <p className={cn(`tracking-[.009rem] text-black ${size === "sm" ? "text-[19px] font-normal" : "text-[1.14rem] md:text-xl xl:text-2.2xl font-medium"}`, subHeading.className)}>{subHeading.title}</p>
                
                <br />
                
                {/* Sub Heading sub Title */}
                {subHeading?.subTitle && (
                    <span className={cn("text-md text-black", subHeading.subTitleClassName)}>{subHeading.subTitle}</span>
                )}
            </div>  

            {/* Product Banner Pricings */}
            {!rearrangePricingPosition && (
                <ProductDescriptionBannerPricing 
                    {...pricing}
                    size={size}
                />
            )}

            {/* Info */}
            {info && (
                <>
                    {typeof info === "string" ? (
                        <p className="text-center text-[.93rem] px-2 my-1 xxs:my-0.5 xs:px-0 xs:text-[.9rem] sm:text-[.95rem] md:text-[1.05rem] md:mt-[.2rem] xl:text-lg xl:mb-2 tracking-[.012em] xl:mt-3 text-accent-500 font-semibold">{info}</p>
                    ) : (
                        <p className={cn("text-center text-[.93rem] px-2 my-1 xxs:my-0.5 xs:px-0 xs:text-[.9rem] sm:text-[.95rem] md:text-[1.05rem] md:mt-[.2rem] xl:text-lg xl:mb-2 tracking-[.012em] xl:mt-3 text-accent-500 font-semibold", info.className)}>{info.title}</p>
                    )}
                </>
            )}    

            {/* Product Banner Pricings */}
            {rearrangePricingPosition && (
                <ProductDescriptionBannerPricing 
                    {...pricing}
                    size={size}
                />
            )}

            {/* Product Banner Links */}
            <ProductDescriptionBannerLinkContainer 
                links={links} 
                size={size}
                className="direction-ltr"
            />
        </div>

        {/* Image */}
        <figure className={cn('mx-auto w-[98%] xxs:w-[80%] lg:w-[60%] xl:w-1/2 mt-2 flex justify-center', bannerImageSources.className)}>
            <picture data-processed="true">
                {bannerImageSources?.source780 && (
                    <source 
                        media="(min-width: 1199px)" 
                        srcSet={bannerImageSources.source780}
                        className='w-full h-full object-cover'
                    />
                )}

                {bannerImageSources.source670 && (
                    <source 
                        media="(min-width: 767px)" 
                        srcSet={bannerImageSources.source670}
                        className='w-full h-full object-cover'
                    />
                )}

                <source 
                    media="(min-width: 0px)" 
                    srcSet={bannerImageSources.source290}
                    className='w-full h-full object-cover'
                />
                <img 
                    loading="eager" 
                    alt="אייפון 15 פרו מקס החדש של אפל" 
                    src={bannerImageSources.source290} 
                    className='w-full h-full object-cover'
                />
            </picture>
        </figure>
    </section>
  )
}

export default ProductDescriptionBanner

// {/* <section
//         className={cn("h-[580px] text-[#fbfbfd] pt-16 flex flex-col justify-between overflow-hidden", containerClassName)}
//         style={{ background: bannerColor }}
//     >
        // {/* Content */}
        // <div className='flex flex-col items-center'>
        //     {/* Heading */}
        //     <h2
        //         className={cn("text-5.5xl -tracking-[.002em] font-semibold", heading?.className || "")}
        //         style={{ 
        //             background: `url('${heading.imageSource}')`,
        //             backgroundPosition: "center",
        //             backgroundSize: heading?.backgroundSize ? heading?.backgroundSize : "auto 75%",
        //             backgroundRepeat: "no-repeat"
        //         }}
        //     >
        //         <p className={`${heading.imageSource ? "invisible" : ""}`}>
        //             {heading.title}
        //             {heading?.subTitle && <span>{heading.subTitle}</span>}
        //         </p>
        //     </h2>

        //     {/* Subheading */}
        //     <p className={`tracking-[.009rem] mt-1.5 ${size === "sm" ? "text-[19px] font-normal" : "text-2.2xl font-medium"} text-center ${subHeadingColor}`}>{subHeading}</p>

        //     {/* Pricing */}
        //     {pricing && (
        //         <p className={`${size === "sm" ? "text-base mt-[0.27rem]" : "text-lg mt-3"} tracking-[.012em] text-grey-500`}>
        //             {pricing.content}            
        //             {" "}<span>{pricing.amount} </span>
        //     </p>)}

        //     {/* Info */}
        //     {info && <p className="text-lg mb-2 tracking-[.012em] mt-3 text-accent-500 font-semibold">{info}</p>}              
            
        //     <Link 
        //         to={`${link.href}`}
        //         className={`${size === "sm" ? "text-base mt-1" : "text-lg"} text-secondary-500 hover:underline flex items-center gap-x-1`}
        //     >
        //         <Icons.ChevronLeft className='w-3 h-3 text-secondary-500' />
        //         {link.title}
        //     </Link>
        // </div>

        // {/* Image */}
        // <figure className={cn('mx-auto w-1/2 h-[77%] mt-2 flex justify-center', imageContainerClass)}>
        //     <picture data-processed="true">
        //         {bannerImageSources?.source780 && (
        //             <source 
        //                 media="(min-width: 1199px)" 
        //                 srcSet={bannerImageSources.source780}
        //                 className='w-full h-full object-cover'
        //             />
        //         )}

        //         {bannerImageSources.source670 && (
        //             <source 
        //                 media="(min-width: 767px)" 
        //                 srcSet={bannerImageSources.source670}
        //                 className='w-full h-full object-cover'
        //             />
        //         )}

        //         <source 
        //             media="(min-width: 0px)" 
        //             srcSet={bannerImageSources.source290}
        //             className='w-full h-full object-cover'
        //         />
        //         <img 
        //             loading="eager" 
        //             alt="אייפון 15 פרו מקס החדש של אפל" 
        //             src={bannerImageSources.source290} 
        //             className='w-full h-full object-cover'
        //         />
        //     </picture>
        // </figure>
//     </section> */}