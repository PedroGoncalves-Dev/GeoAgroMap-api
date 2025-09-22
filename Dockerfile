FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package*.json yarn.lock ./
COPY tsconfig*.json ./

RUN yarn install 

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "dev"]