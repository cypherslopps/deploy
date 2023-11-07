import React from 'react'
import { ChapterItemCollection, ProductDescriptionBanner, SEO } from '../components';
import { appleTVContent, tvChapters } from '../lib/constants/tv.constants';

function TV() {
  return (
    <>
      <SEO 
        title="Apple TV - לצפות, לשמוע ולשחק במסך הגדול"
        description="האפל טיוי זמין לרכישה באייסטור. הדרך המושלמת לצפות, לשמוע ולשחק במסך הגדול שלכם עם איכות שרק Apple יודעת לתת."
        keywords="Apple TV
        4K
        Game
        משחק
        טלויזיה
        אפל
        פור קיי
        ארבע קיי
        רזולוציה
        סטרימר
        Chrome Cast
        ChromeCast
        Streamer"
      />

      <ChapterItemCollection chapters={tvChapters} />

      {/* Product Description Banner */}
      <ProductDescriptionBanner 
        {...appleTVContent}
      />
    </>
  )
}

export default TV