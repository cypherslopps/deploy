import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Button } from './ui/Button';

const productFilterBoxVariants = {
  hidden: {
    x: "10rem"
  },
  visible: {
    x: 0,
    transition: {
      delay: .1,
      duration: .08
    }
  }
}

const ProductFilterBox = ({ data, isOpen }) => {
  const [activeAccordion, setActiveAccordion] = useState([]);

  const accordion = (key) => {
    if(!activeAccordion.includes(key)) {
      const newActiveAccordion = [
        ...activeAccordion,
        key
      ];
      setActiveAccordion(newActiveAccordion);
    } else {
      // Remove key from array
      const newActiveAccordion = activeAccordion.filter(accordion => accordion !== key);
      setActiveAccordion(newActiveAccordion);
    }
  }

  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.aside 
          className="hidden md:inline-block w-52 direction-rtl"
          variants={productFilterBoxVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(data).map(([key, data]) => (
            <div key={key} className="w-full">
              <Button 
                className="text-base justify-start font-light select-none rounded-none border-b border-app-border py-4"
                size="none"
                width="full"
                onClick={() => accordion(key)}
              >
                {key}
              </Button>

              {/* Carousel Content */}
              <ul className={`transition-all overflow-hidden duration-200 ${activeAccordion.includes(key) ? "py-4 h-auto" : "h-0" }`}>
                {data.map(value => (
                  <li 
                    key={value} 
                    className="font-light cursor-pointer select-none"
                  >
                      {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default ProductFilterBox