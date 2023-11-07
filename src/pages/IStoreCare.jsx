import React from 'react'
import { ProductDescriptionBannerLinkContainer, SEO } from "../components";
import IStoreCareWarranty340 from "../assets/images/istore_care_warranty_340.avif";
import IStoreCareWarranty650 from "../assets/images/istore_care_warranty_650.avif";
import IStoreCareWarranty1000 from "../assets/images/istore_care_warranty_1000.avif";
import { IStoreCareItems } from '../lib/constants/istore-care.constants';

const IStoreCare = () => {
  return (
    <>
      <SEO 
        title="iStore Care - הרחבת אחריות למוצרי אפל"
        description="אייסטור קר מרחיבה את אחריות היצרן של Apple ומבטיחה לכם עד 3 שנים של ראש שקט. עם טיפול אצל הטכנאים המומחים שלנו שהוכשרו ע״י אפל לטפל ולתקן את מכשירכם תוך שימוש בחלפים מקוריים.
        "
        keywords="הרחבת אחריות
        warranty
        apple care
        iStore care
        ןדאםרק בשרק
        ןדאםרק
        שפפךק בשרק
        ןפיםמק
        ןפשג
        ׳שאבי
        iPhone
        iPad
        Watch"
      />

      {/* Hero */}
      <section className="pt-[70px] pb-[50px] md:pt-[90px] md:pb-20 bg-gradient-istore-care-sm xl:bg-gradient-istore-care xl:pt-[110px] xl:pb-[100px] text-app-text-dark-9 text-center direction-rtl">
        <div className="content-container flex flex-col items-center">
          {/* Content */}
          <div>
            <h5 className="text-[19px] md:text-[22px] xl:text-[25px] font-semibold leading-4 -tracking-[0.1345eem] text-app-text-dark-9">iStore Care</h5>
            <h1 className="text-[35px] mt-[15px] max-w-[280px] md:text-[42px] xl:text-[50px] leading-[1.12em] -tracking-[.017em] font-semibold md:mt-5 md:max-w-[500px] mx-auto">הרחבת אחריות למוצרי Apple מבית iStore.</h1>
            <p className="text-[17px] w-4/5 mt-[18px] md:mt-[25px] md:w-[70%] xl:text-[19px] mx-auto leading-[1.4em] -tracking-[.00345em]">iStore Care מרחיבה את אחריות היצרן של Apple ומבטיחה לכם עד 3 שנים של ראש שקט. טיפול מקצועי אצל הטכנאים המומחים שלנו שהוכשרו ע״י Apple לתקן את מכשירכם תוך שימוש בחלפים מקוריים.</p>
          </div>

          {/* Images */}
          <figure className="w-[290px] h-[136px] mt-10 md:mt-[70px] md:w-[600px] md:h-[280px] xl:w-[900px] xl:h-[421px] xl:mt-[110px]">
          <picture data-processed="true">
              <source 
                  media="(min-width: 1199px)" 
                  srcSet={IStoreCareWarranty1000}
                  className='w-full h-full object-cover'
              />

              <source 
                  media="(min-width: 767px)" 
                  srcSet={IStoreCareWarranty650}
                  className='w-full h-full object-cover'
              />

              <source 
                media="(min-width: 0px)" 
                srcSet={IStoreCareWarranty340}
                className='w-full h-full object-cover'
              />
              <img 
                loading="eager" 
                alt="אייפון 15 פרו מקס החדש של אפל" 
                src={IStoreCareWarranty340} 
                className='w-full h-full object-cover'
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* Details */}
      <section className="py-[70px] xl:py-[90px] bg-white text-app-text-dark-9 text-center direction-rtl">
        <div className="content-container">
          {/* Content */}
          <div className="flex flex-col items-center">
            <h1 className="text-[35px] max-w-[280px] mt-[15px] md:mt-5 md:max-w-[500px] md:text-[42px] xl:text-[50px] leading-[1.12em] -tracking-[.017em] font-semibold mx-auto">
              שירות לכל מכשיר.
              <br />
              לא משנה היכן נרכש.
            </h1>
            <p className="text-[17px] w-4/5 mt-[18px] md:mt-[25px] md:w-[70%] xl:text-[19px] leading-[1.4em] -tracking-[.00345em]">רק ב-iStore, באפשרותכם לצרף לשירות כל מכשיר של Apple מכל חברה (כמובן גם כזה שנרכש אצלנו) הנמצא בתקופת אחריות היצרן, באמצעות בדיקה מהירה המתבצעת מרחוק ללא צורך בהגעה פיזית לנקודות השירות.</p>
          </div>

          {/* IStore Care Items Container */}
          <div className="w-[83.3333333%] my-[30px] md:w-[680px] md:my-10 xl:w-[980px] xl:mt-[50px] xl:mb-[30px] mx-auto flex flex-wrap">
            {IStoreCareItems.map(({ title, imageSource, imageSourceClassName, description, price, links }) => (
              <blockquote
                key={title}
                className="p-2.5 min-h-[100px] w-full max-w-full md:w-1/2 md:max-w-[50%] xl:max-w-[33.3333333%] xl:w-[33.3333333%] flex flex-col items-center"
              >
                {/* IK Care Image Container */}
                <div className="w-[200px] h-[200px] flex justify-center items-end">
                  <img 
                    src={imageSource}
                    alt={description}
                    className={`${imageSourceClassName} object-cover`}
                  />
                </div>
                <h3 
                  className="text-[17px] font-semibold -tracking-[.0048em] mt-5 leading-[1.2em]" 
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p 
                  className="text-[15px] leading-[1.3em] mt-[13px] -tracking-[.00345em]" 
                  dangerouslySetInnerHTML={{ __html: price }}
                />
                <ProductDescriptionBannerLinkContainer 
                  links={links}
                  className="direction-ltr mt-[13px]"
                />
              </blockquote>
            ))}
          </div>


          {/* Terms */}
          <p className="text-center text-[13px] text-[rgba(29,29,31,.8666666667)] tracking-[.00845em] leading-[1.2em] flex items-center justify-center direction-rtl">
            תקופת האחריות כוללת את אחריות היצרן בשנה הראשונה | {" "}
            <ProductDescriptionBannerLinkContainer 
              links={[{
                title: "לתנאי השירות המלאים.",
                href: "/warranty",
                variant: "secondary-text",
                className: "md:text-[13px] px-1"
              }]}
            />
          </p>
        </div>
      </section>
    </>
  )
}

export default IStoreCare