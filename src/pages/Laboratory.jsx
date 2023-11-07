import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icons,
  ProductDescriptionBannerLinkContainer,
  SEO
} from "../components";
import { laboratoryContent, supportItems } from '../lib/constants/laboratory.constants';
import IStoreCareAllAppleImage from "../assets/images/iStore-care_all_apple_large.avif";

function Laboratory() {
  return (
    <>
      <SEO 
        title="מעבדה לתיקון מוצרי Apple | הטכנאים המומחים של אפל בישראל"
        description="שירותי תיקון לכלל מוצרי Apple. מעבדת iStore תתקן עבורכם כל מכשיר מבית Apple - לא משנה מהיכן נרכש, Mac, iPad, iPhone, iPod, Apple Watch, Apple TV, AirPods ועוד."
        keywords="מעבדת אפל, מעבדת אפל בישראל, אפל בישראל, תיקוני מוצרי אפל בישראל, תיקון אייפון, תיקון אייפד, החלפת מסך אייפון, החלפת מסך אייפד"
      />

      {/* Hero */}
      <section className='pt-[95px] pb-[90px] bg-grey-50 mb-20 text-app-text-dark-8 direction-rtl'>
        <div className="content-container flex flex-col items-center">
          {/* Image Logo */}
          <figure className="w-[250px]">
            <picture>
              <source 
                srcset={laboratoryContent.imageSource} 
                media="(min-width:0px)"
                className='w-full h-full object-cover'
              />
              <img 
                src={laboratoryContent.imageSource}
                alt={laboratoryContent.heading}
                loading='lazy'
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>

          {/* Content */}
          <div className='text-center'>
            {/* <h1 className="text-[2em] leading-8">{laboratoryContent.heading}</h1> */}
            
            {/* Subheading */}
            <h2 className="leading-8 mt-6 text-[26px] m-w-[55%] text-app-text-dark-8 font-semibold -tracking-[.01576em]">
              {laboratoryContent.subHeading.title}
              <br />
              {laboratoryContent.subHeading.subTitle}
            </h2>

            {/* Content */}
            <p className="text-base leading-6 tracking-[0.0185em] mt-[.8em]">{laboratoryContent.content}</p>

            {/* Links */}
            <ProductDescriptionBannerLinkContainer 
              links={laboratoryContent.links}
              className="direction-ltr mt-5 justify-center"
            />
          </div>

          {/* Banner Hero Image */}
          <figure className='mx-auto w-[600px] mt-[100px] -mb-10 flex justify-center'>
            <picture data-processed="true">
              <source 
                media="(min-width: 0px)" 
                srcSet={laboratoryContent.bannerImageSource}
                className='w-full h-full object-cover'
              />
              <img 
                loading="eager" 
                alt="אייפון 15 פרו מקס החדש של אפל" 
                src={laboratoryContent.bannerImageSource} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* IK Section */}
      <section className="pt-[80px] pb-[60px] direction-rtl">
        <div className="content-container text-right flex items-center gap-24">
          {/* Content */}
          <div>
            <h1 className="leading-[1.2em] mb-3 text-[28px] text-primary-500 font-semibold -tracking-[.01252em]">שירות לכלל מוצרי Apple.</h1>
            <p className="text-base leading-6 tracking-[.0185em]">
              מעבדת iStore תתקן עבורכם כל מכשיר מבית Apple - לא משנה מהיכן נרכש,
              <br />
              Mac, iPad, iPhone, iPod, Apple Watch, Apple TV, AirPods ועוד.
            </p>
          </div>

          {/* Image */}
          <figure className="w-[780px] -ml-[24rem] flex-1">
            <picture>
              <img 
                src={IStoreCareAllAppleImage}
                alt="istore"
                className="w-full object-cover"
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* IK Why IStore Section */}
      <section className="pt-20 pb-[60px]">
        <div className="content-container flex justify-between items-center gap-10">
          {/* Content */}
          <div className='order-1 text-right pr-20 direction-rtl'>
            <h1 className="leading-[1.2em] mb-3 text-[28px] text-primary-500 font-semibold -tracking-[.01252em]">צוות טכנאים מוסמך.</h1>
            <p className="text-base leading-6 tracking-[.0185em]">הטכנאים שלנו עברו הכשרה מקצועית וקיבלו הסמכה מ-Apple בסטנדרטים גבוהים ומחמירים ביותר, תוך שימוש בחלפים מקוריים.</p>
            <p className="text-base leading-6 tracking-[.0185em]">ניתן להכניס את המכשיר לתיקון בכל אחד מסניפי הרשת - באר שבע | קרית אונו | רעננה | תל אביב.</p>
          </div>

          {/* Image */}
          <Icons.IStoreAppStandard className="order-2 w-80" />
        </div>
      </section>

      {/* IK Why IStore Section */}
      <section className="pt-20 pb-[60px]">
        <div className="content-container flex justify-center items-center gap-10">
          {/* Content */}
          <div className='order-2 text-right pl-20 direction-rtl'>
            <h1 className="leading-[1.2em] mb-3 text-[28px] text-primary-500 font-semibold -tracking-[.01252em]">יש על מי לסמוך.</h1>
            <p className="text-base leading-6 tracking-[.0185em]">על כל תיקון שביצעתם במעבדת iStore Care תקבלו 3 חודשי אחריות.</p>
          </div>

          {/* Image */}
          <Icons.IStoreGuard className="w-52" />
        </div>
      </section>

      {/* IK Why IStore Section */}
      <section className="pt-20 pb-[60px]">
        <div className="content-container flex justify-between items-center gap-10">
          {/* Content */}
          <div className='order-1 text-right pr-20 direction-rtl'>
            <h1 className="leading-[1.2em] mb-3 text-[28px] text-primary-500 font-semibold -tracking-[.01252em]">החלפת מסך ל-iPhone.</h1>
            <p className="text-base leading-6 tracking-[.0185em]">טכנאי המעבדות של iStore הוסמכו על-ידי Apple לטפל ולהחליף את מסכי ה-iPhone לכלל הלקוחות תוך שימוש בחלפים מקוריים.</p>
            <ProductDescriptionBannerLinkContainer
              links={[
                {
                  title: "לפרטים נוספים",
                  href: "/מעבדה/iphone-screen-replacement",
                  variant: "secondary-text",
                  showIcon: true
                }
              ]}
              className="direction-ltr justify-center mt-3"
            />
          </div>
    
          {/* Image */}
          <Icons.IStoreScreen className="order-2 w-80" />
        </div>
      </section>

      {/* IK Why IStore Section */}
      <section className="pt-20 pb-[60px]">
        <div className="content-container flex justify-between items-center gap-10">
          {/* Content */}
          <div className='order-2 text-right pl-20 direction-rtl'>
            <h1 className="leading-[1.2em] mb-3 text-[28px] text-primary-500 font-semibold -tracking-[.01252em]">צווחוסכים לכם זמן יקר.</h1>
            <p className="text-base leading-6 tracking-[.0185em]">רק במעבדת iStore באפשרותכם לפתוח קריאת שירות מכל מקום ולבחור באיסוף המכשיר באמצעות שליח או למסור את המכשיר בעצמכם לאחד מסניפי הרשת.</p>
            <ProductDescriptionBannerLinkContainer
              links={[
                {
                  title: "פתיחת קריאת שירות מרחוק",
                  href: "/מעבדה/פתיחת-קריאה",
                  variant: "secondary-text",
                  showIcon: true
                }
              ]}
              className="direction-ltr justify-center mt-3"
            />
          </div>

          {/* Image */}
          <Icons.IStoreSavingTime className="order-1 w-[22rem]" />
        </div>
      </section>

      {/* Support Guide Section */}
      <section className="pt-[120px] pb-[60px] bg-grey-50 direction-rtl">
        <div className="content-container flex flex-col gap-8">
          {/* Header */}
          <header className='text-center space-y-3'>
            <h1 className="text-[28px] leading-[1.2em] text-primary-500 font-semibold -tracking-[.01252em]">מדריכים וטיפים.</h1>
            <p className="text-base leading-6 tracking-[.0185em]">רוצים להכיר טוב יותר את המכשיר שלכם?</p>
          </header>

          {/* Support Items Container */}
          <ul className="flex flex-1 items-center gap-x-20 w-full">
            {supportItems.map(({ Icon, title, link }) => (
              <li key={title}>
                <Link 
                  to={`${link}`}
                  className="text-sm text-app-text-dark-8 leading-6 tracking-[.0185em] text-center flex flex-col items-center justify-center gap-y-1.5"
                >
                  <Icon className="h-[50px]" />
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Support Title Container */}
          <div className="mt-[50px] text-center">
            <h1 className="text-[28px] leading-[1.2em] mb-3 text-primary-500 font-semibold -tracking-[.01252em]">תמיכה מרחוק.</h1>
            <ProductDescriptionBannerLinkContainer 
              links={[
                {
                  title: "לנוחיותכם תוכנות להשתלטות מרחוק",
                  href: "/support-service",
                  variant: "secondary-text",
                  showIcon: true
                }
              ]}
              className="justify-center direction-ltr"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Laboratory