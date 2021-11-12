const path = require('path');

{
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
            "@application": path.resolve(__dirname, "src/application"),
            "@domain": path.resolve(__dirname, "src/domain"),
            "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
            "@ui": path.resolve(__dirname, "src/ui"),
            "@public": path.resolve(__dirname, "public"),
        },
        extensions: ["js"],
      },
    },
  ];
}
