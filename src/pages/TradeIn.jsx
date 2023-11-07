import React from 'react'
import { SEO, Tabs, TabsContent, TabsList, TabsTrigger } from '../components';
import TradeInBannerLarge from "../assets/images/tradein_hero_large.avif";
import TradeInBannerMedium from "../assets/images/tradein_hero_medium.avif";
import CheckIcon from "../assets/images/check.png";
import { appleTVPricingList, appleWatchPricingList, gridContent, intelPricingList, ipadPricingList, iphonePricingList, macPricingList, pricingTabs, whyusContent } from '../lib/constants/tradein.constants';

function TradeIn() {
  return (
    <>
      <SEO 
        title="Trade IN | טרייד אין"
        description="מעוניינים לרכוש ממגוון מוצרי טרייד-אין במחיר משתלם ברשת  iStore ? הזמינו עכשיו online באתר או צרו עמנו קשר במספר 0732130507 אנחנו כאן לשירותכם!"
        content="Trade IN
        טרייד אין
        אייפון
        מק
        איפד
        שדרוג
        אייפד
        iPhone
        Upgrade
        iPad
        Mac
        yrhhsthi
        טריידאין
        tradein
        ארשגקןמ"
      />

      {/* Hero */}
      <section className="pt-[30px] sm:pt-[50px] xl:pt-[70px] direction-rtl">
        <div className="content-container text-right md:text-center flex flex-col items-start md:items-center">
          {/* Content */}
          <div>
            <h5 className="text-[19px] md:text-[22px] xl:text-[25px] leading-[1.2] tracking-[.007em] mb-[.4em] font-semibold text-app-text-dark-9">iStore Trade In</h5>
            <h1 className="text-[35px] md:text-[42px] xl:text-[50px] leading-[1.12] -tracking-[.017em] max-w-full md:max-w-[560px] md:mx-auto font-semibold md:text-center text-app-text-dark-9">הפכו את המכשיר שיש לכם למכשיר שאתם רוצים.</h1>
            <p className="pl-[50px] md:pl-0 text-[17px] xl:text-[19px] w-full md:w-[70%] md:mx-auto mt-[25px] leading-[1.4] md:text-center text-app-text-dark-9">רשת iStore מזמינה אתכם להביא את המכשיר הישן ולהתקדם לרכישת מכשיר חדש. אם יש ברשותכם מכשיר iPad, iPhone, Apple Watch או אפילו Mac ישן ואתם רוצים להתקדם למכשיר חדש - אנו נעזור לכם! הגיעו לסניפי הרשת וקבלו זיכוי לרכישת מוצר חדש.</p>
          </div>

          {/* Image */}
          <figure className="w-[250px] xs:w-[500px] mt-12 md:mt-20 md:w-[780px]">
            <picture>
              <source 
                media="(min-width: 2000px)" 
                srcset={TradeInBannerLarge}
              />

              <source 
                media="(min-width: 768px)" 
                srcset={TradeInBannerMedium}
              />
                
              <img 
                src={TradeInBannerLarge}
                alt="trade in"
                className="w-full h-full object-cover"
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* WHY US */}
      <section className="pt-[95px] mb-10 xl:pt-[120px] xl:mb-10 direction-rtl">
        <div className="content-container">
          <h1 className="text-[35px] text-right w-full pl-[98px] md:pl-0 md:text-[39px] xl:text-[45px] leading-[1.12] -tracking-[.017em] md:w-4/5 mx-auto font-semibold md:text-center">
            למה כדאי לכם לבצע Trade in {" "}
            <span className="inline-block">דווקא ב- iStore:</span>
          </h1>

          {/* WHY US Collection Container */}
          <div className="mt-[30px] w-full max-w-[980px] grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[30px] xl:grid-cols-4 xl:gap-[20px] mx-auto">
            {whyusContent.map(({ title, content }) => (
              <blockquote 
                key={title}
                className="bg-grey-100 p-[25px] rounded-[7px] text-right"
              >
                <header className="flex items-center gap-1.5 mb-2.5">
                  <img 
                    src={CheckIcon}
                    alt={title}
                    className="w-[15px] h-[15px] object-cover"
                  />
                  <h5 className="text-[15px] xl:text-base font-semibold leading-[1.45] tracking-[.011em] text-primary-450">{title}</h5>
                </header>

                <p className="text-[15px] leading-[1.45] tracking-[.011em]">{content}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pt-[100px] mb-20 direction-rtl">
        <div className="content-container">
          <h1 className="text-[45px] leading-[1.12] -tracking-[.017em] w-4/5 font-semibold text-center mx-auto">אז כמה זה שווה לכם בעצם?</h1>

          {/* Price Table Container */}
          <div className="mt-[30px] bg-grey-100 rounded-[25px] pt-[50px]">
              <Tabs defaultValue="iPhone" className="direction-rtl">
                <TabsList 
                  className="flex items-center mx-auto gap-[60px] w-[290px] md:w-[655px] flex-nowrap border-b border-[#d2d2d7]"
                >
                  {pricingTabs.map(({ title, Icon, imageSource }) => (
                    <TabsTrigger 
                      key={title}
                      value={title}
                      className="flex-shrink-0 w-max py-[15px] flex flex-col items-center gap-[10px] text-[13px] md:text-[15px] leading-[1.1] -tracking-[.021em] -mb-[1px] px-0 text-[#6e6e73] data-[state=active]:border-b data-[state=active]:border-app-text-dark-9 data-[state=active]:text-app-text-dark-9"
                    >
                      {/* Icon */}
                      {Icon && (
                        <Icon className={`${title === "Apple Watch" ? "w-[50px] h-[50px] md:w-[60px] md:h-[60px]" : "w-10 h-10 md:w-[55px] md:h-[55px]"}`} />
                      )}
                      
                      {/* Image Source */}
                      {imageSource && (
                        <img 
                          src={imageSource}
                          alt={title}
                          className="w-[50px] h-[50px]"
                        />
                      )}
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Tab Content */}
                <div className="w-[91.66666%] md:w-[486px] mx-auto pt-[30px] pb-10">
                  {/* Iphone Content */}
                  <TabsContent value="iPhone">
                      <header className="flex items-center justify-between text-right">
                        <p className="text-sm leading-[1.381] text-app-text-dark-9">המכשיר שלך</p>
                        <p className="text-sm leading-[1.381] text-app-text-dark-9">גובה הזיכוי</p>
                      </header>

                      {/* Iphone Pricing List */}
                      <ul className="w-full">
                        {iphonePricingList.map(({ title, price }) => (
                          <li
                            key={title}
                            className="border-b border-[#d2d2d7] text-base md:text-[19px] font-semibold leading-[1.381] flex justify-between py-[15px]"
                          >
                            <span>{title}</span>
                            <span>{price}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Info */}
                      <p className="text-[14px] leading-[1.381] py-[15px]">
                        המחיר מתייחס למכשיר במצב תקין+ וללא שריטות, שברים, סדקים ובתפקוד תקין לגמרי.
                        <br />
                        גובה הזיכוי המקסימלי הקובע, יהיה גובה הזיכוי המקסימלי המפורסם במחירון הסניף, במועד בו מכשירכם הישן נמסר לסניף iStore.  
                      </p>
                  </TabsContent>

                  {/* Ipad Content */}
                  <TabsContent value="iPad">
                    <header className="flex items-center justify-between text-right">
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">המכשיר שלך</p>
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">גובה הזיכוי</p>
                    </header>

                    {/* Iphone Pricing List */}
                    <ul className="w-full">
                        {ipadPricingList.map(({ title, price }) => (
                          <li
                            key={title}
                            className="border-b border-[#d2d2d7] text-base md:text-[19px] font-semibold leading-[1.381] flex justify-between py-[15px]"
                          >
                            <span>{title}</span>
                            <span>{price}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Info */}
                      <p className="text-[14px] leading-[1.381] py-[15px]">
                        ניתן לבצע טרייד אין לדגמי iPad אשר הוכרזו לפני לא יותר מ-4 שנים.
                        <br />
                        גובה הזיכוי המקסימלי הקובע, יהיה גובה הזיכוי המקסימלי המפורסם במחירון הסניף, במועד בו מכשירכם הישן נמסר לסניף iStore.  
                      </p>
                  </TabsContent>

                  {/* MAC Content */}
                  <TabsContent value="Mac">
                    <header className="flex items-center justify-between text-right">
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">המכשיר שלך</p>
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">גובה הזיכוי</p>
                    </header>

                    {/* Iphone Pricing List */}
                    <ul className="w-full">
                        {macPricingList.map(({ title, price }) => (
                          <li
                            key={title}
                            className="border-b border-[#d2d2d7] text-base md:text-[19px] font-semibold leading-[1.381] flex justify-between py-[15px]"
                          >
                            <span>{title}</span>
                            <span>{price}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Info */}
                      <p className="text-[14px] leading-[1.381] py-[15px]">   
                        ניתן לבצע טרייד אין לדגמי Mac אשר הוכרזו לפני לא יותר מ-6 שנים.
                        <br />
                        גובה הזיכוי המקסימלי הקובע, יהיה גובה הזיכוי המקסימלי המפורסם במחירון הסניף, במועד בו מכשירכם הישן נמסר לסניף iStore.  
                      </p>
                  </TabsContent>

                  {/* Apple Watch Content */}
                  <TabsContent value="Apple Watch">
                    <header className="flex items-center justify-between text-right">
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">המכשיר שלך</p>
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">גובה הזיכוי</p>
                    </header>

                    {/* Iphone Pricing List */}
                    <ul className="w-full">
                        {appleWatchPricingList.map(({ title, price }) => (
                          <li
                            key={title}
                            className="border-b border-[#d2d2d7] text-base md:text-[19px] font-semibold leading-[1.381] flex justify-between py-[15px]"
                          >
                            <span>{title}</span>
                            <span>{price}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Info */}
                      <p className="text-[14px] leading-[1.381] py-[15px]">  
                        גובה הזיכוי המקסימלי הקובע, יהיה גובה הזיכוי המקסימלי המפורסם במחירון הסניף, במועד בו מכשירכם הישן נמסר לסניף iStore.
                      </p>
                  </TabsContent>

                  {/* Apple TV Content */}
                  <TabsContent value="Apple TV">
                    <header className="flex items-center justify-between text-right">
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">המכשיר שלך</p>
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">גובה הזיכוי</p>
                    </header>

                    {/* Iphone Pricing List */}
                    <ul className="w-full">
                        {appleTVPricingList.map(({ title, price }) => (
                          <li
                            key={title}
                            className="border-b border-[#d2d2d7] text-base md:text-[19px] font-semibold leading-[1.381] flex justify-between py-[15px]"
                          >
                            <span>{title}</span>
                            <span>{price}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Info */}
                      <p className="text-[14px] leading-[1.381] py-[15px]"> 
                       גובה הזיכוי המקסימלי הקובע, יהיה גובה הזיכוי המקסימלי המפורסם במחירון הסניף, במועד בו מכשירכם הישן נמסר לסניף iStore. 
                      </p>
                  </TabsContent>

                  {/* Apple TV Content */}
                  <TabsContent value="Intel">
                    <header className="flex items-center justify-between text-right">
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">המכשיר שלך</p>
                      <p className="text-sm leading-[1.381] text-app-text-dark-9">גובה הזיכוי</p>
                    </header>

                    {/* Iphone Pricing List */}
                    <ul className="w-full">
                        {intelPricingList.map(({ title, price }) => (
                          <li
                            key={title}
                            className="border-b border-[#d2d2d7] text-base md:text-[19px] font-semibold leading-[1.381] flex justify-between py-[15px]"
                          >
                            <span>{title}</span>
                            <span>{price}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Info */}
                      <p className="text-[14px] leading-[1.381] py-[15px]"> 
                       גובה הזיכוי המקסימלי הקובע, יהיה גובה הזיכוי המקסימלי המפורסם במחירון הסניף, במועד בו מכשירכם הישן נמסר לסניף iStore. 
                      </p>
                  </TabsContent>
                </div>
              </Tabs>
          </div>
        </div>
      </section>

      {/* Easy */}
      <section className="pt-[95px] mb-10 xl:pt-10 pb-[70px] direction-rtl">
        <div className="content-container">
          <h1 className="text-[33px] md:text-[39px] xl:text-[45px] leading-[1.12] -tracking-[.017em] w-4/5 mx-auto md:text-center font-semibold">זה כל כך פשוט לבצע Trade-in.</h1>

          {/* Grid Container */}
          <div className="mt-[30px] w-full max-w-[980px] grid grid-cols-1 xl:grid-cols-3 gap-5 mx-auto">
            {gridContent.map(({ imageSource, title, content }) => (
              <blockquote
                key={title}
                className="text-right pt-[50px] px-[37px] pb-[46px] bg-grey-100 rounded-[7px]"
              >
                <img 
                  src={imageSource}
                  alt={title}
                  className="w-[50px] h-[50px] mb-[15px] xl:w-[75px] xl:h-[75px] xl:mb-0"
                />
                <h4 className="text-[21px] md:text-[24px] xl:text-[29px] leading-[1.125] font-semibold -tracking-[.004em] text-app-text-dark-8">{title}</h4>
                <p className="text-[15px] leading-[1.45] tracking-[.011em] mt-2.5 text-app-text-dark-9">{content}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TradeIn;