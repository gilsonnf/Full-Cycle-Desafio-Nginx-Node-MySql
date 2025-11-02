# pull the Node.js Docker image
FROM node:latest

# create the directory inside the container
WORKDIR /usr/src/app
ENV DOCKERIZE_VERSION=v0.9.6

COPY package*.json ./

RUN apt-get update \
    && apt-get install -y vim \
    && apt-get install -y wget 
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

