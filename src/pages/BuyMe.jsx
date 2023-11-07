import React from 'react'
import { SEO } from "../components";

const BuyMe = () => {
  return (
    <>
      <SEO 
        title="Buy Me"
        description="מעוניינים לרכוש ממגוון מוצרי Buy Me במחיר משתלם ברשת  iStore ? הזמינו עכשיו online באתר או צרו עמנו קשר במספר 0732130507 אנחנו כאן לשירותכם!"
        keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
      />

      <main className='wrapper px-2 pb-2 pt-6'>
        <h1 className="text-[2rem] leading-4 font-light text-black text-center mb-2">Buy Me</h1>
        <iframe 
          className="border-none w-full outline-none min-h-[1200px]"
          src="https://buyme.co.il/gift-card/2742371#!/?display=money"
        />
      </main>
    </>
  )
}

export default BuyMe