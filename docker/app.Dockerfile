FROM node:16-alpine as dependency

WORKDIR /dep

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install


FROM node:16-alpine as build-app

COPY --from=dependency /dep /app

WORKDIR /app

COPY ./app ./app

COPY ./.env ./.env
COPY ./webpack.config.js ./webpack.config.js
COPY ./.babelrc ./.babelrc

RUN yarn build-app


FROM nginx:1-alpine

COPY --from=build-app /app/app/build/* /usr/share/nginx/html/
