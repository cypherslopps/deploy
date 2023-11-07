import React from 'react'
import { ProductCollectionPreview, SEO } from '../components';
import MusicBannerImage from "../assets/images/music_beats_accessories.avif";
import MusicBannerLargeImage from "../assets/images/music_beats_accessories_large.avif";

const Beats = () => {
  return (
    <>
      <SEO 
        title="אוזניות ביטס - Beats Headphones"
        description="הזמינו אוזניות ביטס איכותיות שישדרגו את חוויית ההאזנה שלכם. אוזניות beats העדכניות מאפשרות סינון אקטיבי של רעשים, חוויית סאונד מדהימה וטעינה מהירה במיוחד. "
        keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
      />

      {/* Hero */}
      <section className='flex'>
        <img 
          src={MusicBannerImage}
          alt="Beats Headphones"
          className="w-full max-w-full hidden md:block"
        />
        <img 
          src={MusicBannerLargeImage}
          alt="Beats Headphones"
          className="w-full max-w-full block md:hidden"
        />
      </section>

      {/* Products Overview */}
      <ProductCollectionPreview
        heading={{
          title: "Beats Headphones"
        }}      
      />
    </>
  )
}

export default Beats