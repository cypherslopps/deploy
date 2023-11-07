import React from 'react'
import { cn } from '../lib/utils';

const CarouselIndicator = ({ carouselItemCount, indicatorType, activeCarouselIndex, setActiveCarouselIndex, className }) => {
    const activeIndicatorStyle = "w-[9px] h-[9px] bg-white border border-secondary-600";
    
    const indicatorStyleType = (i) => {
        let type;

        if(indicatorType === "circle") 
        type = `${activeCarouselIndex === i ? activeIndicatorStyle : "w-2 h-2 bg-grey-850"}  transition duration-200`;
        else if(indicatorType === "square")
            type = `w-[30px] h-[2.3px] ${activeCarouselIndex === i ? "bg-[#d2d2d7]" : "bg-[#424245]"} hover:bg-[#08c] hover:border hover:border-[#08c] transition duration-50`

        return type;
    }

    return (
        <ul className={cn("flex items-center justify-center gap-x-[.3em] w-full z-[60] absolute -bottom-10 left-0", className)}>
            {Array.from({ length: carouselItemCount }).map((_, i) => (
                <li 
                    key={i+`${i}`}
                    onClick={() => setActiveCarouselIndex(i)} 
                    className={`${indicatorStyleType(i)} cursor-pointer m-1 rounded-full`}
                />
            ))}
        </ul>
    )
}

export default CarouselIndicator