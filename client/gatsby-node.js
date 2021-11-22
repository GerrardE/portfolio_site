const axios = require("axios");

exports.createPages = async function ({ actions }) {
  const { data: posts } = await axios.get(`${process.env.GATSBY_API_HOST}/posts?_sort=createdAt:DESC`);

  // serve the blogposts
  if(posts.length > 0) {
    actions.createPage({
      path: `/blog`,
      component: require.resolve("./src/pages/blog.js"),
      context: { posts },
    });
  }

  // serve each blogpost
  if(posts.length > 0) {
    posts.forEach((p) => {
      actions.createPage({
        path: `/blog/${p.id}/`,
        component: require.resolve("./src/ui/components/organisms/blog-post.js"),
        context: { post: p },
      });
    });
  }

  const { data: categories } = await axios.get(`${process.env.GATSBY_API_HOST}/categories`);

  if (categories.length > 0){
    categories.forEach((c) => {
      actions.createPage({
        path: `/blog/${c.id}/category`,
        component: require.resolve("./src/pages/category.js"),
        context: { category: c },
      });
    });
  }

  const { data: about } = await axios.get(`${process.env.GATSBY_API_HOST}/about`);

  // // serve the about
  // if(about) {
  //   console.log(about)
  //   actions.createPage({
  //     path: `/index`,
  //     component: require.resolve("./src/pages/index.js"),
  //     context: { about: about },
  //   });
  // }
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
