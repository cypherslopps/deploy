import React from 'react';
import { Link } from 'react-router-dom';
import ProductDescriptionBannerLinkContainer from './ProductDescriptionBannerLinks';
import IKCompareGalleryFeatures from './IKCompareGalleryFeatures';
import { cn } from '../lib/utils';

const IKCompareGalleryItem = ({ heading, subHeading, tagline, links, price, content, productLink, colors, features, imageSource, subTitle }) => {
  return (
    <blockquote className={`flex flex-col items-center pb-9 ${features ? "border-b border-[#d2d2d7]" : ""}`}>
      <div className='flex-1 w-full border-b border-[#d2d2d7] flex flex-col justify-start items-center'>
        {/* Image h-[128px] */}
        {imageSource && (
          <Link to={`${productLink}`}>  
            <figure className="w-[140px] md:w-[183px]">
              <img 
                src={imageSource}
                alt={subTitle?.title ?? heading}
                className="w-full h-full object-cover"
              />
            </figure>
          </Link>
        )}

        {/* Colors Container */}
        <ul className="mt-3.5 mb-6 xl:mt-[23px] xl:mb-7 flex justify-center items-center gap-[6px] direction-rtl">
          {colors.map(color => (
            <li 
              key={color}
              className="w-[11px] h-[11px] xl:w-[13px] xl:h-[13px] rounded-full shadow-iKColors" 
              style={{ backgroundColor: color }}
            />
          ))}
        </ul>

        {/* Heading */}
        <h3 className="text-[21px] leading-[1.16667] tracking-[.009em] text-center font-semibold direction-ltr">
          {heading.title}
          {heading?.subTitle && (
            <>
              <br />
              {heading.subTitle}
            </>
          )}
          {heading?.subText && (
            <>
              <br />
              <span className="text-[13px] leading-[1.42859] block -mt-0.5 -tracking-[.008em] font-light">{heading.subText}</span>
            </>
          )}
        </h3>

        {/* SubHeading */}
        {typeof subHeading === "string" ? (
          <h6 className="text-center font-medium mt-1 text-[13px]">{subHeading}</h6>
        ) : (
          <h6 className={cn("text-center font-medium mt-1 text-[13px]", subHeading.className)}>{subHeading.title}</h6>
        )}

        {/* Pricing */}
        <div className="mt-2 pt-2 text-[13px] grid gap-y-4 text-center">
          <p>{price}</p>
          <span>{content}</span>
        </div>

        {/* Link */}
        <div className="w-full pb-10 mt-2">
          <ProductDescriptionBannerLinkContainer 
            links={links}
            className="flex-col items-center direction-ltr gap-y-1.5"
          />
        </div>
      </div>

      {/* Features */}
      {features && (
        <div className='mt-6 pt-[15px] grid gap-y-10'>
          {features.map(feature => (
            <IKCompareGalleryFeatures 
              key={feature.subTitle.title}
              feature={feature}
            />
          ))}
        </div>
      )}
    </blockquote>
  )
}

export default IKCompareGalleryItem