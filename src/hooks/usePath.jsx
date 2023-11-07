import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentParams } from '../lib/utils';

const usePath = ({ routeTitle }) => {
    const { pathname } = useLocation();
    const [activePathname, setActivePathname] = useState("");
    
    useEffect(() => {
      const currentPath = getCurrentParams(routeTitle);
      setActivePathname(currentPath);
    }, [pathname, routeTitle]);

    return { activePath: activePathname };
}

export default usePath