import React from 'react';
import Icons from './Icons';
import { useOffscreen } from "../providers";

const CartIcon = () => {
  const { setType, openOffscreen } = useOffscreen();
  const [cartCount, updateCartCount] = React.useState(0);

  const toggleCartModal = () => {
    // Set offscreen type
    setType("cart-modal");

    // Toggle modal
    openOffscreen();
  }

  return (
    <div 
      title="סל קניות" 
      className='relative cursor-pointer select-none' 
      onClick={toggleCartModal}
    >
        <Icons.Cart className="h-[1.15rem] xs:h-5 sm:h-[1.4rem] md-lg:h-6" />

        {/* Cart Items count */}
        {cartCount !== 0 && (
          <span className='absolute -top-1 -right-2 flex items-center justify-center text-[.7rem] sm:text-[.73rem] font-medium w-[.9rem] h-[.9rem] sm:w-4 sm:h-4 rounded-full bg-rose-500 text-white'>{cartCount}</span>
        )}
    </div>
  )
}

export default CartIcon