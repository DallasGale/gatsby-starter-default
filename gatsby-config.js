module.exports = {
  siteMetadata: {
    title: 'Eye Spy Nature',
    author: 'Dallas Gale',
    subscribeData: {
      title: 'Receive 3 free images',
      fieldLabel: 'you@youremail.com',
      cta: 'Subscribe'
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      }  
    },
  ]
}
