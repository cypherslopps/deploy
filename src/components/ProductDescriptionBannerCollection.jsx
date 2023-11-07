import React from 'react';
import { productDescriptionList } from '../lib/constants/home.constants';
import ProductDescriptionBanner from './ProductDescriptionBanner';

const ProductDescriptionBannerCollection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      {productDescriptionList.map((product) => (
        <ProductDescriptionBanner
          key={product.subHeading}
          size='sm'
          {...product}
        />
      ))}
    </section>
  )
}

export default ProductDescriptionBannerCollection