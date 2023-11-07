import React, { useState } from 'react';
import Random from "../assets/images/accessories_banner_image2.avif";
import { Link } from 'react-router-dom';
import { Select } from './ui/Input';
import CloseIcon from "../assets/images/close.png";
import { Button } from './ui/Button';

const CheckoutCartSummaryItem = () => {
  const [cartCount, updateCartCount] = useState(1);

  return (
    <blockquote className="flex items-center border-b border-app-border pb-4 text-center">
      {/* Product Image And Title */}
      <div className='w-[35%] pl-2'>
        <Link className='flex items-center gap-x-4'>
          {/* Product Image */}
          <figure className='w-[32%]'>
            <img 
              src={Random}
              alt="random"
              className="w-full object-cover"
            />
          </figure>

          <p className='text-base font-light w-[68%] text-right'> Apple - Apple Watch Series 9 GPS 45mm / Midnight Aluminium Case / Midnight Sport Band - S/M</p>
        </Link>
      </div>

      <p className='w-[15%] font-light p-2'>Midnight</p> 
      <p className='w-[15%] font-light p-2'></p>   

      {/* Product Select Count */}
      <div className='w-[15%] flex justify-center'>
        <Select 
          options={[1,2,3,4,5,6,7,8,9,10]}
          value={cartCount}
          className="pr-3"
          onChange={({ target }) => updateCartCount(target.value)}
        />  
      </div>

      {/* Product Price */}
      <p className='w-[15%] font-light p-2'>2,279.00 ₪</p>  

       {/* Remove Cart Button */}
       <div className='w-[5%] pr-1'>
        <Button size="none">
          <img 
            src={CloseIcon}
            alt="close cart basket item"
            className='w-4'
          />
        </Button>
       </div>
    </blockquote>
  )
}

export default CheckoutCartSummaryItem