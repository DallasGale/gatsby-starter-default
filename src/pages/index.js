import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ( {data} ) => (
  
  <div>
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{ data.site.siteMetadata.title }</h1>
        <h2 className="hero__subtitle">by { data.site.siteMetadata.author }</h2>
      </div>
    </section>

    <div className="background"></div>
  </div>
)

export default IndexPage


export const query = graphql`
  query HeroQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`