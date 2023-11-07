import React from 'react';
import Icons from './Icons';
import { Button } from './ui/Button';

const ProductFilterButton = ({ toggleFilterBoxOpen }) => {
  return (
    <Button
      size="none"
      role="filter button"
      title="filter button"
      className="hidden md:flex text-md gap-x-1.5 direction-ltr font-light"
      onClick={toggleFilterBoxOpen}
    >
      מסנן
      <Icons.Filter className="w-5 h-5 stroke-[.1]" /> 
    </Button>
  )
}

export default ProductFilterButton