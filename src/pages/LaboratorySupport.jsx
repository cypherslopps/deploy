import React from 'react'
import { ProductDescriptionBannerLinkContainer, SEO } from '../components'
import { supportItems } from '../lib/constants/laboratorySupport.constants'
import { Link } from 'react-router-dom'

const LaboratorySupport = () => {
  return (
    <>
      <SEO 
        title="תמיכה | Support"
        description="מדריכים וטיפים - רוצים להכיר טוב יותר את המכשיר שלכם? הכנסו עכשיו."
        keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
      />

      {/* Hero */}
      <section className="pt-20 pb-[60px] direction-rtl bg-grey-50">
        <div className="content-container flex flex-col items-center">
          <header className="text-center">
            <h1 className="text-[24px] md:text-[28px] leading-[1.2em] mb-3 font-semibold -tracking-[.01252em] text-[#004466]">מדריכים וטיפים.</h1>
            <p className="text-[15px] md:text-base leading-6 tracking-[.0185em]">רוצים להכיר טוב יותר את המכשיר שלכם?</p>
          </header>

          {/* Supple Items Container */}
          <ul className="w-full grid grid-cols-[repeat(2,max-content)] justify-between md:justify-normal md:px-5 md:grid-cols-3 xl:px-0 xl:grid-cols-[repeat(7,max-content)] items-center gap-y-8 gap-x-20 my-8">
            {supportItems.map(({ title, Icon, href }) => (
              <Link 
                to={`${href}`}
                target='_blank'
                className='flex flex-col items-center gap-y-1.5'
              > 
                <Icon className="h-[50px]" />
                <p className="text-[15px] lg:text-sm tracking-[.0185em]">{title}</p>
              </Link>
            ))}
          </ul>
          
          {/* Support */}
          <div className="mt-[50px] direction-rtl text-center">
            <h1 className="text-[24px] md:text-[28px] leading-[1.2em] mb-3 text-[#004466] font-semibold -tracking-[.01252em]">תמיכה מרחוק.</h1>
            <ProductDescriptionBannerLinkContainer 
              links={[{
                title: "לנוחיותכם תוכנות להשתלטות מרחוק",
                href: "support-service",
                showIcon: true,
                variant: "secondary-text",
                className: "md:text-base leadin-[1.5em] tracking-[.0185em]"
              }]}
              className="mt-[5px] justify-center direction-ltr"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default LaboratorySupport