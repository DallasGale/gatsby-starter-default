import React from 'react';
import { css } from 'emotion';
import { breakpoints } from '../../js_mediaqueries';

// Import components
import InputField from '../forms/fields/inputField';
import SubmitButton from '../buttons/submit';


// Styles
const subscribe = css`
  color: #edd509;
  position: absolute;
  bottom: 80px;
  height: auto;
  width: 300px;
  @media (max-width: 970px) {
    width: 100%;
  }
  
`;

const subscribe__title = css`
  color: #edd509;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
`;


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
)
