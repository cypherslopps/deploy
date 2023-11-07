import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Beats = lazy(() => import("../Beats"));
const BeatsProductDescription = lazy(() => import("../BeatsProductDescription"));
const Replacement = lazy(() => import("../Replacement"));

const BeatsLayout = () => {
  return (
    <Suspense fallback="loading">
        <Routes>
            <Route index element={<Beats />} />
            <Route path="replacement" element={<Replacement />} />
            <Route path=":productName" element={<BeatsProductDescription />} />
        </Routes>
    </Suspense>
  )
}

export default BeatsLayout