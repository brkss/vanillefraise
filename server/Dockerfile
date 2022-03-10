FROM arm64v8/node 

WORKDIR /usr/src/app

COPY package.json .

COPY .. .

RUN npm install --save

EXPOSE 4000

VOLUME ["usr/src/app/node_modules"]

CMD ["node", "dist/index.js"]
