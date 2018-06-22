FROM node:latest

RUN mkdir /usr/src/crawlr
WORKDIR /usr/src

ENV PATH /usr/src/node_modules/.bin:$PATH

COPY package.json /usr/src/package.json
COPY yarn.lock /usr/src/package.json

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "node", "src/index.js" ]
