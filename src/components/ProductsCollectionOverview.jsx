import React, { useEffect } from 'react';
import ProductsCollectionItem from './ProductsCollectionItem';

const ProductsCollectionOverview = ({ type }) => {
    return (
        <section className='flex justify-end flex-wrap transition-all duration-1000 px-1 sm:px-0'>
            <ProductsCollectionItem type={type} />
            <ProductsCollectionItem type={type} />
            <ProductsCollectionItem type={type} />
            <ProductsCollectionItem type={type} />
            <ProductsCollectionItem type={type} />
            <ProductsCollectionItem type={type} />
        </section>
    )
}

export default ProductsCollectionOverview