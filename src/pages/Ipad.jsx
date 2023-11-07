import React from 'react'
import { ChapterItemCollection, Icons, IkCompareGalleryContainer, ProductDescriptionBannerLinkContainer, SEO } from "../components";
import { ipadChapters, ipadGalleryList } from '../lib/constants/ipad.constants';
// IPAD Images
import IPadBannerSmall from "../assets/images/ipad_banner_small.avif";
import IPadBannerMedium from "../assets/images/ipad_banner_medium.avif";
import IPadBannerLarge from "../assets/images/ipad_banner_large.avif";

// IPAD Pro Images
import IPadProBannerSmall from "../assets/images/ipad_pro_banner_small.avif";
import IPadProBannerMedium from "../assets/images/ipad_pro_banner_medium.avif";
import IPadProBannerLarge from "../assets/images/ipad_pro_banner_large.avif";

// IPAD for School Images
import IPad4SchoolLarge from "../assets/images/ipad_4_school_large.avif";
import IPad4SchoolMedium from "../assets/images/ipad_4_school_medium.avif";
import IPad4SchoolSmall from "../assets/images/ipad_4_school_small.avif";

// IStore Clearance
import IStoreClearanceLarge from "../assets/images/istore_clearance_model_large.avif";
import IStoreClearanceMedium from "../assets/images/istore_clearance_model_medium.avif";
import IStoreClearanceSmall from "../assets/images/istore_clearance_model_small.avif";

