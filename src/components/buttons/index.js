import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';


// - - - - - - -
// SHOP NOW
// - - - - - - - 
export const ShopNowButton = props => {
  return (
    <button 
      onMouseOver={ props.handleShopCta }
      className={ ShopNowButtonStyle } 
      style={{ 
        display: props.showShopLogos ? "none" : "block",
        background: props.showShopLogos ? "white" : "black", 
        color: props.showShopLogos ? "black" : "white"  }}>

        <svg fill="#ffffff" style={{ left: 0 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        {/* { props.label } */}
      </button>
  );
};

ShopNowButton.propTypes = {
  handleShopCta: PropTypes.func.isRequired,
  showShopLogos: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
};

// Styles
const ShopNowButtonStyle = css`
  background: black;
  border: 0;
  bottom: 0;
  color: white;
  left: 0;
  padding: 12px 20px;
  position: fixed;
  font-size: 11px;
`;




// - - - - - - - - - - -
// SUBMIT
// - - - - - - - - - - -

export const SubmitButton = props => {
  return (
    <button className={ submitCss } type="submit">
      { props.cta }
    </button>
  );
};

SubmitButton.propTypes = {
  cta: PropTypes.string.isRequired
};

// Styles
const submitCss = css`
  background: rgba(255,255,255,0.05);
  box-shadow: 0px 26px 23px 0px rgba(0,0,0,0.13);
  border: 0;
  border-bottom: 3px solid;
  border-bottom-color: #edd509;
  cursor: pointer;
  color: #fff;
  display: block;
  height: 40px;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.4;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  width: auto;
  transition: all 0.2s;

  &:hover {
    background: rgba(0,0,0,0.2);
    box-shadow: 0px 10px 13px 0px rgba(0,0,0,0.23);
    transition: all 0.001s;
    transform: scale(0.96);
  }
`


