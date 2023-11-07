import React from 'react';
import { Button } from './ui/Button';
import Tooltip from './ui/Tooltip';
import Icons from './Icons';
import LocationPin from "../assets/images/location-pin.png";

const CartActionTray = () => {
  // top-[3.1em]
  return (
    <div className="w-full h-11 min-h-[135px] z-40 fixed md:bottom-0 left-0 border border-[#d6d6d5] bg-grey-370 flex items-center justify-center pt-2">
      <div className='wrapper px-2 flex justify-between'>
        {/* Purchase Option Container */}
        <div className="pl-[2.4rem] flex items-center gap-x-[30px] mt-3">
          <Button
            variant="primary"
            size="none"
            className="w-[159px] min-w-[auto] h-[50px] text-[22px] rounded-full"
          >
            הוספה לסל 
          </Button>

          {/* Price Box */}
          <div className='text-end'>
            <h1 className="text-4xl text-primary-500">₪ 4,299.00</h1>
            
            {/* Tooltip */}
            <Tooltip title="אפשרויות תשלום">
              <p>אפשרות עד 36 תשלומים ועד 12 תשלומים ללא ריבית.</p>
            </Tooltip>
          </div>
        </div>

        {/* Toggle Tray */}
        <div className='flex justify-end items-center gap-x-16 w-[45rem]'>
          <blockquote className='grid grid-cols-[1fr_max-content] gap-x-2.5'>
            {/* Content */}
            <div className='text-end flex flex-col items-end'>
              <h6 className='font-bold text-[.81rem]'>:איסוף</h6>
              <p className='flex items-center font-light gap-x-0.5 text-[.81rem] underline text-primary-500'>
                בדיקת מלאי בסניפים 
              </p>
            </div>

            <img 
              src={LocationPin} 
              className='w-[21px] h-5' 
            />
          </blockquote>

          <blockquote className='grid grid-cols-[1fr_max-content] gap-x-2.5'>
            {/* Content */}
            <div className='text-end flex flex-col items-end'>
              <h6 className='font-bold text-[.81rem]'>:קבל עזרה ברכישה</h6>
              <p className='flex items-center font-light gap-x-0.5 text-[.81rem]'>לזמן האספקה המדוייק יש לבחור דגם</p>
              <p className='flex items-center font-light gap-x-0.5 text-[.81rem] text-accent-600'>משלוח חינם בהזמנה מעל 199.90 ₪</p>
            </div>

            <Icons.Package className='w-[21px] h-5' />
          </blockquote>

          <blockquote className='grid grid-cols-[1fr_max-content] gap-x-2.5'>
            {/* Content */}
            <div className='text-end flex flex-col items-end'>
              <h6 className='font-bold text-[.81rem]'>:קבל עזרה ברכישה</h6>
              <p className='flex items-center font-light gap-x-0.5 text-[.81rem]'>
                <a href='tel:073-2130507'>073-2130507</a>
                :בטלפון
              </p>
            </div>

            <Icons.Chat className='w-[21px] h-5' />
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default CartActionTray