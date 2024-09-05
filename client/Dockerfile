FROM node:alpine

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm ci 
# Install the extra modules
RUN npm i @uiw/react-codemirror  @uiw/codemirror-theme-vscode

COPY . . 

ENV PORT=3000

CMD ["npm", "start", "--", "--host"]

