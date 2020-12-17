# Build
FROM node:latest-alphine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn --production

RUN yarn build

# Expose 
FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]