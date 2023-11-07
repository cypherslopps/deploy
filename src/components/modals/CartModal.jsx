import React, { useState } from 'react'
import Icons from "../Icons";
import CartBasketItem from '../CartBasketItem';
import CartBasketContainer from '../CartBasketContainer';

const CartModal = ({ closeModal }) => {
  const [cartItems] = useState([{id: 0, title: "fsfdf", count: 1, image: "sdfsdf", price: 0.43}]);

  return (
    <blockquote className='bg-white w-2/5'>
      <header className='relative p-4 border border-grey-400'>
        <h5 className="text-lg text-center">My Basket</h5>    
        
        {/* Close Modal Button */}
        <span 
          onClick={closeModal}
          className='cursor-pointer select-none inline-block absolute top-1/2 right-2'
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Icons.Close />
        </span>
      </header>
      
      {/* Cart Items Container */}
      <div className='pt-5'>
        {cartItems.length !== 0 ?
          ( 
            <CartBasketContainer 
              cartItems={cartItems}
            /> 
          ) : (
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <span className='w-14 h-14 bg-gray-200/80 rounded-full flex items-center justify-center'>
                <Icons.Cart2 className="w-5 h-5 stroke-app-text" />
              </span>
              <p className='text-app-text'>No products in basket</p>
            </div>
          )
        }
      </div>
    </blockquote>
  )
}

export default CartModal;