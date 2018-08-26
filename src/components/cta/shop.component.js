import React from 'react';
import PropTypes from 'prop-types';
import { ShopNowButton } from '../buttons/';
import { css } from 'emotion';
import { Motion, spring } from 'react-motion';
import inprnt from '../../assets/logos/inprnt.png';
import zazzle from '../../assets/logos/zazzle.png';


const ShopCTA = props => {
  return (
    <div 
      className={ containerStyle } 
      onMouseLeave={ props.handleOnMouse }>
    
      {/* Shop Now CTA */}

      <ShopNowButton
        handleShopCta={ props.handleShopCta }
        showShopLogos={ props.showShopLogos }
        label="Shop Now" />
      {/* Show Now -> Stores */}
      <Motion 
          defaultStyle={{ x: -500, opacity: 0 }} 
          style={
            { 
              x: spring(props.showShopLogos ? 20 : -500, { 
                stiffness: 150, damping: 18 
              }), 
              opacity: spring(props.showShopLogos ? 1 : 0, { 
                stiffness: 70,
              }) 
            }
          }>
          {
            (style) => (
            <div style={{ 
                position: 'absolute', 
                bottom: '8px',
                transform: `translateX(${ style.x }px)`, 
                opacity: style.opacity}}>

                {/* Inprnt */}
                <a 
                  href='https://www.inprnt.com/gallery/eyespynature/' 
                  target='_blank'> 
                  <img 
                    className={ logoStyle } 
                    style={{ paddingRight: '20px' }} 
                    src={inprnt} 
                    alt="Buy from INPRNT" />
                </a>

                {/* Zazzle */}
                <a 
                  href='https://www.zazzle.com/eyespynature' 
                  target='_blank'> 
                  <img 
                    className={ logoStyle } 
                    src={zazzle} 
                    alt="Buy from Zazzle" />
                </a>
            </div>
            )
          }
      </Motion>
    </div>
  );
};

ShopCTA.propTypes = {
  showShopLogos: PropTypes.bool.isRequired,
  handleOnMouse: PropTypes.func.isRequired,
  handleShopCta: PropTypes.func.isRequired,
};

export default ShopCTA;



// - - - - - - - - - - - - 
// CSS
// - - - - - - - - - - - - 

const containerStyle = css`
  bottom: 0;
  cursor: pointer;
  display: block;
  height: 50px;
  width: 100%;
  position: fixed;
  transition: all 0.4s;
  left: 0;
`;

const logoStyle = css`
  height: 20px;
  margin-bottom: 0 
`