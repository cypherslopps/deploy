import React from 'react' 
import { Link } from 'react-router-dom';
import usePath from '../hooks/usePath';

const NavigationLink = ({ title, route, name, type, closeOffset }) => {
  const { activePath: activePathname } = usePath(name);

  return (
    <li 
      onClick={() => type === "offset" ? closeOffset() : null}
      className={`py-1 xs:py-1.5 md:py-2 xl:py-4 ${activePathname === route ? "xl:border-b xl:border-black" : ""}`}
      title={title}
    >
      <Link 
        to={`${route}`} 
        className={`font-sans text-md xs:text-[1.03rem] md:text-[1.07rem] xl:text-base ${activePathname === route ? "font-bold xl:font-normal" : "text-app-text"}`}>
        {title}
      </Link>
    </li>
  )
}

export default NavigationLink