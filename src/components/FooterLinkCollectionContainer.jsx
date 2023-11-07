import React from 'react'
import FooterLinkCollection from './FooterLinkCollection';

const FooterLinkCollectionContainer = ({ footerLinks }) => {
    const seperateLinksByKeysAndValues = Object.entries(footerLinks);

    return (
        <div className='w-full grid grid-cols-2 gap-y-4 gap-x-10 xs:gap-x-7 sm:gap-x-5 md:gap-y-0 md:justify-normal md:gap-x-0 md:grid-cols-4'>
            {seperateLinksByKeysAndValues.reverse().map(([key, links]) => (
                <div 
                    key={key}
                    className={`flex flex-col ${key === "תמיכה ושירות" ? "gap-y-1" : "gap-y-1.5"}`}
                >
                    <h4 className="text-app-text-dark font-bold text-[.94rem] xs:text-md sm:text-base">{key}</h4>
                    <FooterLinkCollection 
                        links={links} 
                        key={key}
                    />
                </div>                
            ))}
        </div>
    )
}

export default FooterLinkCollectionContainer