require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Dipanjan Panja`,
    // Default title of the page
    siteTitleAlt: `Dipanjan Panja - Full Stack developer`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Dipanjan Panja - Full Stack developer`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://dipanjanpanja.in`,
    // Used for SEO
    siteDescription: `A final year Computer Science & Engineering undergraduate student with an interest in JAVA,Node js,React JS and beginner in AI looking for an opportunity to utilize my skill in professional work experience. To perform well in a challenging environment that offer scope for personal and professional growth and in the process, contribute my best to the organization. `,
    // Will be set on the html tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/favicon.png`,
    // Twitter Handle
    author: `@dipanjanpanja6`,
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/dipanjanpanja6",
      },
      {
        name: "github",
        url: "https://github.com/dipanjanpanja6",
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Education`, slug: `/education` },
          { name: `Experience`, slug: `/experience` },
          { name: `Projects`, slug: `/projects` },
          { name: `Instagram`, slug: `/instagram` },
          { name: `About`, slug: `/about` },
        ],
        homepageProjectLimit:5
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `2070991930`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dipanjan Panja - Full Stack developer`,
        short_name: `Dipanjan Panja`,
        description: `A final year Computer Science & Engineering undergraduate student with an interest in JAVA,Node js,React JS and beginner in AI looking for an opportunity to utilize my skill in professional work experience. To perform well in a challenging environment that offer scope for personal and professional growth and in the process, contribute my best to the organization. `,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        // icons: [
        //   {
        //     src: `/favicon.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/favicon.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
        icons: [
          {
           "src": "\/android-icon-36x36.png",
           "sizes": "36x36",
           "type": "image\/png",
           "density": "0.75"
          },
          {
           "src": "\/android-icon-48x48.png",
           "sizes": "48x48",
           "type": "image\/png",
           "density": "1.0"
          },
          {
           "src": "\/android-icon-72x72.png",
           "sizes": "72x72",
           "type": "image\/png",
           "density": "1.5"
          },
          {
           "src": "\/android-icon-96x96.png",
           "sizes": "96x96",
           "type": "image\/png",
           "density": "2.0"
          },
          {
           "src": "\/android-icon-144x144.png",
           "sizes": "144x144",
           "type": "image\/png",
           "density": "3.0"
          },
          {
           "src": "\/android-icon-192x192.png",
           "sizes": "192x192",
           "type": "image\/png",
           "density": "4.0"
          }
         ]
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
