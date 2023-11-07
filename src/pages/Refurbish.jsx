import React from 'react'
import { ProductCollectionPreview, SEO } from '../components'

const Refurbish = () => {
  return (
    <>
        <SEO 
            ttile="מכשירי תצוגה / מחודשים"
            description="מעוניינים לרכוש ממגוון מוצרי Refurbish במחיר משתלם ברשת  iStore ? הזמינו עכשיו online באתר או צרו עמנו קשר במספר 0732130507 אנחנו כאן לשירותכם!"
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        {/* Product Preview */}
        <ProductCollectionPreview 
            heading={{
                title: "פינת המציאות",
                subTitle: "מכירת מכשירים מחודשים / תצוגה",
                subTitleClassName: ""
            }}
        />
    </>
  )
}

export default Refurbish