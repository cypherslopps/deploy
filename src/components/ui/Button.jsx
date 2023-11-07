import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const buttonVariants = cva(
	"flex items-center justify-center truncate cursor-pointer font-inherit rounded-lg transition-colors duration-300 disabled:hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed gap-x-1",
	{
		variants: {
			variant: {
				primary: "bg-primary-400 text-white hover:bg-primary-tint-800 disabled:hover:bg-primary-900 focus:bg-primary-800 disabled:focus:bg-primary-900 stroke-white",
				"red-border": "border border-red-400 text-red-400 hover:border-red-500 hover:bg-red-500 hover:text-white",
				"red": "text-white bg-red-500 hover:bg-red-600",
				accent: "bg-accent-shade-800 text-black hover:bg-accent-tint-800 focus:bg-accent-shade-300 disabled:hover:bg-accent-shade-800 disabled:focus:bg-accent-shade-800 stroke-black",
				transparent: "bg-transparent text-gray-900 stroke-black",
				border: "border border-black text-black stroke-black",
				facebook: "bg-facebook text-white",
				secondary: "bg-secondary-300 text-white",
				"secondary-text": "text-secondary-500",
				white: "bg-grey-100 text-secondary-500",
				"white-text": "text-white"
			},
			size: {
				nm: "w-[max-content] py-[.4rem] px-4 sm:py-2 md:px-4 lg:px-[16px] text-sm md:text-[.92rem]",
				lg: "py-1.5 md:py-2 px-4 sm:px-6 md:px-4 lg:px-[29px] text-sm md:text-base",
				link: "w-[26px] min-w-[26px] py-2 px-[22px] leading-[1.1764805882] text-[17px]",
				sm: "py-[.7em] px-4 min-w-[8em] text-[.8em]",
				none: ""
			},
		width: {
			max: "w-max",
			full: "w-full"
		}
		},
			defaultVariants: {
			variant: "transparent",
			size: "nm",
      		width: "max"
		}
	}
);

export const Button = ({ 
  children, 
  className,
  variant,
  size, 
  width,
  ...props 
}) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size, width, className }))}
      {...props}
    >
      {children}
    </button>
  )
}