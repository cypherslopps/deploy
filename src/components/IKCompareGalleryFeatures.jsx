import React from 'react'

const IKCompareGalleryFeatures = ({ feature  }) => {    
    const Icon = feature?.Icon;

    return (
        <div className="flex flex-col items-center text-center direction-rtl">
            {/* Headline */}
            {feature?.headline && <span className="text-[13px] leading-[1.42859] -tracking-[.016em] direction-rtl">{feature?.headline}</span>}

            {/* Heading */}
            {feature?.heading && <h3 className="text-[19px] leading-[1.19048] tracking-[.011em] font-semibold direction-ltr">{feature?.heading}</h3>}

            {/* Image */}
            {feature?.imageSource && (
              <figure className={`${feature.subTitle.title === "שבב Apple M2 Pro" ? "h-[2.4rem]" : "h-11 w-12"}`}>
                  <img 
                    src={feature.imageSource}
                    alt={feature.subTitle.title}
                    className='w-full h-full object-cover'
                  />
              </figure>
            )}

            {/* Icon */}
            {feature.Icon && (
                <Icon className="w-12" />
            )}

            {/* Sub title */}
            <p className="text-[13px] leading-[1.42859] -tracking-[.016em]">
              {feature.subTitle.title}
              {feature.subTitle?.subTitle && (
                <>
                  <br />
                  {feature.subTitle.subTitle}
                </>
              )}
              {feature.subTitle?.subTitleContent && (
                <>
                  <br />
                  {feature.subTitle.subTitleContent}
                </>
              )}
            </p>
        </div>
    )
}

export default IKCompareGalleryFeatures