FROM node:8.11.4-jessie

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install
RUN npm install react-scripts -g

COPY . /usr/src/app

EXPOSE 8000

CMD [ "npm", "start" ]
