import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'

const Tooltip = ({ title, children }) => {
    const [isTooltipContentVisible, toggleIsTooltipContentVisible] = useState(false);

    return (
        <div className='relative'>
            <span 
                className='text-[13px] text-primary-500 cursor-pointer font-light'
                onMouseOver={() => toggleIsTooltipContentVisible(true)}
                onMouseLeave={() => toggleIsTooltipContentVisible(false)}
            >
                {title}
            </span>

            {/* Tooltip Content */}
            <AnimatePresence>
                {isTooltipContentVisible && (
                    <motion.div 
                        className='absolute -top-[92.7px] right-1/2 text-center h-[60px] p-2 leading-5 w-[210px] border border-black text-black -mr-[152px] text-sm bg-white before:block before:absolute before:-bottom-[.475rem] before:left-1/2 before:-translate-x-[50%] before:bg-white before:w-3.5 before:h-3.5 before:rotate-45 before:border-r before:border-b before:border-black'
                        initial={{ display: "none", opacity: 0 }}
                        animate={{ display: "inline-block", opacity: 1 }}
                        transition={{
                            opacity: {
                                delay: .02,
                                duration: .05
                            }
                        }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Tooltip