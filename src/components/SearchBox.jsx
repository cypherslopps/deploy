import React from 'react'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import Icons from './Icons'

const SearchBox = () => {
  return (
    <form className='w-full p-1 md:p-2 grid grid-cols-[1fr_max-content]'>
      <Input 
        type="search"
        name="productQuery"
        className="text-[#aaa] border-none"
        id="search"
      />

      {/* Search Button */}
      <Button 
        size="none"
        width="max"
        className="p-1"
      >
        <Icons.Search className='w-[1.15rem] h-[1.15rem] sm:w-5 sm:h-5' />
      </Button>
    </form>
  )
}

export default SearchBox