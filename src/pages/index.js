import React from 'react';
import Link from 'gatsby-link';

// import components
import Subscribe from '../components/subscribe';

export const IndexPage = ( {data} ) => (

  <div>
    <h1 className="hero__title">{ data.site.siteMetadata.title }</h1>
    <h2 className="hero__subtitle">by { data.site.siteMetadata.author }</h2>
    <Subscribe 
      title={ data.site.siteMetadata.subscribeData.title } 
      cta={ data.site.siteMetadata.subscribeData.cta } 
      fieldLabel={ data.site.siteMetadata.subscribeData.fieldLabel } />
  </div>
)

export default IndexPage


export const query = graphql`
  query HeroQuery {
    site {
      siteMetadata {
        title
        author
        subscribeData {
          cta
          fieldLabel
          title
        }
      }
    }
  }
`