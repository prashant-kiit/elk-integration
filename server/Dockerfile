FROM node:latest

WORKDIR /server

COPY package.json ./

RUN npm install

COPY ./dist ./dist

EXPOSE 8080

CMD [ "npm", "start" ]