import React from 'react';
import { Button } from './ui/Button';
import Icons from './Icons';

const SearchBoxButton = ({ openSearchBox }) => {
  return (
    <Button 
        onClick={() => openSearchBox(props => !props)}
        title="חפש"
        size="none"
    >
        <Icons.Search className='w-5 h-5 sm:w-[1.3rem] sm:h-[1.3rem] md:w-[1.4rem] md:h-[1.4rem] md-lg:w-6 md-lg:h-6' />
    </Button>
  )
}

export default SearchBoxButton