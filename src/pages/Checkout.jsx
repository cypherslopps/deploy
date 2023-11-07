import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, SEO, Input, CheckoutCartSummaryItem } from '../components';
import ShippingIcon from "../assets/images/shopping_icon.webp";

const Checkout = () => {
    const [couponCode, setCouponCode] = useState("");
    const [cart] = React.useState([0]);

    return (
        <>
            <SEO 
                title="סל קניות"
                description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
                keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
            />

            <div className="wrapper px-2 xxs:pb-2">
                {cart.length === 0 ? (
                    <div className='p-[1.1rem] text-center'>
                        <h3 className="text-[1.75rem] xxs:text-[1.85rem] md:text-[2rem] font-light">הסל שלי</h3>

                        {/* My account */}
                        <div className='pt-4 xxs:py-5 md:py-6 px-2'>
                            <h6 className="text-[1.15rem] xxs:text-[1.3rem] md:text-[1.4em] font-light">אין מוצרים בסל</h6>
                            <div className='flex items-center justify-center gap-x-1.5 font-light text-[.91rem] xxs:text-[.93rem] md:text-base'>
                                <Link 
                                    to="/"
                                    title="לחץ כאן"
                                    className='underline'
                                >
                                    לחץ כאן
                                </Link>
                                לחזרה לאתר 
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='pt-5 pb-2 px-2 grid grid-cols-[30%_1fr] gap-x-8 items-start'>
                        {/* Order Summary Box */}
                        <aside className="bg-grey-70 pt-4 pb-3 px-6 direction-rtl divide-y divide-app-border">
                            <header className="pb-3"> 
                                <h3 className="text-[1.4rem] font-light">סיכום הזמנה</h3>
                            </header>

                            {/* Shipping Date */}
                            <div  className='flex items-center justify-center py-4'>
                                <img 
                                    src={ShippingIcon}
                                    alt="shipping"
                                    className="h-[2rem] leading-4 p-2"
                                />

                                <h4 className="text-base font-light">
                                זמן אספקה משוער כ- {" "}
                                <span className='current-cart-shipping-date'>30</span>{" "}
                                ימי עסקים            
                                </h4>
                            </div>

                            {/* Discount */}
                            <div className="pt-4 pb-9 space-y-6">
                                <p className='text-[.8em]'>להזנת קוד קופון </p>

                                {/* Discount Coupon Form */}
                                <form className="flex items-center gap-x-0.5 mt-3">
                                    <Input 
                                        type="name"
                                        name="couponCode"
                                        value={couponCode}
                                        onChange={({ target }) => setCouponCode(target.value)}
                                        containerClassName="w-[70%]"
                                        className="bg-white py-[.2em]"
                                    />
                                    <Button
                                        variant="primary"
                                        className="w-[30%] font-light rounded-full py-[.2em]"
                                        size="none"
                                    >
                                        החל
                                    </Button>
                                </form>
                            </div>

                            <div className="space-y-5">
                                {/* Total Price Container */}
                                <div className="space-y-2 pt-2">
                                    <div className="flex justify-between">
                                        <span className="leading-6 text-base font-light">סכום ביניים</span>
                                        <p className="leading-6 text-base font-light">16,596.00 ₪</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="leading-6 text-base">סה״כ</span>
                                        <p className="leading-6 text-base">16,596.00 ₪</p>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <div className="py-4 text-center grid grid-cols-2 gap-x-2">
                                    <div className='flex justify-center'>
                                        <Button 
                                            variant="border"
                                            size="none"
                                            width="max"
                                            className="py-[.4em] px-4 text-[.8em] min-w-[.8em] rounded-full"
                                        >
                                            המשך בקניות ›
                                        </Button>
                                    </div>

                                    <div className='flex justify-center'>
                                        <Button 
                                            variant="primary"
                                            size="none"
                                            width="max"
                                            className="py-[.4em] px-8 text-[.8em] min-w-[.8em] rounded-full"
                                        >
                                            לקופה ›
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Checkout Cart Container */}
                        <section className='p-2 pl-0 direction-rtl'>
                            <header className="flex items-center text-center font-light py-4 border-b border-app-border">
                                <div className="w-[35%]">מוצר</div>
                                <div className="w-[15%]">צבע</div>
                                <div className="w-[15%]">נפח</div>
                                <div className="w-[15%]">כמות</div>
                                <div className="w-[15%]">מחיר</div>
                                <div className="w-[5%]"></div>
                            </header>

                            {/* Checkout Cart Collection */}
                            <div className='py-4'>
                                <CheckoutCartSummaryItem />
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </>
    )
}

export default Checkout