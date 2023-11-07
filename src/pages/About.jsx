import React, { useState } from 'react';
import { SEO } from "../components";
import AboutDesktop from "../assets/images/about_category_1.jpg";
import AboutMobile from "../assets/images/about_category_2.jpg";
import { Link } from 'react-router-dom';
import MobileProductFIlterBox from '../components/MobileProductFIlterBox';
import usePath from '../hooks/usePath';

const About = () => {
  const { activePath } = usePath("about");
  const [toggleDD, setToggleDD] = useState(false);

  return ( 
    <>
      <SEO 
        title="אודות"
        description="מעוניינים לרכוש ממגוון מוצרי אודות במחיר משתלם ברשת  iStore ? הזמינו עכשיו online באתר או צרו עמנו קשר במספר 0732130507 אנחנו כאן לשירותכם!"
        keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
      />  

      {/* Hero */}
      <section className="h-max relative">
        {/* Images */}
        <div>
          <img 
            src={AboutDesktop}
            alt="אודות"
            className="w-full object-cover hidden md:block"
          />
          <img 
            src={AboutMobile}
            alt="אודות"
            className="w-full object-cover block md:hidden"
          />
        </div>

        {/* Description */}
        <div className="w-full h-full absolute top-0 left-0 py-3.5 lg:py-4 px-12">
          <div className="py-4 lg:py-8 text-center direction-rtl">
            <h1 className='font-light leading-[1.2em] mb-[.35em] text-[1.3rem] md:text-[1.4rem] lg:text-[1.65em]'>אודות</h1>
            <p className='text-[11px] lg:text-[13.2381px] font-light'>קצת על iStore</p>
          </div>
        </div>
      </section>

      {/* Mobile Product Filter Box */}
      <MobileProductFIlterBox 
        data={{
          "מיון לפי: אודות": ["אמנת השירות"]
        }}
        className='justify-center pt-5 mb-3'
      />

      {/* Layered Nav */}
      <section className="wrapper p-2 text-center direction-rtl hidden md:block">
        <div className="w-[25%] xl:w-1/5 p-4 mx-auto">
          <div className="text-[.96rem] xl:text-base font-light text-right">
            <dt className="py-4 border-b border-[#ddd]" onClick={() => setToggleDD(prop => !prop)}>
					    <div className="inline padding_v w_100">אודות</div>
				    </dt>
					  <dd className={`${toggleDD ? "h-auto py-4 opacity-1 visible" : "h-0 opacity-0 invisible"} text-[.96rem] xl:text-base transition-all duration-300 select-none`}>
              <Link 
                to="/about/אמנת-השירות" 
                className={`text-base ${activePath === "/אמנת-השירות" ? "font-bold" : ""}`}
                title="אמנת השירות"
              >
                אמנת השירות
              </Link>
            </dd>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="text-right w-3/4 xl:w-4/5 mx-auto direction-rtl py-8 px-2 space-y-1">
        <p className='text-[.92rem] xl:text-base font-light'>iStore (סער טכנולוגיות (ז.ח) בע״מ, 514632561) הינה המשווקת הרשמית למוצרי Apple בישראל והחנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת לApple.</p>
        <p className='text-[.92rem] xl:text-base font-light'>כבר משנת 2007 iStore היא החנות המובילה בארץ בתחום מוצרי Apple בחדשנות, בשירות, באיכות ובמחיר.</p>
        <p className='text-[.92rem] xl:text-base font-light'>iStore חרטה על דגלה את דגל החדשנות במגוון ובמבחר המוצרים ובדגש על מוצרי Apple השונים וזמינותם לקהל הישראלי בזמן מינימלי מיום השקתם בעולם.</p>
        <p className='text-[.92rem] xl:text-base font-light'>ב-iStore תמצאו מענה ללקוחות פרטיים ועסקיים, עם אחריות ושירות למוצרים שנרכשו ב-iStore יחד עם שירות תיקוני חומרה ותוכנה למוצרי Apple השונים. בכל שנות קיומה iStore מחוייבת למחיר האטרקטיבי בישראל.</p>
        <p className='text-[.92rem] xl:text-base font-light'>iStore מציעה לכם את המגוון הרחב ביותר לאביזרים משלימים מהמתוגים החמים ביותר אשר יתנו לכם מענה בכל תחום אשר תעסקו בו - החל משימוש פרטי ועסקי עד להפקות ענק.</p>
      </section>
    </>
  )
}

export default About