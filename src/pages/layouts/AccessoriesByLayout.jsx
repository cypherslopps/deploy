import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const AccessoriesBy = lazy(() => import("../AccessoriesBy"));
const IphoneAccessories = lazy(() => import("../IphoneAccessories"));
// const BeatsProductDescription = lazy(() => import("../BeatsProductDescription"));
// const Replacement = lazy(() => import("../Replacement"));

const AccessoriesByLayout = () => {
  return (
    <Suspense fallback="loading">
        <Routes>
            <Route index element={<AccessoriesBy />} />
            <Route path="iphone" element={<IphoneAccessories />} />
            {/* <Route path=":productName" element={<BeatsProductDescription />} /> */}
        </Routes>
    </Suspense>
  )
}

export default AccessoriesByLayout