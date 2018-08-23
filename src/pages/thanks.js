import React from 'react';
import Link from 'gatsby-link';

export default() => {
  return (
    <div>
      <h1 className="subscribe__title--thanks">
        You have successfully subscribed.
      </h1>
      <h2 className="hero__subtitle">
        Thanks you!
      </h2>
      <Link to='/' className="link">HOME</Link>
    </div>
  );
};
