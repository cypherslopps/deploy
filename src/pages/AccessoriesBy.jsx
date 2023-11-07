import React from 'react'
import { ProductCollectionPreview, SEO } from '../components'
import BannerImage from "../assets/images/accessoriesby_banner_image.avif";
import BannerMobileImage from "../assets/images/accessoriesby_banner_mobile_image.avif";

const AccessoriesBy = () => {
  return (
    <>
        <SEO 
            title="iStore אביזרים נלווים"
            description="מעוניינים לרכוש ממגוון מוצרי אביזרים לפי במחיר משתלם ברשת  iStore ? הזמינו עכשיו online באתר או צרו עמנו קשר במספר 0732130507 אנחנו כאן לשירותכם!"
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        <section className="pb-4">
            <img 
                src={BannerImage}
                alt="accessories by"
                className="w-full h-full object-cover hidden md:block"
            />

              <img 
                src={BannerMobileImage}
                alt="accessories by"
                className="w-full h-full object-cover block md:hidden"
            />
        </section>

        {/* Products Container */}
        <ProductCollectionPreview showHeader />
    </>
  )
}

export default AccessoriesBy