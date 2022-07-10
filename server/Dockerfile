ARG PORT=1337
FROM strapi/base:14 AS node

# first build stage
FROM node AS buildstage1
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build 
RUN rm -rf node_modules

# second build stage
FROM node AS buildstage2
ENV NODE_ENV production

# Update the system
RUN apk --no-cache -U upgrade
RUN mkdir -p /home/node/app/build && chown -R node:node /home/node/app 
WORKDIR /home/node/app
COPY package.json yarn.lock ./
USER node

# install only production dependencies
RUN yarn install --production --frozen-lockfile
COPY --chown=node:node --from=buildstage1 /app/build ./build
EXPOSE ${PORT}

CMD ["yarn", "start"]
