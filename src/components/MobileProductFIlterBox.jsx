import React, { useState } from 'react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const MobileProductFIlterBox = ({ data, className="" }) => {
  const [activeAccordion, setActiveAccordion] = useState("");

  return (
    <div className={cn(`flex relative md:hidden border-b border-app-border direction-rtl ${data.length > 8 ? "overflow-x-scroll" : ""}`, className)}>
        {Object.entries(data).map(([key, data]) => (
            <div key={key} style={{ flex: "0 0" }}>
              <Button 
                className={`text-base justify-start font-light select-none rounded-none px-2 pb-2 ${key === activeAccordion ? "border-b border-app-text-dark-9" : ""}`}
                size="none"
                width="max"
                onClick={() => {
                    if(activeAccordion === key)
                        setActiveAccordion("")
                    else
                        setActiveAccordion(key)
                }}
              >
                {key}
              </Button>

              {/* Content */}
              <ul className={`absolute w-full z-20 right-0 top-[105%] bg-white px-3 transition-all overflow-hidden duration-300 flex flex-col items-center ${activeAccordion === key ? "py-3 h-auto" : "h-0" }`}>
                {data.map(value => (
                  <li 
                    key={value} 
                    className="font-light cursor-pointer select-none w-max"
                  >
                      {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  )
}

// before:block before:w-full before:h-screen before:absolute before:-top-[22rem] before:left-0 before:bg-grey-400 before:opacity-90 before:z-30

export default MobileProductFIlterBox