import React from 'react';
import { css } from 'emotion';
import mq from '../../js_css/breakpoints';
import { highlight } from '../../js_css/colors';
import InputField from '../forms/fields/inputField';
import { SubmitButton } from '../buttons/';


// - - - -
// Styles
// - - - -

const subscribe = css({
  position: 'relative',
  // bottom: '80px',
  height: 'auto',
  width: '100%',
});

const subscribe__title = css({
  color: highlight,
  fontSize: '1rem',
  fontWeight: 'normal',
  textAlign: 'center'
});



export default( { title, cta, fieldLabel } ) => (

  <div className={ subscribe }>
    <div className={ subscribe__title }>{ title }</div>
    <form name="subscribe" method="POST" data-netlify="true" action="/thanks">
      <div>
        <InputField type="email" name="email" placeholder={ fieldLabel } />
      </div>
      <div>
        <SubmitButton cta={ cta } />
      </div>
    </form>
  </div>
);
