import React from 'react';
import Icons from './Icons';

const WishlistIcon = () => {
  return (
    <div 
      title="הרשימה שלי"
      className='cursor-pointer select-none'
    >
        <Icons.Wishlist className="h-5" />
    </div>
  )
}

export default WishlistIcon