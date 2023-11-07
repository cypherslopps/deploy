import React from 'react'
import { cn } from '../lib/utils'

const CarouselItem = ({ children, index, activeCarouselIndex, className }) => {
  return (
    <div className={cn(`absolute top-0 left-0 w-full h-full ${activeCarouselIndex === index ? "opacity-1 visible" : "opacity-0 invisible"} transition duration-300`, className)}>
      {children}
    </div>
  )
}

export default CarouselItem