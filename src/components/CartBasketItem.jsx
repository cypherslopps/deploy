import React, { useState } from 'react'
import { Select } from './ui/Input';
import { Button } from "./ui/Button";
import CloseIcon from "../assets/images/close.png";
import Random from "../assets/images/w_290.webp";
import { Link } from 'react-router-dom';

const CartBasketItem = () => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <blockquote className='grid grid-cols-cartBasket gap-x-6'>
            {/* Cart Actions */}
            <div className='flex flex-col gap-y-3'>
                <Select 
                    options={[1,2,3,4,5,6,7,8,9,10]}
                    value={cartCount}
                    onChange={({ target }) => setCartCount(target.value)}
                />

                {/* Close button */}
                <Button size="none">
                    <img 
                        src={CloseIcon}
                        alt="close cart basket item"
                        className='w-4'
                    />
                </Button>
            </div>

            {/* Cart Item Description */}
            <div className="text-end space-y-1">
                {/* Cart Title */}
                <Link 
                    to="Watch/watch-se-2nd/buy/apple-apple-watch-se-gps-cellular-44mm-midnight-aluminium-case-midnight-sport-band-ml"
                    className="font-sans text-app-text font-light text-md"
                >
                  Apple - Apple Watch SE GPS + Cellular / 44mm Midnight Aluminium Case Midnight Sport Band ML  
                </Link>
                
                {/* Cart Item Price */}
                <span>₪ 1,734.00</span>
            </div>

            {/* Cart Item Image */}
            <figure className="h-28">
                <img 
                    src={Random}
                    alt="cart title"
                    className='w-full h-full object-cover'
                />
            </figure>
        </blockquote>
    )
}

export default CartBasketItem