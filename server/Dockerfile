FROM node:14.5.0 
#FROM arm64v8/node 

WORKDIR /usr/src/app

COPY package.json .

COPY . .

RUN npm install --save

RUN npm rebuild bcrypt --build-from-source

EXPOSE 4000

VOLUME ["/usr/src/app/node_modules"]

CMD ["node", "dist/index.js"]
