import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Refurbish = lazy(() => import("../Refurbish"));
const ProductDescription = lazy(() => import("../ProductDescription"));

const RefurbishLayout = () => {
  return (
    <Suspense fallback="loading">
        <Routes>
            <Route index element={<Refurbish />} />
            <Route path=":productName" element={<ProductDescription />} />
        </Routes>
    </Suspense> 
  )
}

export default RefurbishLayout