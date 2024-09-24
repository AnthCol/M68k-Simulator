FROM node:alpine

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm ci 
# Install the extra modules
RUN npm i react-router-dom codemirror@6 @codemirror/view @codemirror/state @codemirror/commands @codemirror/basic-setup @codemirror/theme-one-dark @codemirror/lang-javascript 

COPY . . 

CMD ["npm", "start", "--", "--host"]

