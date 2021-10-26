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
    let entity;

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      const d = { ...data, clapIp: ctx.request.ip}
      
      entity = await strapi.services.postclap.create(d, { files });
    } else {
      const data = { ...ctx.request.body, clapIp: ctx.request.ip}
      entity = await strapi.services.postclap.create(data);
    }
    return sanitizeEntity(entity, { model: strapi.models.postclap });
  },
};
