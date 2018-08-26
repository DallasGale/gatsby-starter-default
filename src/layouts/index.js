import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Launching } from '../components/banners'; 

import './index.css'
import '../styles/app.scss';



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Bespoke nature photography by Dallas Gale' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    {/* Banner */}
    <Launching />

    <section className="hero">
      <div className="hero__content">
        {children()}
      </div>
    </section>

    <div className="background"></div>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`