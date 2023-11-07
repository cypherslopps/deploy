import React from 'react'
import { Link } from 'react-router-dom';
import CartPriceInfo from './CartPriceInfo';
import CartBasketItem from './CartBasketItem';
import Icons from './Icons';
import { Button, buttonVariants } from './ui/Button';
import { cn } from '../lib/utils';

const CartBasketContainer = ({ cartItems }) => {
  return (
    <div>
        {/* Cart Collection */}
        <div className="grid gap-y-2 px-3">
            {cartItems.map(item => (
                <CartBasketItem 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>

        {/* Cart Basket Description */}
        <div className='p-4 bg-grey-350 grid gap-y-1 mt-4'>
            {/* Cart Item SubTotal Price */}
            <CartPriceInfo 
                price="₪ 1,734.00"
                title="סכום ביניים"
            />
            
            {/* Cart Item Total Price */}
            <CartPriceInfo 
                price="₪ 1,734.00"
                title="סה״כ"
            />
        </div>

        {/* Cart Basket Actions */}
        <footer className='p-3 flex items-center justify-between'>
            <div className='flex items-center gap-x-2'>
                <Link 
                    to="/proceed"
                    className={cn(buttonVariants({ variant: "primary" }), "rounded-full lg:py-1 border border-white")}
                >
                    לתשלום
                </Link>

                <Button
                    variant="border"
                    className="rounded-full lg:py-1"
                >
                   להמשך קניה
                </Button>
            </div>

            {/* Delete all items from cart button */}
            <Button
                title="הסר"
                data-confirm="?האם להסיר את כל המוצרים בעגלת הקניות"
            >
                <Icons.Trash className="w-8 h-8 min-w-0" />
                <span className="sr-only">Trash</span>
            </Button>
        </footer>
    </div>
  )
}

export default CartBasketContainer