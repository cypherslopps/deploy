import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';
import Icons from '../Icons';

const GalleryModal = ({ data, closeModal }) => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  return (
    <motion.div 
        className='bg-white w-1/2 h-2/5 p-4 relative'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .2, duration: .05 }}
    >
      {/* Close Gallery */}
      <span 
        className='absolute top-5 right-5 cursor-pointer z-40'
        onClick={closeModal}>
        <Icons.Close className='w-7 h-7' />
      </span>

      {/* Carousel */}
      <Carousel
        activeCarouselIndex={activeCarouselIndex}
        setActiveCarouselIndex={setActiveCarouselIndex}
        showIndicators={false}
        showControls={true}
        itemsLength={5}
      >
        {data && data.map(({ title, imageSource }, index) => (
          <CarouselItem 
            key={title}
            index={index}
            activeCarouselIndex={activeCarouselIndex}
            className="z-20"
          >
            <img 
              src={imageSource}
              alt={title}
              className='w-full h-full object-cover -z-10'
            />
          </CarouselItem>
        ))}
      </Carousel>
    </motion.div>
  )
}

export default GalleryModal