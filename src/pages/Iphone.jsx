import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SEO,
  ChapterItemCollection,
  Banner,
  Button,
  ProductDescriptionBanner,
  IkCompareGalleryContainer,
  ProductDescriptionBannerLinkContainer
} from "../components";
import { IphoneChapters, IPhone15ProContent, iphoneGalleryList } from '../lib/constants/iphone.constants';
import IPhone15Image from "../assets/images/iphone-15_logo.png";
import IPhone15BannerLarge from "../assets/images/iphone-15-hero_large.jpg";
import IPhone15BannerMedium from "../assets/images/iphone-15-hero_medium.jpg";
import IPhone15BannerSmall from "../assets/images/iphone-15-hero_small.jpg";


function Iphone() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="אייפון - iPhone"
        description="לרכישת אייפון במחיר משתלם היכנסו כעת לאתר האונליין שלנו ובחרו את ה - iPhone האהוב עליכם. אייפון 15, אייפון 14 ודגמי אייפון נוספים מחכים לכם כעת."
        keywords="אייפון
        iPhone
        ןפיםמק
        thhpui"
      />

      {/* Chapter Items Collection */}
      <ChapterItemCollection chapters={IphoneChapters} />

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

      {/* Iphone 15 */}
      <section className="overflow-hidden direction-rtl">
        <div className="pt-5 md:pt-[70px] mb-2.5 min-h-[637px] flex flex-col items-center md:justify-between md:flex-row bg-white tile-wrapper">
          {/* Content */}
          <div className="md:w-1/2 flex-1 relative mb-[38px] lg:mr-[5.5rem] md:pt-16 xl:mr-0 text-center flex flex-col items-center">
            {/* Headline */}
            <span className="text-[13px] lg:text-[15px] leading-[1.47059] -tracking-[.022em] text-[#6e6e73] mb-2.5">חדש</span>

            {/* Heading */}
            <figure>
              <img 
                src={IPhone15Image}
                alt="iphone 15"
                className="w-[6.5rem] md:w-[8rem] xl:w-[7.7rem] object-cover"
              />
            </figure>

            {/* Subheading */}
            <div className="text-center grid gap-y-0.5">
              <p className="text-black text-[37px] md:text-[40px] lg:text-[42px] mt-3 md:mt-[15px] xl:mt-2.5 xl:text-[45px] leading-[1.28349] -tracking-[.0252em] font-semibold direction-ltr">Take the big leap.</p>
            </div>

            {/* Info */}
            <p className="text-center text-[.7rem] md:text-[.73rem] lg:text-[.93rem] px-2 xs:px-0 mt-2.5 lg:mt-3 xl:text-xs xl:mb-2 tracking-[.012em] xl:mt-3.5 text-accent-500 font-semibold">הטבה - קנו iPhone וקבלו שובר מתנה בשווי 100 ₪ עם הגעתו!</p> 

             {/* Pricing */}
             <p className="max-w-[275px] mt-[18px] text-[15px] leading-[1.47059] mx-auto md:mx-0 md:text-[17px] md:max-w-full lg:text-[19px] md:leading-[1.381] tracking-[.011em] md:mt-3 xl:mt-2">
              החל מ- 
              <span>4,349 ₪</span>   
              <br />
              או החל מ-             
              <span>724.83 ₪</span>
              / חודש ב-6 תשלומים ללא ריבית.
             </p>

            {/* Product Banner Links */}
            <ProductDescriptionBannerLinkContainer 
                links={[
                  {
                    title: "לפרטים נוספים",
                    href: "/newsroom/apple-iphone-15-and-iphone-15-plus.html",
                    variant: "secondary-text",
                    showIcon: true,
                    className: "text-md md:text-base pt-[7px] px-[18px] pb-[6px] -tracking-[.012em] order-2 xl:order-1"
                  },
                  {
                    title: "לרכישה",
                    href: "/iphone/apple-iphone-15",
                    variant: "secondary",
                    className: "text-md md:text-base pt-[7px] px-[18px] pb-[6px] -tracking-[.012em] order-1 xl:order-2"
                  }
                ]}
                className="direction-ltr mt-[30px] gap-y-2 lg:gap-y-3 xl:gap-y-0 xl:mt-[25px] flex-col xl:flex-row"
            />
          </div>

          {/* Image */}
          <div className='flex-1 md:w-1/2'>
            <figure className="w-[393px] md:w-[427px] md:mr-[79px] md:-mt-[100px] xl:w-[597px] xl:-mt-[200px] xl:-mb-[140px] xl:mr-[109px]">
              <picture data-processed="true">
                <source 
                  media="(min-width: 1199px)" 
                  srcSet={IPhone15BannerLarge}
                  className='w-full h-full object-cover'
                />

                <source 
                  media="(min-width: 768px)" 
                  srcSet={IPhone15BannerMedium}
                  className='w-full h-full object-cover'
                />

                <source 
                  media="(min-width: 0px)" 
                  srcSet={IPhone15BannerSmall}
                  className='w-full h-full object-cover'
                />

                <img 
                  loading="eager" 
                  alt="אייפון 15 פרו מקס החדש של אפל" 
                  src={IPhone15BannerLarge} 
                  className='w-full h-full object-cover'
                />
              </picture>
            </figure>
          </div>
        </div>
      </section>

      {/* iPhone15 Pro Product Description Banner */}
      <section className="bg-[#222] pb-2.5">
        <ProductDescriptionBanner 
          {...IPhone15ProContent} 
        />
      </section>

      {/* Iphone Option */}
      <section className="bg-grey-300 px-[30px] pt-20 flex justify-center direction-rtl">
        <div className="max-w-[1440px] w-full bg-white pt-[115px] pb-[105px] text-app-text-dark-9">
          <h1 className="text-[52px] leading-[1.07143] font-semibold -tracking-[.005em] text-center">איזה iPhone מתאים לכם?</h1>

          {/* Gallery Item */}
          <div className="max-w-[940px] mx-auto">
            <IkCompareGalleryContainer 
              gallery={iphoneGalleryList}
              className="gap-y-[38px] gap-x-[34px] pb-[73px]"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Iphone