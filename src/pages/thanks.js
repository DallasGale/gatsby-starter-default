import React from 'react';
import Home from '../components/cta/home.cta';

export default() => {
  return (
    <div className="thanks">
      <h1 className="thanks__title">
        You have successfully subscribed.
      </h1>
      <h2 className="thanks__subtitle">
        Thanks you!
      </h2>
      <Home link='/' />
    </div>
  );
};
