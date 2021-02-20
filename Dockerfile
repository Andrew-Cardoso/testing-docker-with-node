FROM node:12.20.2-alpine3.10

EXPOSE 3030

RUN apk add --update tini

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

# CMD [ "tini", "--", "node", "./bin/www" ]
CMD [ "npm", "run", "start" ]