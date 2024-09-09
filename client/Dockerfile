FROM node:alpine

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm ci 
# Install the extra modules
RUN npm i codemirror@6 @codemirror/view @codemirror/state @codemirror/commands @codemirror/basic-setup @codemirror/theme-one-dark @codemirror/lang-javascript

COPY . . 

ENV PORT=3000

CMD ["npm", "start", "--", "--host"]

