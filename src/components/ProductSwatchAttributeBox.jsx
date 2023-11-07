import React from 'react'
import ProductSwatchAttributeItem from './ProductSwatchAttributeItem'

const ProductSwatchAttributeBox = ({ title, info, options, selectedSwatchAttribute, setSelectedSwatchAttribute }) => {
  return (
    <div className="flex flex-col items-end px-[5px]">
      <header className="text-end">
        <h5 className='text-[1.17em] font-light leading-[.93]'>{title}</h5>
        {info &&<span className="text-[#f00] text-[.79rem] font-bold -mt-4">{info}</span>}
      </header>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-1 w-full direction-rtl">
        {options.map(option => (
          <ProductSwatchAttributeItem
            key={option?.title ?? option} 
            option={option}
            selectedSwatchAttribute={selectedSwatchAttribute}
            setSelectedSwatchAttribute={setSelectedSwatchAttribute}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSwatchAttributeBox