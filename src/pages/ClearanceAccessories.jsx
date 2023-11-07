import React, { useState } from 'react'
import { 
    ProductDescriptionBannerLinkContainer, 
    SEO, 
    Tabs,
    TabsContent, 
    TabsList, 
    TabsTrigger, 
    Icons
} from '../components'
import { accessoriesCategories, accessoriesCompatibility, accessoriesTabs } from '../lib/constants/clearanceAccessories.constants'
import { Link } from 'react-router-dom'

const ClearanceAccessories = () => {
    const [expandAccessoriesCategories, setExpandAccessoriesCategories] = useState(false);
    const collapsibleAccessoriesCategories = !expandAccessoriesCategories ? accessoriesCategories.filter((_, index) => index > 9).reverse() : accessoriesCategories.reverse();
 
    return (
        <>
            <SEO 
                title="iStore Clearance - אביזרים"
                description="הנחות ענק על מגוון אביזרים עד גמר המלאי."
                keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
            />

            <section className="text-center direction-rtl">
                <h1 className="text-[37px] mb-[30px] mt-[84px] trackin-[.011em] font-semibold leading-[1.09375]">מצאו את האביזרים שאתם מחפשים.</h1>

                {/* Tabs */}
                <Tabs defaultValue="חיפוש לפי מכשיר">
                    <TabsList className="border-b border-[#d6d6d6] max-w-[890px] w-[87%] mt-2.5 mx-auto mb-[8px] direction-rtl flex items-center gap-x-[30px]">
                        {accessoriesTabs.map(tab => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className="h-[42px] md:text-[18px] text-[#666] data-[state=active]:text-app-text-dark-8 font-normal data-[state=active]:border-b  data-[state=active]:border-[#333]"
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Tab Content */}
                    <div className="w-[87%] mx-auto min-h-[325px] mb-[15px]">
                        <ProductDescriptionBannerLinkContainer 
                            links={[
                                {
                                    title: "לרשימת כל האביזרים",
                                    href: "/clearance/accessories/sort-by?dir=desc&order=_open_date",
                                    showIcon: true,
                                    variant: "secondary-text",
                                    className: "mt-[10px] md:text-base leading-[1.52947] -tracking-[.021em]"
                                }
                            ]}
                            className="mt-[30px] direction-ltr justify-center"
                        />

                        <TabsContent value="חיפוש לפי מכשיר" className="grid grid-cols-3 gap-y-[15px] direction-rtl">
                            {accessoriesCompatibility.map(({ Icon, title, href }) => (
                                <Link 
                                    key={title}
                                    to={`${href}`}
                                >
                                    <blockquote className="flex flex-col items-center hover:text-secondary-500 space-y-2">
                                        <Icon className="w-[97px] h-[97px]" />
                                        <span className="text-base leading-[1.52947] -tracking-[.021em] text-center">{title}</span>
                                    </blockquote>
                                </Link>
                            ))}
                        </TabsContent>

                        {/*  */}
                        <TabsContent value="חיפוש לפי קטגוריה">
                            {/* Accessories Categories */}
                            <ul className="grid grid-cols-3 gap-y-9 direction-rtl">
                                {collapsibleAccessoriesCategories.map(({ Icon, title, href }) => (
                                    <Link 
                                    to={`${href}`} 
                                    className="group"
                                    key={href}
                                    >
                                    <li 
                                        key={title} 
                                        className='flex items-center gap-x-8 pr-10'
                                    >
                                        <Icon className="h-[50px] w-[50px] leading-[0]" />
                                        <span className="group-hover:text-secondary-300">{title}</span>
                                    </li>
                                    </Link>
                                ))}
                            </ul>

                            {/* Expand Accessories Categories Button */}
                            <div className="mt-4 z-30 direction-rtl">
                                <div className="relative before:block before:absolute before:top-1/2 before:right-0 before:w-full before:h-[1px] before:bg-[#d6d6d6] before:-z-40">
                                <p 
                                    className="bg-white px-2 z-30 flex items-center gap-x-1.5 justify-center text-secondary-500 mx-auto w-max text-base leading-[1.52947] cursor-pointer select-none"
                                    onClick={() => setExpandAccessoriesCategories(props => !props)}
                                >
                                    <span>לצפיה בכל הקטגוריות</span>
                                    <Icons.Cancel className="text-secondary-500 w-3.5 h-3.5" />
                                </p>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </section>
        </>
    )
}

export default ClearanceAccessories