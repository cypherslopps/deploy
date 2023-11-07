import React from 'react'

const CartPriceInfo = ({ price, title }) => {
  return (
    <div className='flex items-center justify-between py-1'>
        <span className='font-sans text-md'>{price}</span>
        <h5 className='font-sans'>{title}</h5>
    </div>
  )
}

export default CartPriceInfo