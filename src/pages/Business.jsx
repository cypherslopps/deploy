import React from 'react';
import {
  Button,
  Input,
  ProductDescriptionBannerLinkContainer,
  SEO
} from "../components";
import BusinessHeroImage from "../assets/images/business_banner_image.avif";
import { businessBulletList, contactFormLinks } from '../lib/constants/business.constants';
import { Textarea } from '../components/ui/Input';

function Business() {
  return (
    <>
      <SEO 
        title="עסקים | לקוחות עסקיים"
        description="iStore המחלקה העסקית של
        אנו מאמינים כי הלקוחות העסקיים צריכים לקבל מענה מיידי - ללא מעבר אל מענה קולי, ללא המתנה לנציג, ללא מספרי שלוחה מיוחדים.
        אנו סבורים כי מגיע לכם תמיד לדעת מי עונה בצד השני של השפופרת. נשמע טוב מדי? 
        *שעות פעילות: 10:00-17:00"
        keywords="מחלקה עסקית אפל, מחלקה עסקית למוצרי אפל, מחלקה עסקית, מחלקה עסקית אייסטור, מחלקה עסקית iStore"
      />

      {/* Hero */}
      <section className="py-[120px] bg-grey-50 direction-rtl">
        <div className="content-container">
          <h1 className="text-[25px] leading-[1em] font-semibold text-center text-app-text-dark-8">iStore for Business</h1>
        
          {/* Content */}
          <div className="py-[15px] mx-auto text-center flex flex-col items-center gap-y-[30px]">
            <h2 className="text-[50px] font-semibold leading-[1.1em] -tracking-[.0158em] text-app-text-dark-8">
              הצוות העסקי שלנו  
              <br />
              הוא חלק מהעסק שלך.
            </h2>
            <p className="text-[18px] leading-[1.4em] w-[58%] text-center">צוות המחלקה העסקית זמין עבורכם ומכיר את צרכי העסק שלכם. הוא יודע לתת ליווי מקצועי ולהתאים את המוצרים בדיוק עבורכם בתקציב שלכם ובמחירים מיוחדים.</p>

            {/* Link */}
            <ProductDescriptionBannerLinkContainer 
              links={[{
                title: "נסו אותנו",
                href: "#flexibleforms",
                variant: "secondary",
                className: "py-[7.5px] px-[21px] min-w-[28px]"
              }]}
            />
          </div>

          {/* Hero Image */}
          <figure className='mx-auto w-[800px] h-[280px] my-[30px]'>
              <picture>
                <source 
                  media="(min-width: 1199px)"
                  srcSet={BusinessHeroImage}
                  className="w-full h-full object-cover"
                />

                <img 
                  src={BusinessHeroImage}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
              </picture>
          </figure>
        </div>
      </section>

      {/* Bullet Section */}
      <section className="py-[120px] direction-rtl">
        <div className="content-container text-right">
          <h1 className="text-[50px] font-extrabold text-app-text-dark-8 -tracking-[.0158em] mb-11 leading-[1.2em]">ב-iStore, עסקים מקבלים יותר</h1>

          {/* Bullet Collection Container */}
          <div className='grid grid-cols-3 gap-[60px]'>
            {businessBulletList.map(({ title, Icon, content }) => (
              <blockquote key={title}>
                <Icon className="w-[50px] mb-[15px]" />

                {/* Content */}
                <div className='space-y-[5px]'>
                  <h4 className="text-[18px] leading-[1.2em] font-semibold text-app-text-dark-8">{title}</h4>
                  <p className="text-[17px] leading-[1.45em] -tracking-[.0158em] text-app-text-dark-8">
                    {content?.title ? (
                      <>
                        {content.title}
                        <br />
                        {content.subTitle}
                      </>
                    ) : (
                      <>{content}</>
                    )}
                  </p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section id="flexibleforms" className="px-[calc((100%_-_980px)/_2)] direction-rtl bg-grey-50">
        <div className="pt-12 space-y-[40px]">
          {/* Header */}
          <header className="p-2 text-center">
            <p className='mb-5'>
              <strong>השאירו פרטים</strong>
              ונציג מהמחלקה העסקית יחזור אליכם בהקדם!
            </p>
            <p className='mb-1'>באפשרותכם ליצור עמנו קשר גם במגוון דרכים בשעות פעילות המחלקה,</p>
            <p>ימים א'-ה' בין 09:00-17:00</p>

            {/* Links */}
            <ProductDescriptionBannerLinkContainer 
              links={contactFormLinks}
              className="mt-8 gap-x-4 justify-center"
            />
          </header>

          {/* Form */}
          <form className="w-full flex flex-col gap-y-3.5 pb-[40px] p-2">
            <Input 
              type="text"
              placeholder=" * שם מלא"
              className="font-normal placeholder:text-grey-900/90 placeholder:font-medium"
            />

            <Input 
              type="text"
              placeholder="  שם חברה"
              className="font-normal placeholder:text-grey-900/90 placeholder:font-medium"
            />

            <Input 
              type="text"
              placeholder="  ח.פ"
              className="font-normal placeholder:text-grey-900/90 placeholder:font-medium"
            />

            <Input 
              type="text"
              placeholder="  טלפון"
              className="font-normal placeholder:text-grey-900/90 placeholder:font-medium"
            />

            <Input 
              type="text"
              placeholder="* מייל"
              className="font-normal placeholder:text-grey-900/90 placeholder:font-medium"
            />

            <Textarea 
              placeholder="* מייל"
              className="font-normal placeholder:text-grey-900/90 placeholder:font-medium"
            />

            <div className='flex justify-end'>
              <Button
                type="submit"
                role="flexible form submit button"
                title="flexible form submit button"
                variant="border"
                size="sm"
                className="rounded-full"
              >
                שלחו עכשיו
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Business;