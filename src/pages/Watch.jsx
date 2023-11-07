import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Banner, 
  Button, 
  ChapterItemCollection, 
  ProductDescriptionBanner, 
  ProductPromoContainer, 
  SEO 
} from '../components';
import { 
  appleWatchChapterPromo,
  appleWatchSeries9Content, 
  appleWatchUltra2Content, 
  watchChapters 
} from '../lib/constants/watch.constants';

const Watch = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="שעון אפל ווטש קונים רק אצל המומחים | Apple Watch"
        description="כנסו לרכישת שעון אפל ווטש Apple Watch, השעון החכם האידאלי לחיים היום יומיים. שעוני אפל ידועים בטכנולוגיה המתקדמת ביותר."
        keywords="שעון
        אפל
        וואטש
        Apple Watch"
      />

      {/* Chapter Items Collection */}
      <ChapterItemCollection chapters={watchChapters} />

      {/* Banner */}
      <Banner className="flex flex-col items-center font-bold text-white md:py-[50px] px-10">
        <h1 className='text-3xl mb-8'>ריכזנו עבורכם כמה תשובות לשאלות בנוגע למכירה המוקדמת.</h1>
        <Button
          variant="white"
          size="none"
          onClick={() => navigate("/iphone/pre-order")}
          className="rounded-full py-[7px] px-[21px] font-normal"
        >
          לפרטים נוספים
        </Button>
      </Banner>

      {/* Apple Watch Series 9 Product Description Banner */}
      <ProductDescriptionBanner 
        {...appleWatchSeries9Content}
         
      />

      {/* Apple Ultra 2 Product Description Banner */}
      <ProductDescriptionBanner 
        {...appleWatchUltra2Content}
      />

      {/* Watch Clearance Promo Container */}
      <ProductPromoContainer 
        {...appleWatchChapterPromo}
      />
    </>
  )
}

export default Watch;