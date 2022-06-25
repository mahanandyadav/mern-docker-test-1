FROM node: 14
WORKDIR /usr/src/index.js
COPY package*.json index.js ./
RUN npm i
EXPOSE 80
CMD ["node","index.js"]