import React from 'react'
import ChapterItem from './ChapterItem';

const ChapterItemCollection = ({ chapters }) => {
  return (
    <div className="mt-3 mb-[30px] z-30 overflow-x-scroll w-11/12 mx-auto sm:mx-0 sm:w-full sm:pb-0 sm:px-0 sm:overflow-hidden">
      <div className={`flex justify-center gap-x-0.5 w-max mx-auto px-3`}>
        {chapters.map(chapter => (
          <ChapterItem 
            key={chapter.title}
            {...chapter}
          />
        ))}
      </div>
    </div>
  )
}

export default ChapterItemCollection;