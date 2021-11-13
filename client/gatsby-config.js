require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_BASE_URL,
    title: "Ezeugwa Gerrard",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@application": "src/application",
          "@domain": "src/domain",
          "@infrastructure": "src/infrastructure",
          "@ui": "src/ui",
          "@images": "src/images",
          "@public": "public",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ezeugwa Gerrard",
        short_name: "Ezeugwa Gerrard",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/ezeugwagerrard.jpg",
      },
    }
  ],
};
