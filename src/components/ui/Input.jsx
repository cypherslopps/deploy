import React, { useRef } from 'react';
import { cn } from "../../lib/utils";
import { Button } from './Button';
import SelectLeftArrow from "../../assets/images/select_left.png";

export const Input = ({ error, className, containerClassName, ...props }) => {
  return (
    <div
      role="group"
      className={cn("w-full flex flex-col relative gap-y-1", containerClassName)}
    > 
      <input 
        id={`input-${props.name}`}
        className={cn(`py-1 px-2 outline-none text-black font-light placeholder:text-sm lg:placeholder:text-md bg-white border border-app-border focus:border-app-border`, className)}
        {...props}
      />
      {error && (
        <span className='text-[#f00] text-[.8em] leading-[1.4em] font-bold mt-[.3em]'>{error}</span>
      )}
    </div>
  )
}

export const Textarea = ({ error, className, ...props }) => {
  return (
    <div
      role="group"
      className="w-full flex flex-col relative gap-y-1"
    > 
      <textarea 
        id={`input-${props.name}`}
        className={cn(`py-1 px-2 outline-none text-black font-light placeholder:text-md bg-white border border-app-border focus:border-accent-600 focus:border-2 h-36 rounded-sm`, className)}
        {...props}
      />
      {error && (
        <span className='text-[#f00] text-[.8em] leading-[1.4em] font-bold mt-[.3em]'>{error}</span>
      )}
    </div>
  )
}

export const Select = ({ options, label, containerClassName, labelClassName, className, ...props }) => {
  return (
    <div className={cn('flex items-center gap-x-2', containerClassName)} role="select-group">
      {label && <label className={cn('text-sm xs:text-md text-grey-500', labelClassName)}>{label}</label>}
      <select 
        className={cn(`text-black font-light text-md md:text-base placeholder:text-sm md:placeholder:text-md bg-white border border-app-border appearance-none pl-8 lg:pl-10 py-1 rounded-sm font-sans`, className)}
        style={{ 
          background: `url(${SelectLeftArrow})`,
          backgroundPosition: "2px",
          backgroundRepeat: "no-repeat" 
        }}
        {...props}
      >
        {options.map(option => (
          <option key={option?.value ?? option}>{option?.key ?? option}</option>
        ))}
      </select>
    </div>
  )
}

export const Radio = ({ label, error, className, childrenClassName, options, setRadioValue, ...props }) => {
  return (
    <div className={cn('flex flex-col gap-y-1.5', className)} role="select-group">
      {label && <label className={cn('text-sm font-light md:text-md', childrenClassName)}>{label}</label>}
      
      {/* Radio Inputs */}
      <div className="flex gap-x-1.5">
        {options.map(option => (
          <div className='flex items-center gap-x-1' key={option}>
            <input 
              type="radio"
              title={option}
              {...props}
              id={`createInvioce_${option}`}
              className="w-[.9rem] h-[.9rem] border border-[#aaa] rounded-full bg-white outline-none opacity-50 leading-6 checked:bg-black checked:border-2 checked:border-[#aaa]"
              value={option}
              onChange={({ target }) => setRadioValue(target.value)}
            />
            <label htmlFor={`createInvioce_${option}`} className={cn("pr-2 font-light font-base", childrenClassName)}>{option}</label>
          </div>
        ))}
      </div>

      {error && (
        <span className='text-[#f00] text-[.8em] leading-[1.4em] font-bold -mt-[.15em]'>{error}</span>
      )}
    </div>
  )
}

export const File = ({ label, error, setFile, className, ...props }) => {
  const inputRef = useRef(null);

  const setInputFile = ({ target }) => {
    console.log(target.files[0]);
  }

  return (
    <div className='flex flex-col'>
      <div className={cn("flex items-end h-[auto] border-2 border-[#f4f4f4] p-0.5", className)}>
        <input 
          type="file"
          ref={inputRef}
          className='hidden'
          onChange={setInputFile} 
          {...props}
        />

        <div className="w-full grid grid-cols-[max-content_1fr] gap-x-2">
          <Button
            variant="primary"
            type="button"
            className="h-[37px] leading-[37px] rounded-[1.2em] md:text-[.8em] font-light"
          >
            {label}
          </Button>

          <input 
            type="text"
            className='w-full h-full bg-transparent text-black'
            value="{path}"
          />
        </div>
      </div>

      {error && (
        <span className='text-[#f00] text-[.8em] leading-[1.4em] font-bold -mt-[.15em]'>{error}</span>
      )}
    </div>
  )
}