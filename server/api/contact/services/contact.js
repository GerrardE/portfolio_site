"use strict";
const { isDraft } = require("strapi-utils").contentTypes;

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async create(data, { files } = {}) {
    try {
      const validData = await strapi.entityValidator.validateEntityCreation(
        strapi.models.contact,
        data,
        { isDraft: isDraft(data, strapi.models.contact) }
      );

      const entry = await strapi.query("contact").create(validData);

      await strapi.plugins["email"].services.email.send({
        to: process.env.TO,
        from: process.env.FROM,
        subject: "A new email from your website",
        html: `<div class="iheader" style="border: 2px solid #eee; width:600px; font-family:Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;">
                <div style="text-align:right; background-color:#0d3f71;padding:20px 5px; border-bottom: 1px solid #eee;">
                    
                </div>
            
                <div class="ibody" style="text-align:left;color:#444;padding:20px 5px">
                    <p>Name: ${data.name}</p>
                    <p>Phone: ${data.phone}</p>
                    
                    <br/>
                    <p>${data.msg}</p>
                </div>
                <div class="ifooter" style="background-color:#0d3f71;">
                    <div style="text-align:center; padding:10px 5px;color:white; font-size:0.8em;">
                        www.ezeugwagerrard.com
                    </div>
                </div>
            </div>`,
      });

      return entry;
    } catch (error) {
      strapi.log.error(`Error sending email to ${data.email}`, error);

      return "Error";
    }
  },
};
