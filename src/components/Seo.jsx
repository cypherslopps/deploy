import React from 'react'
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="title" content={title}></meta>
        <meta name="keywords" content={keywords}></meta>
        <link rel="canonical" href="https://www.istorei.co.il" />

        {/* OG Meta tags */}
        <meta property="og:type" content="web app" />
        <meta property="og:title" content={title} />
        <meta property='og:description' content={description} />

        {/* Twitter */}
        <meta name="twitter:creator" content="IStore" />
        <meta name="twitter:card" content="web app" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO;