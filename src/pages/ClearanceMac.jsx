import React from 'react'
import { ProductCollectionPreview, SEO } from '../components'

const ClearanceMac = () => {
  return (
    <>
        <SEO 
            title="iStore Clearance - Mac"
            description="הנחות ענק על מגוון מוצרי Mac עודפים."
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        {/* Product Collection Preview */}
        <ProductCollectionPreview 
            heading={{
                title: "בחרו את ה-Mac שלכם",
                headerClassName: "pt-1.5 mb-16"
            }}
            showFilter={false}
            showSortSelect={false}
        />
    </>
  )
}

export default ClearanceMac