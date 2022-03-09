FROM --platform=linux/amd64  node:17-alpine3.14

WORKDIR /usr/src/app

COPY package.json .

COPY .. .

RUN npm install --save

EXPOSE 4000

VOLUME ["usr/src/app/node_modules"]

CMD ["node", "dist/index.js"]
