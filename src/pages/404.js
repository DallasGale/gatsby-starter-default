import React from 'react'
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <section className="page-not-found">
    <div className="page-not-found__content">
      <h1>Oops! 404</h1>
      <h2>Page Not found</h2>
      {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
      <Link to="/">Back home</Link>
    </div>
  </section>
)

export default NotFoundPage
