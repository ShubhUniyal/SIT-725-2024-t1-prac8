from node:16-alpine

WORKDIR /app

copy . .

expose 3000

run npm install

cmd ["npm", "start"]