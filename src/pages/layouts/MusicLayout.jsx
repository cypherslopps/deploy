import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const AirpodsBeats = lazy(() => import("../AirpodsBeats"));
const ReplacementLayout = lazy(() => import("./ReplacementLayout"));
const BeatsLayout = lazy(() => import("./BeatsLayout"));

const MusicLayout = () => {
  return (
    <Suspense>
        <Routes>
            <Route index element={<AirpodsBeats />} />
            <Route path="beats/*" element={<BeatsLayout />} />
            <Route path="replacement/*" element={<ReplacementLayout />} />
        </Routes>
    </Suspense>
  )
}

export default MusicLayout