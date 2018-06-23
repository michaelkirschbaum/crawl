FROM node:latest

RUN mkdir /usr/src/crawlr
WORKDIR /usr/src/crawrl

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/crawlr/package.json
ADD yarn.lock /usr/src/crawlr/yarn.lock

RUN yarn

CMD ["yarn", "start"]
