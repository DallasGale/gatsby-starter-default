import React from 'react';
import { Motion, spring } from 'react-motion';
import Link from 'gatsby-link';
import inprnt from '../assets/logos/inprnt.png';
import zazzle from '../assets/logos/zazzle.png';

// import components
import Subscribe from '../components/subscribe';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSubscribe: false,
      showShopLogos: false
    }
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.handleShopCta = this.handleShopCta.bind(this);
    this.handleCtaLeave = this.handleCtaLeave.bind(this);
    this.handleOnMouse = this.handleOnMouse.bind(this);
  }

  // Stateful functions

  handleSubscribe() {
    const subscribeViz = this.state.showSubscribe;
    this.setState({
      showSubscribe: !subscribeViz
    });
  }

  handleShopCta() {
    const logosViz = this.state.showShopLogos;
    this.setState({
      showShopLogos: !logosViz
    })
  }

  handleCtaLeave() {
    this.setState({
      showShopLogos: true
    })
  }

  handleOnMouse() {
    this.setState({
      showShopLogos: false
    })
  }

 

  render() {

    return (
      <div>
        {/* Title / SubTitle  */}
        <h1 className="hero__title">{ this.props.data.site.siteMetadata.title }</h1>
        <h2 className="hero__subtitle">by { this.props.data.site.siteMetadata.author }</h2>
        
        {/* Subscribe -> CTA */}
        <Subscribe 
          title={ this.props.data.site.siteMetadata.subscribeData.title } 
          cta={ this.props.data.site.siteMetadata.subscribeData.cta } 
          fieldLabel={ this.props.data.site.siteMetadata.subscribeData.fieldLabel } />

        {/* Show Now -> CTA */}
        <div style={{
          background: this.state.showShopLogos ? "rgba(0,0,0,0.3)" : "transparent",
          bottom: 0,
          cursor: 'pointer',
          display: 'block',
          height: '50px',
          width: '100%',
          position: 'fixed',
          transition: 'all 0.4s',
          left: 0
        }} onMouseLeave={ this.handleOnMouse }>
        
          <button 
            onMouseOver={ this.handleShopCta }
            className="button__shop" 
            style={{ 
              display: this.state.showShopLogos ? "none" : "block",
              background: this.state.showShopLogos ? "white" : "black", 
              color: this.state.showShopLogos ? "black" : "white"  }}>
            SHOP NOW
          </button>
          {/* Show Now -> Stores */}
          <Motion 
              defaultStyle={{ x: -500, opacity: 0 }} 
              style={
                { 
                  x: spring(this.state.showShopLogos ? 20 : -500, { 
                    stiffness: 150, damping: 18 
                  }), 
                  opacity: spring(this.state.showShopLogos ? 1 : 0, { 
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
                    <a href='https://www.inprnt.com/gallery/eyespynature/' target='_blank'> 
                      <img style={{ height: '20px', marginBottom: 0, paddingRight: '20px' }} src={inprnt} alt="Buy from INPRNT" />
                    </a>
                    <a href='https://www.zazzle.com/eyespynature' target='_blank'> 
                      <img style={{ height: '20px', marginBottom: 0 }} src={zazzle} alt="Buy from Zazzle" />
                    </a>
                </div>
                )
              }
          </Motion>
        </div>
      </div>
    )
  }
}

export default IndexPage


export const query = graphql`
  query HeroQuery {
    site {
      siteMetadata {
        title
        author
        subscribeData {
          cta
          fieldLabel
          title
        }
      }
    }
  }
`