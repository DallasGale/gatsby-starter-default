import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { Motion, spring } from 'react-motion';

// - - - - - - -
// BANNERS
// - - - - - - -


// Launching Soon
export const Launching = props => {
  return (
    <Motion 
      defaultStyle={{ textIndent: -500, opacity: 0, top: -300 }}
      style={
        {
          textIndent: spring(10, { stiffness: 80, damping: 7 }), 
          opacity: spring(1), 
          top: spring(0, { stiffness: 120 })
        }
      }>
      {
        (style) => (
          <div 
            className={ launchingStyle } 
            style={{ textIndent: style.textIndent, opacity: style.opacity, top: style.top }}>
            Launching Soon
          </div>
        )
      }
    </Motion>
  );
};

Launching.propTypes = {
  
};

// - - - - - - -
// STYLES
// - - - - - - -

const launchingStyle = css`
  background: rgba(255, 127, 170,0.9);
  box-shadow: -4px 6px 51px -11px rgba(0,0,0,0.75);
  color: #fff;
  display: block;
  height: auto;
  font-size: 1.6rem;
  font-family: 'Sacramento', cursive;
  left: -90px;
  padding: 10px 60px 10px 0;
  position: fixed;
  transform: rotate(-18deg);
  text-shadow: 1px 2px rgba(0,0,0,0.4);
  text-align: center;
  width: 400px;
  z-index: 4;
`