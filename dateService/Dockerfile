FROM node:10.15.2

RUN mkdir -p /home/node/dateService/node_modules && chown -R node:node /home/node/dateService

WORKDIR /home/node/dateService

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3030

CMD [ "node", "index.js" ]