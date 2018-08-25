import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// - - - - - - 
// CSS
// - - - - - -

const button = css`
  background: black;
  border: 0;
  bottom: 0;
  color: white;
  left: 0;
  padding: 12px 20px;
  position: fixed;
  font-size: 11px;
`;

const ShopNow = props => {
  return (
    <button 
      onMouseOver={ props.handleShopCta }
      className={ button } 
      style={{ 
        display: props.showShopLogos ? "none" : "block",
        background: props.showShopLogos ? "white" : "black", 
        color: props.showShopLogos ? "black" : "white"  }}>
        { props.label }
      </button>
  );
};

ShopNow.propTypes = {
  handleShopCta: PropTypes.func.isRequired,
  showShopLogos: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
};

export default ShopNow;