'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    try {
      let entity;

      const data = { ...ctx.request.body, viewIp: ctx.request.ip}
      
      const postViews = await strapi.services.postview.find({ viewIp: ctx.request.ip });
      
      const isViewed = postViews.filter(p => p.viewIp === data.viewIp && p.post.id === data.post);
      
      if(isViewed.length>0){
        return isViewed[0];
      }
      
      entity = await strapi.services.postview.create(data);

      return sanitizeEntity(entity, { model: strapi.models.postview });
    } catch(error) {
      strapi.log.error(error);
    }
  },
};
