FROM node:22-alpine

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm ci 

COPY . . 

CMD ["npm", "start", "--", "--host"]