function Ipad() {
  return (
    <>
      <SEO 
        title="iPad - אייפד"
        description="מתלבטים איזה אייפד של אפל לקנות? כנסו לאתר האונליין למגוון אייפדים מבית iPad Mini ,iPad Air ,בשלל תכונות מתקדמות וביצועים עוצמתיים. אייפד פרו Apple ועוד."
        keywords="iPad
        אייפד
        איפד
        "
      />

      {/* Chapter Items Collection */}
      <ChapterItemCollection chapters={ipadChapters} />

      {/* IPAD Tile Section */}
      <section className="bg-white pt-5 xs:pt-8 sm:pt-[57px] md:pt-[70px] mb-2.5 text-app-text-dark-9 direction-rtl overflow-hidden">
        <div className="w-[87.5%] xl:w-[980px] max-w-87.5% mx-auto flex flex-col items-center md:flex-row">
          {/* Content */}
          <div className="w-full max-w-full mb-9 md:w-[45%] md:max-w-[45%] md:-mt-14 lg:mt-0 lg:w-[33.33333%] lg:max-w-[33.33333%] xl:max-w-[25%] xl:w-1/4 flex flex-col items-center text-center xl:mx-auto">
            <div>
              <span className="sr-only"></span>
              <Icons.IpadLogo className="w-20 xs:w-24 md:w-28 lg:w-32" />
            </div>
            <p className="text-[17px] md:text-[20px] xl:text-[22px] direction-ltr leading-[1.28349] font-semibold -tracking-[.003em] mt-[15px]">Lovable. Drawable. Magical.</p>
            <p className="text-sm max-w-[275px] mx-auto md:mx-0 md:max-w-full tracking-[.011em] mt-[18px]">
              החל מ-
              <span>2,199 ₪</span>
              <br />
              או החל מ-      
              <span>183.25 ₪</span>   
              / חודש ב-12 תשלומים ללא ריבית.   
            </p>

            {/* Links */}
            <ProductDescriptionBannerLinkContainer 
              links={[
                {
                  title: "לרכישה",
                  href: "/ipad/apple-ipad-10th-generation",
                  variant: "secondary",
                  className: "md:text-[15px] leading-[1.27648] pt-[7px] pb-[6px]"
                },
                {
                  title: "לפרטים נוספים",
                  href: "/newsroom/the-new-ipad-10th-generation-2022",
                  variant: "secondary-text",
                  className: "md:text-[15px] leading-[1.27648] pt-[7px] pb-[6px] direction-ltr",
                  showIcon: true
                }
              ]}
              className="mt-5 flex-col gap-y-2 md:gap-y-3 xl:flex-row"
            />
          </div>

          {/* Image */}
          <figure className="w-full max-w-full xs:w-[90%] xs:max-w-[90%] sm:w-3/5 sm:max-w-[60%] lg:max-w-[55.33333%] lg:w-[55.33333%] md:-mt-[100px] mb-[60px] -mr-2 xl:max-w-[735px] xl:w-[735px] xl:-mt-[310px] xl:mb-[50px] xl:-mr-52">
            <picture data-processed="true">
              <source 
                media="(min-width: 1199px)" 
                srcSet={IPadBannerLarge}
                className='w-full h-full object-cover'
              />

              <source 
                media="(min-width: 768px)" 
                srcSet={IPadBannerMedium}
                className='w-full h-full object-cover'
              />
                
              <source 
                media="(min-width: 0px)" 
                srcSet={IPadBannerSmall}
                className='w-full h-full object-cover'
              />

              <img 
                loading="eager" 
                alt="אייפון 15 פרו מקס החדש של אפל" 
                src={IPadBannerSmall} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* IPAD Pro Tile Section */}
      <section className="bg-black text-grey-100 pt-12 sm:pt-[57px] md:pt-[70px]  direction-rtl overflow-hidden">
        <div className="w-[87.5%] xl:w-[980px] max-w-87.5% mx-auto flex flex-col items-center md:flex-row">
          {/* Content */}
          <div className="w-full max-w-full order-1 mb-9 md:w-[45%] md:max-w-[45%] md:-mt-14 lg:mt-0 lg:w-[33.33333%] lg:max-w-[33.33333%] xl:max-w-[25%] xl:w-1/4 flex flex-col items-center text-center xl:mx-auto md:order-2">
            <div>
              <span className="sr-only"></span>
              <Icons.IpadProLogo className="w-40 xs:w-44 md:w-52 lg:w-56" />
            </div>
            <p className="text-[17px] md:text-[20px] xl:text-[22px] direction-ltr leading-[1.28349] font-semibold -tracking-[.003em] mt-[15px]">Supercharged by M2.</p>
            <p className="text-sm max-w-[275px] mx-auto md:mx-0 md:max-w-full tracking-[.011em] mt-[18px]">
              החל מ-
              <span>3,849 ₪</span>
              <br />
              או החל מ-      
              <span>320.75 ₪</span>   
              / חודש ב-12 תשלומים ללא ריבית.   
            </p>

            {/* Links */}
            <ProductDescriptionBannerLinkContainer 
              links={[
                {
                  title: "לרכישה",
                  href: "/ipad/apple-ipad-pro-129-6th-gen-and-ipad-pro-11-4th-gen",
                  variant: "secondary",
                  className: "md:text-[15px] leading-[1.27648] pt-[7px] pb-[6px]"
                },
                {
                  title: "לפרטים נוספים",
                  href: "/newsroom/the-new-ipad-pro-11-inch-4th-gen-and-ipad-pro-12-9-inch-6th-gen-2022",
                  variant: "secondary-text",
                  className: "md:text-[15px] leading-[1.27648] pt-[7px] pb-[6px] direction-ltr",
                  showIcon: true
                }
              ]}
              className="mt-5 flex-col gap-y-2 md:gap-y-3 xl:flex-row"
            />
          </div>

          {/* Image */}
          <figure className="w-full max-w-full order-2 xs:w-[90%] xs:max-w-[90%] sm:w-4/5 sm:max-w-[80%] md:w-3/5 md:max-w-[60%] lg:max-w-[55.33333%] lg:w-[55.33333%] mb-[60px] xl:max-w-[735px] xl:w-[735px] xl:mb-[50px] lg:-mr-14 md:order-1">
            <picture data-processed="true">
              <source 
                media="(min-width: 1199px)" 
                srcSet={IPadProBannerLarge}
                className='w-full h-full object-cover'
              />

              <source 
                media="(min-width: 768px)" 
                srcSet={IPadProBannerMedium}
                className='w-full h-full object-cover'
              />
                
              <source 
                media="(min-width: 0px)" 
                srcSet={IPadProBannerSmall}
                className='w-full h-full object-cover'
              />

              <img 
                loading="eager" 
                alt="אייפון 15 פרו מקס החדש של אפל" 
                src={IPadProBannerSmall} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* Compare Section */}
      <section className="bg-grey-250 text-app-text-dark-9 lg:px-[30px] pt-5 sm:pt-10">
        <div className="max-w-[776px] pt-14 pb-6 sm:pb-24 md:pt-[105px] xl:max-w-[1440px] bg-white mx-auto md:pb-[144px] xl:pt-[100px]">
          <h1 className="max-w-[200px] md:max-w-[940px] direction-rtl mx-auto text-center text-[34px] leading-[1.1] md:text-[44px] xl:text-[52px] md:leading-[1.07143] font-semibold md:-tracking-[.005em]">איזה iPad מתאים לכם?</h1>

          {/* Compare Container */}
          <IkCompareGalleryContainer 
            gallery={ipadGalleryList}
            className="mt-14 md:mt-[90px] max-w-[500px] xl:mt-[68px] xl:max-w-[940px] justify-items-center mx-auto grid-cols-1 px-4 xs:px-0 xs:grid-cols-2 xs:justify-items-start gap-x-2.5 md:gap-x-[42px] xl:grid-cols-5 xl:gap-x-5 gap-y-[5px]"
          />
        </div>
      </section>
      
      {/* SKY Walker */}
      <section className="bg-grey-250 text-app-text-dark-9 px-4 lg:px-[30px] pt-10 md:pt-16 direction-rtl">
        <div className="max-w-[776px] pt-8 xl:max-w-[1440px] bg-white mx-auto xl:pt-8 grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="flex min-h-[202px] overflow-hidden justify-center order-2 md:order-1">
            <figure className="w-auto h-[250px] md:h-[430px] mt-8 md:mt-20 xl:mt-0 xl:h-auto xl:w-[380px] md:-mb-[150px]">
              <picture data-processed="true">
                <source 
                  media="(min-width: 1199px)" 
                  srcSet={IPad4SchoolLarge}
                  className='w-full h-full object-cover'
                />

                <source 
                  media="(min-width: 768px)" 
                  srcSet={IPad4SchoolMedium}
                  className='w-full h-full object-cover'
                />
                  
                <source 
                  media="(min-width: 0px)" 
                  srcSet={IPad4SchoolSmall}
                  className='w-full h-full object-cover'
                />

                <img 
                  loading="eager" 
                  alt="אייפון 15 פרו מקס החדש של אפל" 
                  src={IPad4SchoolSmall} 
                  className='w-full h-full object-cover'
                />
              </picture>
            </figure>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center mr-[1.04167%] ml-[2.0833%] order-1 md:order-2">
            <div className="mx-5 md:my-[50px] md:mr-9 md:ml-[45px] text-center">
              <h5 className="text-[19px] xl:text-[21px] leading-[1.19048] font-semibold -tracking-[.011em] mb-[.4em]">iPad for School</h5>
              <h1 className="text-[28px] lg:text-[32px] xl:text-[43px] leading-[1.125] font-semibold -tracking-[.008em]">
                לא משנה איך תלמדו.
                <br />
                יש iPad בשביל זה.
              </h1>
              <p className="max-w-full xl:max-w-[500px] mt-3 lg:mt-5 text-[17px] leading-[1.47059] -tracking-[.0022em] text-center">ל-iPad יש את היכולת להתמודד עם המשימות הקשות ביותר והמשחקים האינטנסיביים ביותר. הוסיפו את ה-Apple Pencil כדי לרשום הערות בצורה מדוייקת ואת ה-Magic Keyboard כדי להקליד במהירות. בין אם אתם בשיעור מתמטיקה, ספרות או בהפסקה, ה-iPad מוכן לשימוש.</p>
              <ProductDescriptionBannerLinkContainer 
                links={[
                  {
                    title: "לפרטים נוספים",
                    href: "/ipad/for-school",
                    variant: "secondary-text",
                    showIcon: true
                  }
                ]}
                className="direction-ltr justify-center mt-[19px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-250 text-grey-100 md:px-4 lg:px-[30px] pt-10 md:pt-16 direction-rtl">
        <div className="max-w-full w-full md:w-auto md:max-w-[776px] md:pt-8 xl:max-w-[1440px] xl:min-h-[500px] bg-black md:rounded-[25px] mx-auto mb-[15px] xl:pt-8 grid grid-cols-1 md:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col text-center items-center justify-center my-9 px-10 md:px-0 md:my-5 md:mr-[45px] md:ml-[36px] xl:my-0 xl:mr-0 xl:ml-0">
            <h3 className="text-[19px] xl:text-[21px] leading-[1.19048] font-semibold mb-[.4em]">iStore Clearance</h3>
            <h1 className="text-[28px] md:text-[32px] xl:text-[43px] leading-[1.125] font-semibold -tracking-[.008em]">מחירי סוף עונה על דגמים נבחרים.</h1>
            <ProductDescriptionBannerLinkContainer 
              links={[
                {
                 title: "לפרטים נוספים",
                 href: "/clearance/ipad?dir=asc&order=price",
                 variant: "secondary-text",
                 showIcon: true,
                 className: "text-[17px] md:text-[17px] text-[#2997ff]"
                }
              ]}
              className="direction-ltr mt-4 md:mt-[19px]"
            />
          </div>

          {/* Image */}
          <figure className="justify-self-center self-center w-[255px] mb-6 xl:mb-0 xl:w-[360px]">
            <picture data-processed="true">
              <source 
                media="(min-width: 1199px)" 
                srcSet={IStoreClearanceLarge}
                className='w-full h-full object-cover'
              />

              <source 
                media="(min-width: 768px)" 
                srcSet={IStoreClearanceMedium}
                className='w-full h-full object-cover'
              />
                
              <source 
                media="(min-width: 0px)" 
                srcSet={IStoreClearanceSmall}
                className='w-full h-full object-cover'
              />

              <img 
                loading="eager" 
                alt="אייפון 15 פרו מקס החדש של אפל" 
                src={IStoreClearanceSmall} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>
        </div>
      </section>
    </>
  )
}

export default Ipad