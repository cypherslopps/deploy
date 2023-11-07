import React, { useEffect, useCallback, useRef } from 'react';
import CarouselIndicator from './CarouselIndicator';
import { Button } from "./ui/Button";

const Carousel = ({ 
    children, 
    activeCarouselIndex, 
    setActiveCarouselIndex, 
    itemsLength, 
    control="manual",
    showIndicators=true,
    showControls=false, 
    indicatorClassName,
    indicatorType="circle",
    duration
}) => {
    const carouselItemsCount = itemsLength - 1;
    let indexRef = useRef(0);
    // const carouselSliderRef = useRef(0);

    const runAutomatically = useCallback(() => {
        if(indexRef.current < carouselItemsCount) 
            indexRef.current += 1;
        else
            indexRef.current = 0;    
        
        setActiveCarouselIndex(indexRef.current);
    }, []);

    // Previous Carousel Click Event
    const previousCarouselItem = () => {
        if(indexRef.current > 0) 
            indexRef.current -= 1;
        else if(indexRef.current === 0)
            indexRef.current = 0;

        setActiveCarouselIndex(indexRef.current);
    }

    // Next Carousel Click Event
    const nextCarouselItem = () => {
        if(indexRef.current < carouselItemsCount) 
            indexRef.current += 1;
        else if(indexRef.current === carouselItemsCount)
            indexRef.current = carouselItemsCount;

        setActiveCarouselIndex(indexRef.current);
    }

    // Control props defines if the component should be automatic or manual. Meaning carousel event will be triggered without user interaction.
    useEffect(() => {
        if(control === "automatic")
            setInterval(runAutomatically, duration ?? 5000);
    }, [control, runAutomatically, duration]);

    // useEffect(() => {
    //     carouselSliderRef.current.addEventListener("drag", dragCarouselSlider);

    //     return () => carouselSliderRef.current.removeEventListener("drag", dragCarouselSlider);
    // }, []);

    // const dragCarouselSlider = (e) => {
    //     console.log(e.clientX)
    // }

    return (
        <div className='relative w-full h-full'>
            <div 
                className='slider w-full h-full relative'
                draggable={true}
            >
                {children}
            </div>

            {/* Carousel Indicators */}
            {showIndicators && (
                <CarouselIndicator 
                    carouselItemCount={itemsLength}
                    activeCarouselIndex={activeCarouselIndex}
                    indicatorType={indicatorType}
                    setActiveCarouselIndex={indicatorIndex => {
                        indexRef.current = indicatorIndex;
                        setActiveCarouselIndex(indicatorIndex);
                    }}
                    className={indicatorClassName}
                />
            )}

            {/* Carousel Controls */}
            {showControls && (
                <div className='absolute top-1/2 z-30 left-0 w-full' style={{ transform: "translateY(-50%)" }}>
                    {/* Previous Button Control */}
                    <Button 
                        className="absolute left-0"
                        onClick={previousCarouselItem}
                    >{'<Previous'}</Button>

                    {/* Next Button Control */}
                    <Button 
                        className="absolute right-0"
                        onClick={nextCarouselItem}
                    >{'Next>'}</Button>
                </div>
            )}
        </div>
    )
}

export default Carousel