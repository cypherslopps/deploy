import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => 
    import("../Home")
);
const ProductCollectionPreview = lazy(() =>
    import("../../components").then(module => ({ default: module.ProductCollectionPreview }))
);
const ProductDescription = lazy(() => 
    import("../ProductDescription")
);

const ProductCollectionLayout = () => {
  return (
    <>
        <Suspense fallback="Loading">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/:productCategory/:productSubCategory" element={<ProductDescription />} />
                <Route path="/:productCategory/:productSubCategory/buy" element={<ProductCollectionPreview />}  />
            </Routes>
        </Suspense>
    </>
  )
}

export default ProductCollectionLayout