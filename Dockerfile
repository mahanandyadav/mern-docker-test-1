#18.4.0
FROM node:18.4.0
WORKDIR /usr/src/index.js
COPY package*.json index.js ./
RUN npm install
EXPOSE 80
CMD ["node","index.js"]
#image name dockermern.azurecr.io/dockermernimage .