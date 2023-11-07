import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  Icons,
  ProductDescriptionBannerLinkContainer,
  SEO,
  Tabs,
  TabsList
} from "../components";
import { accessoriesCarouselItems, accessoriesFeatures, acessoriesTabContent } from '../lib/constants/accessories.constants';
import { cn } from '../lib/utils';
import { TabsContent, TabsTrigger } from '@radix-ui/react-tabs';
import { Link } from 'react-router-dom';


const accessoriesTabs = ["חיפוש לפי קטגוריה", "חיפוש לפי מכשיר"];

function Accessories() {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [expandAccessoriesCategories, setExpandAccessoriesCategories] = useState(false);
  const collapsibleAccessoriesCategories = !expandAccessoriesCategories ? acessoriesTabContent["חיפוש לפי קטגוריה"].filter((_, index) => index > 9).reverse() : acessoriesTabContent["חיפוש לפי קטגוריה"].reverse();

  return (
    <>
      <SEO 
        title="גאדג'טים - אביזרי אלקטרוניקה נלווים למחשב"
        description="אביזרים למגוון מכשירי אפל וציוד אלקטרוני. גאדג'טים לבית חכם, ספורט, יצירה ועוד. אביזרים לאייפון, אייפד ואפל ווטש. היכנסו ורכשו ממגוון אביזרים באתר."
        keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
      />

      {/* Hero */}
      <section className='h-[400px] bg-grey-200'>
        <Carousel 
          itemsLength={accessoriesCarouselItems.length}
          activeCarouselIndex={activeCarouselIndex}
          setActiveCarouselIndex={setActiveCarouselIndex}
          indicatorClassName="bottom-[.3rem]"
          control="automatic"
          duration={10000}
        >
          {accessoriesCarouselItems.map(({ containerClassName, heading, content, links, imageSource }, index) => (
            <CarouselItem 
              key={heading}
              index={index}
              activeCarouselIndex={activeCarouselIndex}
              className="flex justify-center"
            >
              <div className={cn("w-full h-full flex direction-rtl relative z-30", containerClassName)}>
                {/* Content */}
                <div className="flex flex-col justify-center text-right z-20 bg-grey-200">
                  <h1 className="text-[44px] leading-[1.04167] font-semibold tracking-[.006em] pb-4">{heading}</h1>
                  {content && <p>{content}</p>}
                  <ProductDescriptionBannerLinkContainer 
                    links={links}
                    className="direction-ltr justify-end"
                  />
                </div>

                {/* Image */}
                <figure className={`w-full h-full absolute top-0 ${heading === "ממתק לעיניים על כף היד." ? "right-[550px]" : "right-[450px]"} -z-10`}>
                  <img 
                    src={imageSource}
                    alt={heading}
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </CarouselItem>
        ))}
        </Carousel>
      </section>

      {/* Accessories Categories */}
      <section className="mt-[84px] mb-[.2em] direction-rtl text-center flex flex-col items-center">
        <h1 className="leading-[1.2em] text-[37px] font-semibold tracking-[.011em]">מצאו את האביזרים שאתם מחפשים.</h1>

        {/* Tabs */}
        <div className="w-[87%] max-w-[890px] mt-[10px]">
          <Tabs defaultValue='חיפוש לפי קטגוריה' className='direction-rtl'>
            <TabsList className="w-full border-b border-[#d6d6d6] flex items-center gap-x-[30px]">
              {accessoriesTabs.map(tab => (
                <TabsTrigger 
                  key={tab}
                  value={tab}          
                  className="text-[#666] text-[18px] data-[state=active]:text-app-text-dark-8 data-[state=active]:border-b data-[state=active]:border-[#333] pb-3.5"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            <TabsContent 
              value='חיפוש לפי קטגוריה'
              className={`${!expandAccessoriesCategories ? "h-[270px] min-h-[325px]" : "h-max"} max-w-[1070px] w-full mb-4`}
            >
              <ProductDescriptionBannerLinkContainer 
                links={[{
                  title: "לרשימת כל האביזרים",
                  href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date",
                  variant: "secondary-text",
                  showIcon: true,
                  className: "md:text-base leading-[1.52947] -tracking-[.021em] text-center"
                }]}
                className="mt-2.5 direction-ltr justify-center my-[30px]"
              />

              {/* Accessories Categories */}
              <ul className="grid grid-cols-3 gap-y-9">
                  {collapsibleAccessoriesCategories.map(({ Icon, title, href }) => (
                    <Link 
                      to={`${href}`} 
                      className="group"
                      key={href}
                    >
                      <li 
                        key={title} 
                        className='flex items-center gap-x-8 pr-10'
                      >
                        <Icon className="h-[50px] w-[50px] leading-[0]" />
                        <span className="group-hover:text-secondary-300">{title}</span>
                      </li>
                    </Link>
                  ))}
              </ul>

              {/* Expand Accessories Categories Button */}
              <div className="mt-4 z-30 direction-rtl">
                <div className="relative before:block before:absolute before:top-1/2 before:right-0 before:w-full before:h-[1px] before:bg-[#d6d6d6] before:-z-40">
                  <p 
                    className="bg-white px-2 z-30 flex items-center gap-x-1.5 justify-center text-secondary-500 mx-auto w-max text-base leading-[1.52947] cursor-pointer select-none"
                    onClick={() => setExpandAccessoriesCategories(props => !props)}
                  >
                    <span>לצפיה בכל הקטגוריות</span>
                    <Icons.Cancel className="text-secondary-500 w-3.5 h-3.5" />
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-grey-100 pt-[84px] flex flex-col items-center">
        <h1 className="text-[37px] leading-[1.2em] mb-[.2em] font-semibold direction-rtl tracking-[0.011em]">אביזרים וגאדג'טים מומלצים</h1>

        <div className="w-[1080px] grid grid-cols-3 gap-[10px] my-[15px]">
          {accessoriesFeatures.map(({ imageSource, href, title, price, colors, className }) => (
            <Link 
              to={`${href && "/random"}`}
              className={`${className}`}
            >
              <blockquote className="h-full bg-grey-200 text-center pt-10 px-10 pb-[30px] flex flex-col items-center group">
                <img 
                  src={imageSource}
                  alt={title}
                  className='w-[300px] max-w-full h-auto'
                />

                {/* Content */}
                <div className="pt-14">
                  <h4 className="text-app-text-dark-8 text-[15px] leading-[1.47059] -tracking-[.021em] group-hover:text-secondary-500">{title}</h4>
                  <span className="mt-[7px] mb-3.5 text-[15px] leading-[1/53947] -tracking-[.021em] inline-block">{price}</span>

                  {/* Colors */}
                  {colors && (
                    <div className="w-full flex justify-center items-center pt-10 h-[17px] gap-x-1.5">
                      {colors.map(color => (
                        <div
                          key={color}
                          className='w-[14px] h-[14px] rounded-full shadow-productColors'
                          style={{ background: color }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </blockquote>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Accessories