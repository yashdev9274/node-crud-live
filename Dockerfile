FROM node:14

# create a docker image

WORKDIR /app

COPY package*.json ./ 

RUN npm install

COPY . .


EXPOSE 3000

CMD [ "node" , "index.js" ]