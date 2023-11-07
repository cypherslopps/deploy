import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductImage from "../assets/images/airpod_large.webp";
import { Select } from './ui/Input';
import { Button } from './ui/Button';
import CloseIcon from "../assets/images/close.png";

const CartCheckoutItem = () => {
    const [cartCount, updateCartCount] = useState(0);

    return (
        <blockquote className="direction-rtl p-2 flex items-center gap-x-4">
            {/* Product Info */}
            <div className="flex items-center py-2 gap-x-2.5 w-[70%]">
                {/* Product Image */}
                <figure className="select-none w-80">
                    <img 
                        src={ProductImage}
                        alt="product"
                        className='w-full object-full'
                    />
                </figure>

                {/* Product Content */}
                <div className="flex flex-col text-right text-base font-light">
                    {/* Product Title */}
                    <h5>Apple - Apple Watch Ultra 2 GPS + Cellular 49mm / Titanium Case / Orange/Beige Trail Loop - S/M</h5>

                    {/* Product Attributes */}
                    <div>
                        <p>Trail Loop / Orange/Beige</p>
                        <p>16,596.00 ₪</p>
                    </div>
                </div>
            </div>

            {/* Product Action */}
            <div className="w-[33%] flex flex-col gap-y-3.5 items-end">
                <Select 
                    options={[1,2,3,4,5,6,7,8,9,10]}
                    value={cartCount}
                    onChange={({ target }) => updateCartCount(target.value)}
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
        </blockquote>
    )
}

export default CartCheckoutItem