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

      const data = { ...ctx.request.body, viewIp: ctx.request.ip};

      const populate = ["post"];
      const postView = await strapi.services.postview.findOne({ viewIp: ctx.request.ip, post: data.post }, populate);
      
      if(postView){
        const viewedData = {view: postView.view+1}

        entity = await strapi.services.postview.update({ id: postView.id, post: postView.post.id}, viewedData);
        
        return sanitizeEntity(entity, { model: strapi.models.postview })
      }
      
      entity = await strapi.services.postview.create(data);

      return sanitizeEntity(entity, { model: strapi.models.postview });
    } catch(error) {
      strapi.log.error(error);
    }
  },
};
