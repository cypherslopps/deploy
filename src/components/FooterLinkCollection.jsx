import React from 'react';
import FooterLinkItem from './FooterLinkItem';

const FooterLinkCollection = ({ links, key }) => {
  return (
    <ul className={`flex flex-col  ${key === "תמיכה ושירות" ? "gap-y-1" : "gap-y-1.5"}`}>
        {links.map((link) => (
          <FooterLinkItem 
            key={link.title} 
            {...link}
          />
        ))}
    </ul>
  )
}

export default FooterLinkCollection