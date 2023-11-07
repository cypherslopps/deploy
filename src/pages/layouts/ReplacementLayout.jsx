import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Replacement = lazy(() => import("../Replacement"));
const ProductDescription = lazy(() => import("../ProductDescription"));

const ReplacementLayout = () => {
  return (
    <Suspense fallback="loading">
        <Routes>
            <Route index element={<Replacement />} />
            <Route path=":productName" element={<ProductDescription />} />
        </Routes>
    </Suspense>
  )
}

export default ReplacementLayout