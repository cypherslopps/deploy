import React from 'react'
import { 
  ChapterItemCollection, 
  SEO, 
  ProductDescriptionBanner, 
  Tabs, 
  TabsList,
  IkCompareGalleryContainer, 
  ProductDescriptionBannerLinkContainer,
  TabsTrigger,
  TabsContent,
} from '../components'
import { 
  macChapters, 
  maBookAirContent, 
  macbookStudioContent, 
  macTabContent, 
  macIStoreList 
} from '../lib/constants/mac.constants';
import MacSwitchBannerSmall from "../assets/images/mac_switch_banner_small.avif";

const macTabs = ["ניידים", "שולחניים"]

function Mac() {
  return (
    <>
      <SEO 
        title="דגמי Mac של אפל לרכישה אונליין"
        description="כל דגמי Mac של אפל לרכישה אונליין באתר iStore. מגוון מחשבי מקבוק MacBook איכותיים ועוצמתיים הכוללים את שבב ה- M2 לחווית שימוש יוצאת דופן. היכנסו כעת לרכישה מק."
        keywords="מק
        מחשב
        מאק
        מאקבוק
        מקבוק
        Mac 
        MacBook
        Computer
        פרו
        Pro
        Air
        אייר"
      />

      {/* Chapter Collection */}
      <ChapterItemCollection chapters={macChapters} />

      {/* Macbook Air Product Description Banner */}
      <ProductDescriptionBanner 
        {...maBookAirContent}
      />

      <main className='bg-grey-200 pt-2.5 grid gap-y-2.5'>
        {/* Macbook Studio Product Description Banner */}
        <ProductDescriptionBanner 
          {...macbookStudioContent}
        />

        {/* Price Section */}
        <section className="bg-white py-8 direction-rtl">
          <div className='bg-grey-50 pt-6'>
            <div className="py-[90px] text-right overflow-hidden md:py-[68px] lg:py-[120px] w-[87.5%] md:w-[88%] xl:w-[980px] mx-auto">
              <h1 className='font-semibold text-app-text-dark-9 text-center md:text-[40px] md:leading-[1.1] md:tracking-normal lg:text-[48px] lg:leading-[1.08349] lg:-tracking-[.004em]'>איזה Mac מתאים לכם?</h1>

              {/* Tabs */}
              <Tabs defaultValue="ניידים" className='direction-rtl flex flex-col items-center mt-2.5'>
                <TabsList className='border-b border-[#d2d2d7] inline-block mb-16'>
                  {macTabs.map(tab => (
                    <TabsTrigger 
                      key={tab}
                      value={tab}
                      className={`pb-2 text-[#d2d2d7] data-[state=active]:text-black data-[state=active]:border-b data-[state=active]:border-black ${tab === "שולחניים" ? "mr-[60px]" : ""} text-[20px] px-0 font-medium leading-[1] -tracking-[.021em]`}
                    >{tab}</TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="ניידים" className="w-full">
                  <IkCompareGalleryContainer gallery={macTabContent["ניידים"]} />
                </TabsContent>
                <TabsContent value="שולחניים" className="w-full">
                  <IkCompareGalleryContainer gallery={macTabContent["שולחניים"]} />
                </TabsContent>
              </Tabs>

              {/* Student Check */}
              <div className="mt-11">
                <ProductDescriptionBannerLinkContainer 
                  links={[{
                    title: "סטודנטים? בדקו את זכאותכם להטבה",
                    href: "/customer/student/register/",
                    variant: "secondary-text",
                    showIcon: true,
                    className: "md:text-[15px]"
                  }]}
                  className='justify-center direction-ltr'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skywalker Section */}
        <section className="py-3 bg-white -mt-2.5">
          <div className="min-h-[500px] my-[30px] mx-[2.08333%] bg-grey-200 grid grid-cols-2 gap-x-[2.08333%]">
            {/* Image */}
            <div className="flex justify-center">
              <figure className="w-[600px]">
                <picture>
                  <img 
                    src={MacSwitchBannerSmall}
                    alt="mac switch"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </figure>
            </div>

            {/* Content */}
            <div className='flex flex-col items-center justify-center text-center'>
              <h5 className="text-[21px] leading-[1.19048] font-semibold text-app-text-dark-9 mb-[.4em]">Switch to Mac</h5>
              <h1 className="text-[43px] leading-[1.125] font-semibold -tracking-[.008em] text-app-text-dark-9">Mac makes it simple.</h1>
              <p className="max-w-[500px] mt-5 leading-[1.47059] -tracking-[.0022em] direction-rtl">אותן האפליקציות האהובות שאתם מכירים ואוהבים עובדות על גבי ה-Mac Microfost 365, Zoom, Photoshop, ו-Slack. תוכנית Trade-in משתלמת למחשבי Mac ו-PC. מערך הדרכות ללא עלות שיעזור לכם לעשות את הצעדים הראשונים על ה-Mac החדש. מגוון אפשרויות תשלום נוחות ועוד!</p>
              <ProductDescriptionBannerLinkContainer 
                links={[{
                  title: "לפרטים נוספים",
                  href: "/switch-to-mac",
                  variant: "secondary-text",
                  showIcon: true,
                }]}
                className="justify-center mt-[19px]"
              />
            </div>
          </div>
        </section>

        {/* IStore section */}
        <section className="py-[90px] bg-white -mt-2.5">
          <div className="max-w-[1024px] px-[22px] mx-auto">
            <h2 className="text-[50px] font-extrabold text-right leading-[1.2em] direction-rtl">עוד סיבות לרכוש Mac ב-iStore.</h2>

            {/* IK Flex Collection Container */}
            <div className="mt-[45px] pl-[50px] grid grid-cols-3 gap-x-[50px] gap-y-[45px]">
              {macIStoreList.map(({ heading, Icon, content, info, links }) => (
                <blockquote key={heading} className="direction-rtl">
                  <Icon className="h-[50px] mb-[15px]" />

                  {/* Content */}
                  <div className='mt-[30px]'>
                    <h4 className="text-[1.4em] leading-[1.2em] font-semibold text-black">{heading}</h4>
                    <p className="text-[18px] mt-[.8em] leading-[1.4em] -tracking-[.0158em] text-app-text-dark-8">{content}</p>
                    {info && <span className='text-[14px] text-[#727272] leading-[1.4em] mt-[.8em] inline-block'>{info}</span>}
                    {links && (
                      <ProductDescriptionBannerLinkContainer 
                        links={links}
                        className="mt-[15px] direction-ltr justify-end"
                      />
                    )}
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Mac