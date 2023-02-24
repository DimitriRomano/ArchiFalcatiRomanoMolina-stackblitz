FROM node:18.14-alpine3.17
EXPOSE 3000
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm","run","start"]