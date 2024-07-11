FROM node

WORKDIR /usr/src/app

COPY prisma ./prisma/
COPY package*.json .

RUN npm install

COPY . .