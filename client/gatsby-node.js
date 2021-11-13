const axios = require("axios");

exports.createPages = async function ({ actions }) {
  const { data: posts } = await axios.get(`${process.env.GATSBY_API_HOST}/posts`);

  posts.forEach((p) => {
    actions.createPage({
      path: `/blog/${p.id}/`,
      component: require.resolve("./src/ui/components/organisms/blog-post.js"),
      context: { id: p.id },
    });
  });

  const { data: categories } = await axios.get(`${process.env.GATSBY_API_HOST}/categories`);

  categories.forEach((c) => {
    actions.createPage({
      path: `/blog/${c.id}/category`,
      component: require.resolve("./src/pages/category.js"),
      context: { categoryid: c.id },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
