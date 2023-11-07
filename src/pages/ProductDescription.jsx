import React, { useState } from 'react';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '../components';
import ShipImage from "../assets/images/fast_shipping.png";
import LocationPin from "../assets/images/location-pin.png";
import IPhone15Pro780 from "../assets/images/w_780.webp";
import MacBook from "../assets/images/mac_tradein_banner_large.avif";
import Series9 from "../assets/images/series-9_large.webp";
import Tradein from "../assets/images/trade_in_small.webp";

import { 
  SEO,
  Carousel,
  CarouselItem,
  CartActionTray,
  ProductSwatchAttributeBox,
  BreadCrumb,
  Button,
  ProductsCollectionOverview
} from '../components';
import Icons from '../components/Icons';
import { useOffscreen } from '../providers';
import { useParams } from 'react-router-dom';

const productDescriptionImages = [
  {
    title: "Image 1",
    imageSource: IPhone15Pro780
  },
  {
    title: "Image 2",
    imageSource: MacBook
  },
  {
    title: "Image 3",
    imageSource: Series9
  },
  {
    title: "Image 5",
    imageSource: Tradein
  }
];

const productDescriptionTabs = ["אחריות", "וידאו", "מפרט טכני", "מה בקופסה", "סקירה"];

const ProductDescription = ({ customSlug="" }) => {
  const { openOffscreen, setType, setData } = useOffscreen();
  const [selectedModelSwatchAttribute, setSelectedModelSwatchAttribute] = useState("");
  const [selectedColorSwatchAttribute, setSelectedColorSwatchAttribute] = useState("");
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  // const { slug } = useParams();
  console.log(customSlug);
  
  const openCartGallery = () => {
    // Set type
    setType("gallery-modal");

    // Set Data
    setData(productDescriptionImages);

    // Open modal
    openOffscreen();
  }

  return (
    <main>
      <SEO 
        title="Apple - iPhone 15 & iPhone 15 Plus"
      />

      <section className="wrapper">
        {/* BreadCrumb */} 
        {/* <BreadCrumb /> */}

        {/* Cart Description Section */}
        <section className="p-2 grid grid-cols-1 md:grid-cols-[40%_60%]">
        {/* Cart Description Content Container */}
          <div className="px-8">
            {/* Cart Description Header */}
            <header className="text-center">
              <h2 className="text-1.4xl font-normal">Apple - iPhone 15 & iPhone 15 Plus</h2>

              {/* Shipping Date */}
              <div className="p-1 flex items-center justify-center gap-x-1">
                <span className='text-[#f00] text-[.84rem]'>לזמן האספקה המדוייק יש לבחור דגם</span>
                <span className="p-1">
                  <img 
                    src={ShipImage}
                    alt="shipping"
                    className="h-[1.6rem]"
                  />
                </span>
              </div>

              {/* Delivery Time */}
              <div className="pt-2 pb-1 flex items-center justify-center gap-x-1">
                <span className='text-app-text text-[.84rem]'>בדיקת מלאי בסניפים</span>
                <span className="p-1">
                  <img 
                    src={LocationPin}
                    alt="shipping"
                    className="h-[1.6rem]"
                  />
                </span>
              </div>

              {/* Validation Advice */}
              <p className='text-[#f00] text-[.84rem] mt-[.2rem] font-bold'>אנא בחר את תכונות המוצר לקבלת זמינות במלאי</p>

              {/* Description */}
              <div className='py-3 text-center'>
                <h2 className="text-grey-820 font-bold text-[1.05em]">Take the big leap.</h2>
                <p className="text-grey-900 mt-2.5">ה-iPhone 15 וה-iPhone 15 Plus מביאים לכם את האי הדינמי, מצלמה ראשית ברזולוציית 48 מגה פיקסל, ומחבר USB-C חדש - הכל בתוך מעטפת אלומיניום וזכוכית משולבת בתהליך הזרקת צבע. </p>
                <p className='text-accent-400 font-bold'>הטבה לרוכשים - שובר מתנה בסך 100 ש״ח (תישלח לאחר קבלת המכשיר).</p>
              </div>
            </header>
          </div>

          {/* Cart Swatch Attributes */}
          <div className="row-start-3 md:col-start-1 md:col-end-2 p-8 space-y-4">
            {/* Product Model Swatch */}
            <ProductSwatchAttributeBox 
              title=":בחר דגם"
              info=" .שדה זה הוא חובה"
              options={["iPhone 15", "iPhone 15 Pro"]}
              selectedSwatchAttribute={selectedModelSwatchAttribute}
              setSelectedSwatchAttribute={setSelectedModelSwatchAttribute}
            />
            
            {/* Product Color Swatch */}
            <ProductSwatchAttributeBox 
              title=":בחר דגם"
              options={[{color: "red", title: "red"}, {color: "blue", title: "blue"}, {color: "brown", title: "brown"}]}
              selectedSwatchAttribute={selectedColorSwatchAttribute}
              setSelectedSwatchAttribute={setSelectedColorSwatchAttribute}
            />
          </div>

          {/* Cart Description Images Container */}
          <main className="row-start-2 md:col-start-2 md:col-end-4 md:row-span-full">
            {/* Cart Description Images Container */}
            <section className="h-[480px] min-h-[31.2rem] mb-4">
              <Carousel 
                itemsLength={productDescriptionImages.length}
                activeCarouselIndex={activeCarouselIndex}
                setActiveCarouselIndex={setActiveCarouselIndex}
              >
                {productDescriptionImages.map(({ title, imageSource }, index) => (
                  <CarouselItem 
                    key={title}
                    index={index}
                    activeCarouselIndex={activeCarouselIndex}
                    className="flex justify-center"
                  >
                    <img 
                      src={imageSource}
                      alt={title}
                      className='h-full w-[22.3rem] object-cover'
                    />
                  </CarouselItem>
              ))}
              </Carousel>
            </section>

              {/* Cart Gallery Button */}
              <div className='flex justify-end'>
                <Button 
                  size="none"
                  className="gap-x-2"
                  onClick={openCartGallery}
                >
                  <span className='text-[0.82em] font-extralight'>הגדלה</span>
                  <Icons.Search className="w-5 h-5 leading-4" />
                </Button>
              </div>
          </main>
        </section>
      </section>

      {/* Tabs */}
      {/* <Tabs tabs={} /> */}
      <Tabs defaultValue="אחריות">
        <TabsList>
          {productDescriptionTabs.map(tab => (
            <TabsTrigger value={tab}>{tab}</TabsTrigger>
          ))}
        </TabsList>

        {/* Tab content */}
        <div className='bg-grey-360 border-y border-[#ccc]'>
          <div className="wrapper p-8">
            {/* Responsibilities */}
            <TabsContent value="אחריות">
              <ul>
                Responsibilities
              </ul>
            </TabsContent>

            {/* Video */}
            <TabsContent value="וידאו">
              <div className='relative'>
                <iframe 
                    src="//www.youtube.com/embed/XHTrLYShBRQ?title=0&rel=0&showinfo=0"
                    style={{ width: "100%" }}
                    width="640"
                    height="612"
                    data-ratio="1.777"
                    title='kkk'
                    allowFullScreen=""
                />
              </div>
            </TabsContent>

            {/* Specification */}
            <TabsContent value="מפרט טכני">
              <div className='text-end'>Specification</div>
            </TabsContent>

            {/* Box */}
            <TabsContent value="מה בקופסה">
              <div className='text-end'>What's in the box</div>
            </TabsContent>

            {/* Reviews */}
            <TabsContent value="סקירה">
              <div className='text-end'>Reviews</div>
            </TabsContent>
          </div>
        </div>
      </Tabs>

      {/* Products Collection Overview */}
      <section className='py-4 my-4'>
        <div className='wrapper space-y-7'>
          {/* Header */}
          <header className='z-20 flex flex-col items-center'>
            <h4 className="text-[1.2rem] bg-white z-30 px-2">מוצרים נלווים</h4>
            <hr className='w-full border-app-border -mt-[.8rem] -z-10' />
          </header>

          <ProductsCollectionOverview type="cartDescription" />
        </div>
      </section>

      {/* Cart Action Tray */}
      <CartActionTray />
    </main>
  )
}

export default ProductDescription