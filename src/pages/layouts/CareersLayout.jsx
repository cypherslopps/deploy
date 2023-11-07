import React from 'react'
import { Outlet } from "react-router-dom"
import CareersBannerDesktop from "../../assets/images/careers_desktop.avif";
import CareersBannerTablet from "../../assets/images/careers_tablet.avif";

const CareersLayout = () => {
  return (
    <main>
        <section>
            <img 
                src={CareersBannerDesktop}
                alt="דרושים"
                loading="lazy"
                className="w-full object-cover hidden md:block"
            />
            <img 
                src={CareersBannerTablet}
                alt="דרושים"
                loading="lazy"
                className="w-full object-cover block md:hidden"
            />
        </section>

        {/* Container */}
        <section className="wrapper direction-rtl">
            <h1 className="mt-2 text-center text-[1.8rem] xl:text-[2rem] font-light">דרושים</h1>

            <Outlet />
        </section>     
    </main>
  )
}

export default CareersLayout