import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

const Tabs = ({ tabs, className }) => {
    const [selectedTab, setSelectedTab] = useState("");

    useEffect(() => {
        const firstTabItem = tabs[0];
        
        // Set tab
        setSelectedTab(firstTabItem);
    }, [tabs])

    return (
        <div className={cn("pt-8", className)}>
            {/* Tab List */}
            <ul className='w-full flex items-center justify-center gap-x-2'>
                {tabs.map(tab => (
                    <li 
                        key={tab} 
                        title={tab}
                        className={`font-sans px-2 font-light ${selectedTab === tab ? "border-b-[3px] border-[#333] -mb-[1px]" : ""} cursor-pointer`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>

            {/* Tab Content Container */}
            <section className='bg-grey-360 border-y border-[#ccc]'>
                <div className='wrapper p-8'>
                    {/* Responsibility - אחריות */}
                    {tabs[0] === selectedTab && (
                        <ul>
                            Reviews
                        </ul>
                    )}

                    {/* Video */}
                    {tabs[1] === selectedTab && (
                        <div className='relative'>
                            <iframe 
                                src="//www.youtube.com/embed/XHTrLYShBRQ?title=0&rel=0&showinfo=0"
                                style={{ width: "100%" }}
                                width="640"
                                height="612"
                                data-ratio="1.777"
                                frameBorder={0}
                                allowFullScreen=""
                            />
                        </div>
                    )}

                    {/* Specification */}
                    {tabs[2] === selectedTab && (
                        <div className='text-end'>Specification</div>
                    )}

                    {/* Box */}
                    {tabs[3] === selectedTab && (
                        <div className='text-end'>What's in the box</div>
                    )}

                    {/* Reviews */}
                    {tabs[4] === selectedTab && (
                        <div className='text-end'>Reviews</div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Tabs