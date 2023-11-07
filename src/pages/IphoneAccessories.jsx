import React from 'react'
import { ProductDescriptionBannerLinkContainer, SEO } from '../components'
import IphoneAccessoriesBannerLarge from "../assets/images/iphone_accessories_banner_large.avif";
import IphoneAccessoriesBannerSmall from "../assets/images/iphone_accessories_banner_small.avif";
import { Link } from 'react-router-dom';
import { accessoriesFeatures } from '../lib/constants/iphoneAccessories.constants';

const IphoneAccessories = () => {
  return (
    <>
        <SEO 
            title="אביזרים ל-iPhone"
            description="חברת iStore יבואנית מוצרי Apple בישראל משווקת מבחר אביזרים ל iPhone אייפון הכוללים כיסויים, אוזניות, כבלים, מתאמים מגני מסך ברמה הגבוהה ביותר ובמחירים מדהימים"
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        {/* Hero */}
        <section className="h-[300px] xs:h-[344px] lg:h-[400px] bg-grey-100 direction-rtl w-full overflow-hidden">
            <div className="w-full md:w-[640px] xl:w-[980px] mx-auto flex flex-col items-center lg:items-start lg:flex-row h-full px-2.5 mt-8 xs:px-[30px] xs:mt-11 sm:mt-[30px] lg:mt-0">
                {/* Content */}
                <div className="w-[240px] xl:w-[300px] self-center text-center lg:text-right mx-auto">
                    <h1 className="text-app-text-dark-8 text-[27px] sm:text-3xl lg:text-[40px] xl:text-[44px] leading-[1.04167] font-semibold tracking-[.006em] pb-[5px] lg:pb-[11px] xl:pb-4">חגיגת השקה.</h1>
                    <p className="text-[15px] lg:text-[17px] xl:text-[19px] leading-[1.4] font-light tracking-[.016em] pb-2">הכירו את מגוון האביזרים החדשים לדגמי ה-iPhone 13.</p>
                    <ProductDescriptionBannerLinkContainer 
                        links={[{
                            title: "הזמינו עכשיו",
                            href: "/אביזרים/אביזרים-לפי?dir=desc&iphone_compatibility=3978_3975_3977_3976&order=_open_date",
                            showIcon: true,
                            variant: "secondary-text",
                            className: "px-0 text-[15px] md:text-[15px] lg:text-[17px] xl:text-[19px] leading-[1.4] font-light tracking-[.016em] pb-2"
                        }]}
                        className="direction-ltr justify-center lg:justify-end"
                    />
                </div>

                {/* Image */}
                <figure className="w-full flex justify-center md:block md:w-iphoneAccessoriesHeroImageLaptop xl:w-iphoneAccessoriesHeroImage mt-[50px] sm:mt-[25px] sm:ml-[260px] mr-auto md:mr-0 lg:mt-[50px] lg:mr-[60px] lg:ml-0 xl:mt-[45px]">
                    <div className="w-[520px] lg:w-[700px]">
                        <picture>
                            <source 
                                srcset={IphoneAccessoriesBannerSmall} 
                                media="(min-width:768px)" 
                                className="w-full object-cover"
                            />

                            <source 
                                srcset={IphoneAccessoriesBannerLarge} 
                                media="(min-width:0px)" 
                                className="w-full object-cover"
                            />

                            <img 
                                src={IphoneAccessoriesBannerLarge}
                                alt="banner"
                                loading="lazy"
                                className="w-full object-cover"
                            />
                        </picture>
                    </div>
                </figure>
            </div>
        </section>

        {/* Features */}
        <section className="py-4 px-12 direction-rtl bg-grey-50">
            <div className="max-w-[60em] w-full mx-auto">
                <header className="text-center">
                    <h1 className="text-[x-large] font-bold">חיפוש לפי קטגוריות</h1>
                    <Link 
                        to="/אביזרים/אביזרים-לפי?dir=desc&iphone_compatibility=ALL&order=_open_date"
                        className="text-[small] font-bold p-2 text-black"
                    >
                        לרשימת כל האביזרים ל-iPhone לחץ כאן
                    </Link>
                </header>

                {/* Features Container */}
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center pt-2'>
                    {accessoriesFeatures.map(({ imageSource, title, href }) => (
                        <Link 
                            key={title}
                            to={`${href}`}
                            className="flex flex-col items-center text-black text-center font-bold p-2"
                        >
                            <img 
                                src={imageSource}
                                className="max-h-[70px] max-w-[70px] w-full object-cover"
                            />
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default IphoneAccessories