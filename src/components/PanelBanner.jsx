import React from 'react'
import Portals from './Portals';

const PanelBanner = () => {
  return (
    <Portals elementID="panel-banner">
      <div 
        className="bg-black/85 fixed bottom-0 left-1/2 z-50 w-[550px] mb-4 rounded-[50px] text-sm" 
        style={{ transform: "translateX(-50%)" }}
      >
          PanelBanner
      </div>
    </Portals>
  )
}

export default PanelBanner;