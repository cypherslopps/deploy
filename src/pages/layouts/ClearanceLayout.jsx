import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Clearance = lazy(() => import("../Clearance"));
const ClearanceMac = lazy(() => import("../ClearanceMac"));
const Accessories = lazy(() => import("../ClearanceAccessories"));
const ProductDescription = lazy(() => import("../ProductDescription"));

const ClearanceLayout = () => {
  return (
    <Suspense fallback="loading">
        <Routes>
            <Route index element={<Clearance />} />
            <Route path="mac" element={<ClearanceMac />}>
              <Route path=":productName" element={<ProductDescription />} />
            </Route>
            <Route path="/accessories" element={<Accessories />} />
        </Routes>
    </Suspense> 
  )
}

export default ClearanceLayout