FROM node:alpine

WORKDIR /client
ADD . /client

RUN npm i npm@10.8.2 -g

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci 

ENV PORT=3000

COPY . . 

CMD ["npm", "start", "--", "--host"]

