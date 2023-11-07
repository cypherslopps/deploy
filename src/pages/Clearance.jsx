import React from 'react';
import { SEO } from '../components';
import IStoreHeroImage from "../assets/images/istore_clearance_hero.avif";
import { devices, offers } from '../lib/constants/clearance.constants';
import { Link } from 'react-router-dom';

const Clearance = () => {
  return (
    <>
        <SEO 
            title="iStore Clearance | מכירת עודפים"
            description="הנחות ענק על מגוון מוצרי הרשת ועודפים."
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />
        
        {/* Hero */}
        <section className="pt-[50px] pb-10 xl:py-[90px] bg-grey-100">
            <div className="content-container text-center flex flex-col items-center">
                {/* Content */}
                <div className='space-y-3 w-full'>
                    <h1 className="text-tertiary-500 text-[27px] xl:text-[32px] -tracking-[.01359em] leading-[1] font-semibold">iStore Clearance</h1>
                    <p className="text-[15px] xl:text-[17px] -tracking-[.01359em] leading-[1.2] mx-auto w-[66.66666%] direction-rtl">מוצרים חדשים במחירי סוף עונה.</p>
                </div>

                <figure className="mt-[30px] w-[280px] h-[114px] md:mt-[60px] md:w-[450px] md:h-[184px] xl:mt-20 xl:w-[600px] xl:h-[246px]">
                    <img 
                        src={IStoreHeroImage}
                        alt="מוצרי אפל חדשים במחירי סוף עונה"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </section>

        {/* Device */}
        <section className="py-10 xl:py-[60px] text-app-text-dark-8 direction-rtl">
            <div className="content-container text-center flex flex-col items-center">
                <h3 className="text-[22px] xl:text-[25px] font-semibold leading-[1]">חפשו לפי מכשיר</h3>

                {/* Device Container */}
                <div className="flex flex-wrap gap-6 mt-[30px] mb-[15px]">
                    {devices.map(({ title, Icon, href }) => (
                        <Link
                            key={title}
                            to={`${href}`}
                            className='text-center text-[15px] min-w-[63px] text-app-text-dark-8 flex flex-col items-center gap-y-[5px] hover:text-secondary-500 transition-colors duration-150'
                        >
                            <Icon className={`${title === "Watch" ? "w-[70px] h-[60px]" : "w-[60px] h-[60px]"}`} />
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        {/* Offsers */}
        <section className="py-10 xl:py-[60px] bg-grey-100 direction-rtl">
            <div className="content-container">
                <h3 className="text-[22px] xl:text-[25px] font-semibold leading-[1] text-center">הצעות מומלצות</h3>

                {/* Offers Container */}
                <div className="flex flex-wrap gap-5 justify-center mt-5 min-h-[100px]">
                    {offers.map(({ title, stamp, description, imageSource, href, price, backPrice }) => (
                        <Link
                            key={title}
                            to={`${href}`}
                            className="max-w-[90%] w-[90%] xs:max-w-[83.33333%] xs:w-[83.33333%] rounded-xl xl:max-w-[30%] xl:w-[30%] bg-white p-[30px] xl:rounded-[15px]"
                        >
                            <blockquote className="group grid gap-y-2.5">
                                <figure className="relative flex justify-center">
                                    <img 
                                        src={imageSource}
                                        alt={description}
                                        className={`${description === "אייפד פרו" ? "h-[170px] xl:h-[200px] mb-4" : "w-[170px] h-[170px] xl:w-[230px] xl:h-[230px]"} object-cover`}
                                    />

                                    {/* Stamp */}
                                    {stamp && (
                                        <div className='absolute top-0 right-0'>
                                            <img 
                                                src={stamp}
                                                alt="אוזניות מתנה לרוכשים"
                                                className="w-[80px] h-[80px] object-cover"
                                            />
                                        </div>
                                    )}
                                </figure>

                                {/* Content */}
                                <div className="grid gap-y-[.6em] text-center mt-2.5">
                                    <h3 dangerouslySetInnerHTML={{__html: title}} className="group-hover:text-secondary-500 text-[15px] font-bold -tracking-[.007em] transition-colors duration-150" />
                                    <span className="text-[15px] -tracking-[.007em] inline-block">{price}</span>
                                    {backPrice && (
                                        <span dangerouslySetInnerHTML={{ __html: backPrice }} className="text-[12px]" />
                                    )}
                                </div>
                            </blockquote>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Clearance