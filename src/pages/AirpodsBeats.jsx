import React from 'react'
import { ChapterItemCollection, SEO } from '../components';
import { 
  airpodChapters, 
  airpod3rdGenerationBannerContent, 
  airpodMaxContent, 
  airpod2rdGenerationBannerContent 
} from '../lib/constants/airpod.constants';
import { Link } from 'react-router-dom';
import { buttonVariants } from '../components/ui/Button';
import { cn } from '../lib/utils';

function AirpodsBeats() {
  return (
    <>
      <SEO 
        title="אוזניות איירפודס | AirPods"
        description="אוזניות איירפודס של Apple ואוזניות ביטס במגוון דגמים לחוויית סאונד משודרגת ומותאמת בדיוק בשבילכם. היכנסו ובחרו AirPods אלגנטיות או Beats מעוצבות."
        keywords="AirPods 
        איירפודס
        אירפודס
        music
        מוזיקה
        אוזניות"
      />

      <ChapterItemCollection chapters={airpodChapters} /> 

      {/* Airpod Main Container */}
      <main className="overflow-hidden grid gap-y-3 max-w-[1580px] px-[30px]">
        {/* Airpod 3rd Generation Banner  */}
        <section className='bg-grey-250 rounded-2.2xl min-h-[600px] xl:min-h-[700px] relative flex items-center justify-center overflow-hidden'>
          {/* Banner Background */}
          <figure 
            className="absolute top-0 left-1/2 w-[62%] mx-auto -mt-[8.5rem]"
            style={{ transform: "translateX(-50%)" }}
          >
            <picture>
              <source 
                srcSet={airpod3rdGenerationBannerContent.images.mobile} 
                media="(max-width: 0)"
                className='w-full h-full object-cover'
              />
              <source 
                srcSet={airpod3rdGenerationBannerContent.images.tablet}
                media="(max-width: 767px)"
                className='w-full h-full object-cover'
              />
              <source 
                srcSet={airpod3rdGenerationBannerContent.images.desktop} 
                media="(min-width: 1199px)"
                className='w-full h-full object-cover'
              />
              <img 
                loading="lazy" 
                alt="אוזניות איירפודס סדרה 2" 
                src={airpod3rdGenerationBannerContent.images.mobile} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>

          {/* Banner Content  Container*/}
          <div className='flex flex-col items-center z-40 mt-28'>
            <h1 className="mt-7 mb-1 text-[84px] leading-[.96] -tracking-[.0015em] xl:text-[6.5rem] xl:leading-[1.1] xl:-letter-spacing-[.0018em] font-bold">{airpod3rdGenerationBannerContent.title}</h1>

            {/* Pricing And SubTitle */}
            <div className="mt-8 xl:mt-[.8rem] flex flex-col items-center gap-y-2 text-center">
              <p className="text-[19px] tracking-[.011em] font-bold">{airpod3rdGenerationBannerContent.subTitle}</p>
              <span className="text-[19px] tracking-[.011em]">{airpod3rdGenerationBannerContent.price}</span>
            </div>

            {/* Link */}
            <Link
              to={`${airpod3rdGenerationBannerContent.link.href}`}
              title={airpod3rdGenerationBannerContent.link.title}
              className={cn(buttonVariants({ variant: airpod3rdGenerationBannerContent.link.variant, size: "link" }), "rounded-full mt-36")}
            >
              {airpod3rdGenerationBannerContent.link.title}
            </Link>
          </div>
        </section>

        {/* Airpod Max Banner  */}
        <section className='bg-grey-250 rounded-2.2xl min-h-[700px] relative flex items-center justify-center overflow-hidden z-20'>
          {/* Banner Background */}
          <figure 
            className="absolute top-1/2 left-1/2 w-[44%] mx-auto"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <picture>
              <source 
                srcSet={airpodMaxContent.images.mobile} 
                media="(max-width: 0)"
                className='w-full h-full object-cover'
              />
              <source 
                srcSet={airpodMaxContent.images.tablet}
                media="(max-width: 767px)"
                className='w-full h-full object-cover'
              />
              <source 
                srcSet={airpodMaxContent.images.desktop} 
                media="(min-width: 1199px)"
                className='w-full h-full object-cover'
              />
              <img 
                loading="lazy" 
                alt="אוזניות איירפודס סדרה 2" 
                src={airpodMaxContent.images.mobile} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>

          {/* Banner Content  Container*/}
          <div className='flex flex-col items-center -z-10 mt-36'>
            <h1 className="mt-7 mb-1 text-[11rem] font-bold">{airpodMaxContent.title}</h1>

            {/* Pricing And SubTitle */}
            <span className="-mt-5 text-[19px] tracking-[.011em]">{airpodMaxContent.price}</span>

            {/* Link */}
            <Link
              to={`${airpodMaxContent.link.href}`}
              title={airpodMaxContent.link.title}
              className={cn(buttonVariants({ variant: airpodMaxContent.link.variant, size: "link" }), "rounded-full mt-40")}
            >
              {airpodMaxContent.link.title}
            </Link>
          </div>
        </section>

        {/* Airpod 3rd Generation Banner  */}
        <section className='bg-grey-250 rounded-2.2xl min-h-[700px] relative flex items-center justify-center overflow-hidden'>
          {/* Banner Background */}
          <figure 
            className="absolute top-4 left-1/2 w-1/2 mx-auto"
            style={{ transform: "translateX(-50%)" }}
          >
            <picture>
              <source 
                srcSet={airpod2rdGenerationBannerContent.images.mobile} 
                media="(max-width: 0)"
                className='w-full h-full object-cover'
              />
              <source 
                srcSet={airpod2rdGenerationBannerContent.images.tablet}
                media="(max-width: 767px)"
                className='w-full h-full object-cover'
              />
              <source 
                srcSet={airpod2rdGenerationBannerContent.images.desktop} 
                media="(min-width: 1199px)"
                className='w-full h-full object-cover'
              />
              <img 
                loading="lazy" 
                alt="אוזניות איירפודס סדרה 2" 
                src={airpod2rdGenerationBannerContent.images.mobile} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>

          {/* Banner Content  Container*/}
          <div className='flex flex-col items-center z-40 mt-32'>
            <h1 className="mt-7 mb-1 text-[6.5rem] font-bold">{airpod2rdGenerationBannerContent.title}</h1>

            {/* Pricing And SubTitle */}
            <div className="mt-[.8rem] flex flex-col items-center gap-y-2">
              <p className="text-[19px] tracking-[.011em] font-bold">{airpod2rdGenerationBannerContent.subTitle}</p>
              <span className="text-[19px] tracking-[.011em]">{airpod2rdGenerationBannerContent.price}</span>
            </div>

            {/* Link */}
            <Link
              to={`${airpod2rdGenerationBannerContent.link.href}`}
              title={airpod2rdGenerationBannerContent.link.title}
              className={cn(buttonVariants({ variant: airpod2rdGenerationBannerContent.link.variant, size: "link" }), "rounded-full mt-36")}
            >
              {airpod2rdGenerationBannerContent.link.title}
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default AirpodsBeats