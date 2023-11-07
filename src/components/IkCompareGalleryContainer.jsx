import React from 'react'
import IKCompareGalleryItem from './IKCompareGalleryItem';
import { cn } from '../lib/utils';

const IkCompareGalleryContainer = ({ gallery, className }) => {
  console.log(gallery)
  return (
    <div className={cn("grid grid-cols-4 mt-[37px] gap-y-[39px] gap-x-[34px] direction-rtl", className)}>
      {/* {gallery.map(gallery => (
        <IKCompareGalleryItem 
          key={gallery.subTitle?.title ?? gallery.heading}
          {...gallery} 
        />
      ))} */}
    </div>
  )
}

export default IkCompareGalleryContainer