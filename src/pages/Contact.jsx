import React from 'react'
import { Link } from 'react-router-dom';
import { 
  SEO,
  Icons,
  ProductDescriptionBannerLinkContainer
} from '../components';
import { contactDetails, contactStoreContent } from '../lib/constants/contact.constants';
import { companyPhoneLine, companyPhoneLine2 } from '../lib/constants';
import ContactTradeInBannerImage from "../assets/images/contact_us_tradein_banner.avif";

function Contact() {
  return (
    <>
      <SEO 
        title="צור קשר עם שירות הלקוחות שלנו"
        description="iStore משווקת רשמית למוצרי Apple בישראל. אנחנו כאן כדי להעניק לכם את המוצרים הטובים ביותר עם שירות ברמה הגבוהה ביותר! "
        keywords="צור קשר
        מכירה
        שירות לקוחות
        טלפון
        סניפים
        שעות פעילות
        מדריכים
        שירות וסניפים
        About
        Sale
        Phone
        Store
        Hour
        Open
        Time
        Help
        עזרה"
      />

      {/* Hero */}
      <section className='pt-[120px] pb-[100px] overflow-hidden'>
        <div className="content-container direction-rtl">
          <h1 className="-tracking-[.005em] font-semibold text-center text-4xl">צור קשר - שירות לקוחות</h1>
          
          {/* Content */}
          <div className='mt-[15px] space-y-1 text-center'>
            <h2 className="-tracking-[.004em] text-lg">iStore מעמידה שירותי תמיכה ומעבדה על מנת לספק שירות איכותי ללקוחותיה.</h2>
            <p className="font-semibold text-lgt -tracking-[.004em]">בכל שאלה ניתן לפנות למוקד שירות הלקוחות.</p>
          </div>
        </div>
      </section>

      {/* Call center */}
      <section className="direction-rtl pt-[120px] pb-[100px] bg-grey-100">
        <div className='content-container'>
          {/* Contact */}
          <div className='flex-1 grid grid-cols-2 gap-x-4 gap-y-8 max-w-full'>
            {/* Summary Content */}
            <div className="space-y-[20px]">
              <h2 className="text-[21px] font-semibold -tracking-[.00562em] leading-[1.2em]">שעות פעילות המוקד</h2>

              {/* Summary Content Container */}
              <div>
                <h3 className="text-base font-semibold -tracking-[.00562em] underline">שירות לקוחות</h3>

                {/* Summary Content */}
                <div className="text-base -tracking-[.00562em] mt-[5px] flex items-center gap-x-1">
                  <p className="font-semibold">ראשון - חמישי</p>
                  9:00-16:00
                </div>
              </div>

              {/* Summary Content Container */}
              <div>
                <h3 className="text-base font-semibold -tracking-[.00562em] underline">מכירה</h3>

                {/* Summary Content */}
                <div className="text-base -tracking-[.00562em] mt-[5px] flex items-center gap-x-1">
                  <p className="font-semibold">ראשון - חמישי</p>
                  9:00-17:00
                </div>
              </div>
            </div>

            {/* Summary Content */}
            <div className="space-y-[20px]">
              <h2 className="text-[21px] font-semibold -tracking-[.00562em] leading-[1.2em]">דרכי התקשרות</h2>

              {/* Summary Content Container */}
              <div>
                <h3 className="text-base font-semibold -tracking-[.00562em] underline">שירות לקוחות</h3>

                {/* Summary Contact Links */}
                <div className="text-base -tracking-[.00562em] mt-[5px] flex flex-col gap-y-[5px]">
                  {contactDetails.map(({ title, href, Icon, props }) => (
                    <Link 
                      key={title}
                      to={href}
                      {...props}
                      className="text-secondary-500 text-base w-max -tracking-[.00562em] hover:underline flex items-center gap-x-[5px]"
                    >
                      <Icon className="w-4 max-w-[unset] stroke-app-text-dark" />
                      {title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Summary Content Container */}
              <div>
                <h3 className="text-base font-semibold -tracking-[.00562em] underline">מכירות</h3>

                {/* Summary Contact Links */}
                <div className="text-base -tracking-[.00562em] mt-[5px]">
                  <Link 
                    to={`tel:${companyPhoneLine}`}
                    target='_blank'
                    className="text-secondary-500 text-base w-max -tracking-[.00562em] hover:underline flex items-center gap-x-[5px]"
                  >
                    <Icons.Phone className="w-4 max-w-[unset] text-app-text-dark" />
                    {companyPhoneLine}
                  </Link>
                </div>
              </div>
            </div>

            {/* Summary Content */}
            <div className="col-span-full">
              <h3 className="text-base font-semibold -tracking-[.00562em] underline">שימו לב</h3>

              {/* Summary Content */}
              <p className="font-light text-base -tracking-[.00562em] mt-[5px] flex items-center gap-x-1.5">
                לפניות בנושאים הקשורים ל-App Store, נעילת מכשירים, אובדן סיסמה וכו' - אנא פנו ישירות למוקד התמיכה של Apple הזמינים במספר
              
                <Link 
                  to={`tel:${companyPhoneLine2}`}
                  target='_blank'
                  className="text-secondary-500 text-base -tracking-[.00562em] hover:underline flex items-center gap-x-[5px] font-normal"
                >
                  {companyPhoneLine2}.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store */}
      <section className="direction-rtl pt-[120px] pb-[100px]">
        <div className="content-container">
          <h2 className="-tracking-[.005em] font-semibold text-center text-4xl">שעות פעילות ורשימת סניפי הרשת</h2>

          {/* Store Content */}
          <div className="mt-[40px] flex flex-wrap gap-x-[12%] gap-y-[50px]">
            {/* Store Feature Item */}
            {contactStoreContent.map(({ imageSource, href, title, content }) => (
              <blockquote 
                key={title}
                className="bg-grey-200 rounded-[7px] overflow-hidden transition-transform duration-700 hover:scale-105"
              >
                <Link to={`${href}`}>
                  <figure className="h-[135px]">
                    <img 
                      src={imageSource}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  {/* Content */}
                  <div className="py-10 px-5">
                    <h3 className="text-[18px] font-semibold mb-3 text-app-text-dark-9">{title}</h3>
                    <p className="text-[15px] leading-[1.2em] text-[#6e6e73]">
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
                </Link>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Come to us section */}
      <section className='direction-rtl pt-[120px] pb-[100px] bg-gradient-to-tr from-grey-100 to-grey-200'>
        <div className="content-container">
          <header className='text-center'>
            <h1 className="text-4xl font-semibold -tracking-[.00562em] leading-[1.2em]">בואו לחוות את המיטב של Apple אצלנו בסניפים.</h1>
            <p className="mt-4 -tracking-[.00458em] text-[18px] leading-[1.2em]">רכשו ממגוון המוצרים או קבלו ייעוץ מקצועי באופן אישי מהמומחים שלנו.</p>
          </header>

          {/* Card Content Container */}
          <div className="mt-[50px] grid grid-cols-2 gap-[50px]">
            {/* Card Content */}
            <blockquote className='flex flex-col items-center justify-center p-[55px] text-center bg-white rounded-lg min-h-[394px]'>
              <Icons.Location className="w-[78px] h-[78px] mb-5" />
              
              {/* Content */}
              <div className="space-y-[15px]">
                <h3 className="text-[25px] font-semibold leading-[1.5em] tracking-[.00378em]">בצעו הזמנה Online ואנו נכין לכם אותה לאיסוף מהיר בסניף.</h3>
              </div>
            </blockquote>

            {/* Card Content */}
            <blockquote className='flex flex-col items-center justify-center p-[55px] text-center bg-white rounded-lg min-h-[394px]'>
              <Icons.Calendar className="w-[78px] h-[78px] mb-5" />
              
              {/* Content */}
              <div className="space-y-[15px]">
                <h3 className="text-[25px] font-semibold leading-[1.5em] tracking-[.00378em]">תאמו פגישה עם נציג מכירות אחד על אחד.</h3>
                <ProductDescriptionBannerLinkContainer 
                  links={[{
                    title: "לתיאום פגישת מכירה",
                    href: "/שירות-לקוחות/pick-up",
                    variant: "secondary-text",
                    showIcon: true,
                    className: "text-xl leading-[1.5em] tracking-[.00378em]"
                  }]}
                  className="direction-ltr justify-center"
                />
              </div>
            </blockquote>

            {/* Card Content */}
            <blockquote className="col-span-full grid grid-cols-2 items-center text-center bg-white rounded-lg min-h-[394px]">
              {/* Content */}
              <div className="p-[55px]">
                <h3 className="text-[17px] font-semibold leading-[1.5em] tracking-[.00378em] mb-[10px]">iStore Trade In</h3>
                <h5 className="text-[25px] font-semibold leading-[1.5em] tracking-[.00378em] mb-4">הפכו את המכשיר שיש לכם למכשיר שאתם רוצים.</h5>
                <ProductDescriptionBannerLinkContainer 
                  links={[{
                    title: "בואו לגלות כמה זה שווה",
                    href: "/trade-in",
                    variant: "secondary-text",
                    showIcon: true,
                    className: "text-xl leading-[1.5em] tracking-[.00378em]"
                  }]}
                  className="direction-ltr justify-center"
                />
              </div>

              {/* Imafe */}
              <img 
                src={ContactTradeInBannerImage}
                alt="contact tradein"
                className="w-full h-full object-cover"
              />
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;