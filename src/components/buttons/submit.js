import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';



const Submit = props => {
  return (
    <button className={ button } type="submit">
      { props.cta }
    </button>
  );
};

Submit.propTypes = {
  cta: PropTypes.string.isRequired
};

export default Submit;



// Styles
const button = css`
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