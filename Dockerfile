# Build

# Using LTS Node version
FROM node:14-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn --production

RUN yarn build

# Expose 
FROM nginx:stable-alpine

COPY --from=0 /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]