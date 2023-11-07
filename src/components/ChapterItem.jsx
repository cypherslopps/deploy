import React from 'react'
import { Link } from 'react-router-dom'

const ChapterItem = ({ Icon, title, subTitle, info, href }) => {
  return (
    <Link 
        to={`${href}`}
        title={title}
        className='flex-1'
    >
        <div className='flex-1 flex flex-col items-center px-1 md:px-2'>
            <Icon className="h-10 sm:h-12 xl:h-14" />

            {/* Content */}
            <div className='flex-1 flex flex-col items-center gap-x-0.5'>
                <p className="w-max text-[.62rem] sm:text-[.72rem] md:leading-4 md:text-xs text-center font-light">
                    {title}
                    {subTitle && (
                        <>
                            <br />
                            {subTitle}
                        </>
                    )}
                </p>
                {info && <span className="capitalize font-light text-[#f00] text-xs">{info}</span>}
            </div>
        </div>
    </Link>  
  )
}

export default ChapterItem