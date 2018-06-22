FROM node:8

WORKDIR /usr/src/crawlr-users

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "node", "src/index.js" ]
