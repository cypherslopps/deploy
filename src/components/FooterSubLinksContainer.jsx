import React from 'react'
import FooterLinkCollection from './FooterLinkCollection';

const FooterSubLinkContainer = ({ subLinks }) => {
  const seperateSubLinksByKeysAndValues = Object.entries(subLinks);

  return (
    <div>
      {seperateSubLinksByKeysAndValues.map(([key, links]) => (
          <div 
              key={key}
              className={`flex flex-col gap-y-1 mt-3.5`}
          >
              <h4 className="text-app-text-dark font-bold text-sm">{key}</h4>
              <FooterLinkCollection links={links} />
          </div>                
      ))}
    </div>
  )
}

export default FooterSubLinkContainer