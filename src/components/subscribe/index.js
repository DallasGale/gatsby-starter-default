import React from 'react';


export default( { title, cta, fieldLabel } ) => (
  <div className="subscribe">
    <div className="subscribe__title">{ title }</div>
    <form name="subscribe" method="POST" data-netlify="true" action="/thanks">
      <div>
        <input required className="subscribe__input" type="email" name="email" placeholder={ fieldLabel } />
      </div>
      <div>
        <button className="subscribe__button" type="submit">
          { cta }
        </button>
      </div>
    </form>
  </div>
)
