FROM node:18.13.0

WORKDIR /app

EXPOSE 3000

COPY package*.json yarn.lock  ./

RUN yarn install --production=true

COPY . .

RUN yarn build

RUN npm install -g serve

