import React from 'react';
import ShopContainer from '../containers/cta/shop.container';
import { css } from 'emotion';

// import components
import Subscribe from '../components/subscribe';


// - - - - - -  - - - - - 
// CSS
// - - - - - -  - - - - - 

const container = css`
  display: grid;
  max-width: 500px;
  width: 100%;
  grid-template-colums: repeat(auto-fill, minmax(300px, 1fr));
  resize: horizontal;
`;

const titles = css`
  grid-row-start: 1
`;


const subscribe = css`
  grid-row-start: 2
`


class IndexPage extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

 

  render() {

    return (
      <div className={ container }>
        {/* Title / SubTitle  */}
        <div className={ titles }>
          <h1 className="hero__title">{ this.props.data.site.siteMetadata.title }</h1>
          <h2 className="hero__subtitle">by { this.props.data.site.siteMetadata.author }</h2>
        </div>
        
        {/* Subscribe -> CTA */}
        <div className={ subscribe }>
          <Subscribe 
            title={ this.props.data.site.siteMetadata.subscribeData.title } 
            cta={ this.props.data.site.siteMetadata.subscribeData.cta } 
            fieldLabel={ this.props.data.site.siteMetadata.subscribeData.fieldLabel } />
        </div>

        {/* Show Now -> CTA */}
        <ShopContainer />
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