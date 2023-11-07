import React from 'react';
import { Link } from 'react-router-dom';
import { Banner, PanelBanner, ProductDescriptionBanner, SEO } from '../components';
import { IPhone15Content, IPhone15ProContent, series9Content } from '../lib/constants/home.constants';
import ProductDescriptionBannerCollection from '../components/ProductDescriptionBannerCollection';

function Home() {
  return (
    <>
      <SEO
        title="iStore - Apple Israel Product Experience"
      />

      <main>
        {/* Banner */}
        <Banner>
          <p className='text-center text-[#fbfbfd] text-[.71rem] leading-[1.25rem] xs:text-xs sm:text-sm md:text-[13px] font-semibold md:leading-6'>
            בשל המצב הבטחוני, סניפי הרשת עובדים במתכונת חירום מצומצמת,{" "}
            <Link to="contact" className="underline">
              התעדכנו בשעות הפעילות.
            </Link>
          </p>
        </Banner>

        <main className='grid gap-y-3 bg-white'>
          {/* iPhone15 Pro Product Description Banner */}
          <ProductDescriptionBanner 
            {...IPhone15ProContent} 
          />

          {/* iPhone15 Product Description Banner */}
          <ProductDescriptionBanner
            {...IPhone15Content}
          />

          {/* Watch Product Description Banner */}
          <ProductDescriptionBanner
            {...series9Content}
          />

          {/* Product Description Collection */}
          <ProductDescriptionBannerCollection />
        </main>

        {/* Panel Banner */}
        {/* <PanelBanner /> */}
      </main>
    </>
  )
}

export default Home;