import React from 'react';
import { cn } from '../lib/utils';

const ProductSwatchAttributeItem = ({ option, selectedSwatchAttribute, setSelectedSwatchAttribute }) => {    
    const swatchTitle = option?.title ?? option;
    const swatchTitleStyle = `${selectedSwatchAttribute === option ? "text-black" : "text-[#bbb]"} font-light capitalize text-base transition-colors duration-200`;

    return (
        <div 
            title={swatchTitle}
            name={swatchTitle}
            className={`flex items-center justify-end border ${selectedSwatchAttribute === swatchTitle ? "border-black" : "border-app-border hover:border-black"} transition-colors duration-200 py-8 px-[1.3rem] h-24 rounded-[.2em] cursor-pointer`}
            onClick={() => setSelectedSwatchAttribute(swatchTitle)}
        >
            {typeof option === "string" ? (
                <span className={`${swatchTitleStyle} text-center w-full`}>
                    {option}
                </span> 
            ) : (
                <div className="flex items-center justify-between w-[75%]">
                    <span className={cn(swatchTitleStyle, "text-[1.05rem] text-end")}>{option.title}</span>
                    <span style={{ background: option.color }} className="w-[1.7em] h-[1.7em] rounded-full inline-block" />
                </div>
            )}
        </div>
    )
}

export default ProductSwatchAttributeItem