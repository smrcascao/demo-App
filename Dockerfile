FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# install debugging tools
RUN apt-get update && apt-get install -y \
    iotop \
    iftop \
    tcpdump \
    vim \
    nethogs \
    iftop \
    net-tools \
    dnsutils \
    ethtool \
    sysstat \
    iputils-tracepath

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080 8181
CMD [ "node", "server.js" ]
