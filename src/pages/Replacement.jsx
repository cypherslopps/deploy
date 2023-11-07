import React from 'react'
import { ProductCollectionPreview, SEO } from '../components'

const Replacement = () => {
  return (
    <>
        <SEO 
            title="אוזניית איירפודס בודדת - חלקי חילוף לאוזניות AirPods"
            description="ודאי תהית אם ניתן לקנות אוזניית איירפודס בודדת? התשובה היא כן. אצלנו תמצאו אוזניות בודדות מקוריות של אפל במחיר משתלם."
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        {/* Product Collection Preview */}
        <ProductCollectionPreview 
            heading={{
                title: "חלקי חילוף לאוזניות AirPods"
            }}
            showFilter={false}
            showSortSelect={false}
        />
    </>
  )
}

export default Replacement