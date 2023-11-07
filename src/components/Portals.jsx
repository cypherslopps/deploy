import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from "react-dom";

const Portals = ({ elementID, children }) => {
    let portalRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        portalRef.current = document.getElementById(`${elementID}`);
        setMounted(true);
    }, [mounted, elementID]);


    return ((mounted && portalRef.current) ? createPortal(
        <>{children}</>,
        portalRef.current
    ) : null)
}
export default Portals;