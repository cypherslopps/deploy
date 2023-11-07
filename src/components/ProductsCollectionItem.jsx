import React from 'react'
import { Link } from 'react-router-dom';
import ProductImage from "../assets/images/series-9_large.webp";
import ShipImage from "../assets/images/fast_shipping.png";
import { Button } from './ui/Button';
import Icons from './Icons';

const colors = [
    {
        title: "Beats Black",
        color: "#2a2a2a"
    },
    {
        title: "Smoke Gray",
        color: "#d2d6d6"
    },
    {
        title: "Flame Blue",
        color: "#6bbcff"
    },
    {
        title: "Yuzu Yellow",
        color: "#dae087"
    }
]

const ProductsCollectionItem = ({ type="" }) => {
    return (
        <div className={`${type === "cartDescription" ? "w-full px-10 xxs:p-4  xxs:w-1/2 md:w-1/3 lg:w-1/4" : "px-10 py-5 xxs:p-2 sm:p-4 lg:p-6 xl:p-8 w-full xxs:w-1/2 md:w-1/3"}`}>
            {/* Product Info */}
            <Link 
                to="#" 
                title="Apple - Apple Watch Series 7 GPS + Cellular 41mm / Graphite Stainless Steel Case / Graphite Milanese Loop"
            >
                <figure className="mb-1.5 relative">
                    <img 
                        src={ProductImage} 
                        alt="Apple - Apple Watch Series 7 GPS + Cellular 41mm / Graphite Stainless Steel Case / Graphite Milanese Loop"
                        className="mx-auto h-[225px] md:h-[160px] lg:h-[195px] xl:h-[235px] object-cover"
                    />

                    {/* Stamp */}
                    <div className="stamp flex-1 w-[35%] h-[67px] sm:w-[28%] sm:h-[70px] md:w-4/12 md:h-20 rounded-full bg-red-500 absolute top-0 right-4 md:right-0 p-2 pointer-events-none"></div>
                </figure>

                {/* Colors */}
                <ul className="relative w-max mt-12 mx-auto mb-[15px] max-w-[12rem] flex items-center direction-rtl">
                    {colors && colors.map(({ title, color }) => (
                        <li 
                            key={title}
                            className="w-6 h-6 m-1 rounded-full"
                            style={{ 
                                background: color, 
                                border: `1px solid rgba(170, 170, 170, 0.38)`
                            }}
                        >
                            <span className="sr-only">{title}</span>
                        </li>
                    ))}
                </ul>

                {/* Product Title */}
                <h4 className='w-[15rem] mx-auto md:mx-0 md:w-full text-center font-light leading-[1.35rem] mt-4 text-[.87rem] lg:text-md xl:text-base'>Apple - Apple Watch Series 7 GPS + Cellular 41mm / Graphite Stainless Steel Case / Graphite Milanese Loop</h4>
            </Link>

            {/* Product Content */}
            <div className="mt-1 w-[15rem] mx-auto md:w-full md:mx-0">
                <span className="text-xs md:text-[.8rem]">Big screen. Huge impact.</span>

                {/* Product Shipping */}
                <div className='pt-2 mb-2.5 flex flex-col items-end'>
                    <span className="p-2">
                        <img 
                            src={ShipImage}
                            alt="shipping"
                            className="h-4"
                        />
                    </span>
                    <span className='text-[#f00] text-xs md:text-[.82rem] font-light'>1 Fast delivery about 1 business day</span>
                </div>

                {/* Product Pricing */}
                <div className='flex items-center justify-end gap-x-2 px-1 font-light'>
                    <span className="text-primary-500 font-semibold text-[.84rem] md:text-[.88rem]">₪ 2,319.20</span>
                    <span className="text-[.84rem] md:text-[.88rem] text-grey-850 line-through">₪ 2,4344</span>
                </div>

                {/* Product Action */}
                <div className='border-b border-app-border py-2 mt-2 flex items-center justify-end'>
                    {/* Add Product To Wishlist Button */}
                    <Button 
                        size="none"
                        className="px-2"
                    >
                        <Icons.Wishlist className="w-[1.1rem] h-[1.1rem] lg:w-5 lg:h-5" />
                    </Button>

                    {/* Add Product To Cart Button */}
                    <Button
                        variant="primary"
                        size="none"
                        className="px-3 py-[.3rem] rounded-full gap-x-2"
                    >
                        {/* Product Detail Link */}
                        <Link
                            to="#" 
                            className='text-[.78rem] font-light md:text-sm flex items-center gap-x-0.5 border-r border-white pr-2 direction-rtl'
                        >
                            לפרטים ›
                            {/* <Icons.ChevronRight className="w-[.67rem] h-[.67rem] md:w-3 md:h-3" /> */}
                        </Link>

                        {/* Cart Button */}
                        <span>
                            <Icons.Cart2 className='w-[.91rem] h-[.91rem] md:w-4 md:h-4' />
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsCollectionItem