FROM node:alpine3.12

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]