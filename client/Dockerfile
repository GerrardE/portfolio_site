FROM node:alpine AS node

# first build stage
FROM node AS buildstage1
RUN \
  apk add --no-cache python make g++ && \
#   apk add vips-dev fftw-dev --update-cache \
  && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build 
RUN rm -rf node_modules

# second build stage
FROM node AS buildstage2
ENV NODE_ENV production

# Update the system
RUN mkdir -p /home/node/app/public && chown -R node:node /home/node/app 
RUN mkdir -p /home/node/app/.cache 
WORKDIR /home/node/app
COPY package.json yarn.lock ./
USER node

# install only production dependencies
RUN yarn install --production --frozen-lockfile
COPY --chown=node:node --from=buildstage1 /app/public ./public
COPY --from=buildstage1 /app/.cache ./.cache
