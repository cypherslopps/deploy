import React from 'react';
import { cn } from '../lib/utils';

const Banner = ({ children, className }) => {
  return (
    <div className={cn("bg-primary-450 p-2 xs:p-3 sm:p-4 md:p-[1.2rem]", className)}>
      {children}
    </div>
  )
}

export default Banner