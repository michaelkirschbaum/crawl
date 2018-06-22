FROM node:latest

WORKDIR /usr/src/crawlr-mockups

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "node", "src/index.js" ]
