import { useState, useEffect } from 'react'

const useScroll = () => {
    const [navigationIsSticky, setNavigationIsSticky] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", stickyNavigation);
  
      return () => window.removeEventListener("scroll", stickyNavigation);
    }, []);
  
    function stickyNavigation() {
      if(window.scrollY >= 72)
        setNavigationIsSticky(true);
      else  
        setNavigationIsSticky(false);
    }

    return { navigationIsSticky };
}

export default useScroll