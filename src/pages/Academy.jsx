import React, { useState } from 'react'
import { Carousel, CarouselItem, ProductDescriptionBannerLinkContainer, SEO } from '../components'
import { academyGallery } from '../lib/constants/academy.constants';

const Academy = () => {
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

    return (
        <>
            <SEO 
                title="iStore Academy | הדרכות על מגוון מוצרי אפל"
                description="בואו ללמוד, ליצור ולקבל השראה מצוות המומחים של אייסטור על השימוש במוצרי אפל. הכירו טוב יותר את המוצרים שברשותכם וגלו בהם תכונות שלא הכרתם. הצטרפו עוד היום לסדנאות מהמוחים של אפל"
                keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
            />

            {/* Hero */}
            <section className="bg-grey-100 pt-12 pb-16 xs:pt-[70px] xs:pb-20 md:pt-20 md:pb-[90px] xl:pt-[100px] xl:pb-[120px] direction-rtl">
                <div className="content-container text-right items-start md:text-center flex flex-col md:items-center">
                    <h1 className="text-[18px] md:text-xl xl:text-2xl font-semibold tracking-[.006589em] text-app-text-dark-8 mb-[.2em]">iStore Academy</h1>
                    <h5 className="text-[32px] tracking-[.004589em] xs:w-[91.66667%] md:text-[38px] md:tracking-[.003589em] xl:text-[45px] font-semibold mt-2.5 text-app-text-dark-8 leading-[1.3em] xl:tracking-[.004589em] md:w-[58.33333%] mb-[.2em]">האקדמיה ללימוד מוצרי Apple בישראל.</h5>
                    <p className="text-app-text-dark-8 text-[15px] -tracking-[.002559em] xs:w-[91.66667%] md:text-base md:-tracking-[.00582em] xl:text-lg mt-5 xl:-tracking-[.002559em] leading-6 md:w-[66.66667%]">בואו ללמוד, ליצור ולקבל השראה מצוות המומחים של iStore על השימוש במוצרי Apple. הכירו טוב יותר את המוצרים שברשותכם וגלו בהם תכונות שלא הכרתם. החל מצעדים ראשונים על מחשבי ה-Mac ועד לצלם בעזרת ה-iPhone כמו צלם מקצועי — יש לנו בדיוק את ההדרכה שתעזור לכם להפיק את המירב מכל מכשירי Apple שברשותכם.</p>

                    {/* Links */}
                    <ProductDescriptionBannerLinkContainer 
                        links={[
                            {
                                title: "לרשימת ההדרכות",
                                href: "https://c.istoreil.co.il/iframe/appointment/Instructor",
                                showIcon: true,
                                variant: "secondary-text", 
                                className: "md:text-base p-0"
                            }
                        ]}
                        className="direction-ltr mt-[.8em]"
                    />
                </div>
            </section>

            {/* Academy Gallery */}
            <section className="h-[959px] md:h-[280px] lg:h-[328px] xl:h-[410px] bg-app-text-dark-8">
                <Carousel
                    activeCarouselIndex={activeCarouselIndex}
                    setActiveCarouselIndex={setActiveCarouselIndex}
                    itemsLength={academyGallery.length}
                    indicatorClassName="bottom-[5px]"
                    indicatorType="square"
                    duration={2000}
                >
                    {academyGallery.map(({ imageSource, title, description, terms, links }, index) => (
                        <CarouselItem 
                            key={title}
                            index={index}
                            activeCarouselIndex={activeCarouselIndex}
                        >
                            <blockquote className='h-full relative direction-rtl'>
                                <figure
                                    className="w-full h-full"
                                    style={{
                                        background: `url(${imageSource})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                />
                                
                                {/* Content */}
                                <div 
                                    className="absolute bottom-0 right-0 w-full h-full  text-grey-100"
                                    style={{ background: "linear-gradient(0deg, #000a, #0000)" }}
                                >
                                    <div className="h-full content-container pb-10 text-right flex flex-col justify-end">
                                        <h2 className="text-[23px] leading-[1.1em] md:leading-[inherit] md:text-3xl mb-2 -tracking-[.002559em] text-inherit font-semibold">{title}</h2>
                                        <p className="text-[15px] md:text-lg mt-[5px] -tracking-[.002559em]">{description}</p>
                                        <p className="text-[12px] md:text-sm mt-[5px] -tracking-[.002559em] text-[#bebebe]">{terms}</p>
                                        <ProductDescriptionBannerLinkContainer 
                                            links={links}
                                            className="direction-ltr mt-[.8em] justify-end"
                                        />
                                    </div>
                                </div>
                            </blockquote>
                        </CarouselItem>
                    ))}
                </Carousel>
            </section>
        </>
    )
}

export default Academy