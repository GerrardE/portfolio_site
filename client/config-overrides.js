const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@application": "src/application",
    "@domain": "src/domain",
    "@infrastructure": "src/infrastructure",
    "@ui": "src/ui",
    "@public": "public",
  })(config);

  return config;
};
