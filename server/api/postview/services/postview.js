"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  countViews(params) {
    return strapi.query("postview").model.fetchAll({
        columns: ["id", "post", "viewIp"],
        withRelated: [{
            "post": qb => {qb.columns("id")},
        }]
    });
  },
};
