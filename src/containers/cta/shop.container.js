import React, { Component } from 'react';
import ShopCTA from '../../components/cta/shop.component';

class ShopContainer extends Component {
  constructor() {
    super();
    this.state = {
      showShopLogos: false
    }
    this.handleShopCta = this.handleShopCta.bind(this);
    this.handleCtaLeave = this.handleCtaLeave.bind(this);
    this.handleOnMouse = this.handleOnMouse.bind(this);
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
      <ShopCTA 
        showShopLogos={ this.state.showShopLogos }
        handleOnMouse={ this.handleOnMouse }
        handleShopCta={ this.handleShopCta }
         />
    );
  }
}
export default ShopContainer;