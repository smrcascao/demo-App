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
    iputils-tracepath \
    libpcap-dev zlib1g-dev \
    libpcap-dev


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN chmod 755 commands.sh
#####################################################################
######################### CADVISOR ##################################
#####################################################################
RUN echo 'hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4' >> /etc/nsswitch.conf && \
    rm -rf /var/cache/apk/*

# Grab cadvisor from the staging directory.
#ADD cadvisor /usr/bin/cadvisor
RUN wget https://github.com/sachaos/tcpterm/releases/download/v0.0.2/tcpterm_linux_amd64 -O /usr/bin/tcpterm && chmod 755 /usr/bin/tcpterm 
RUN wget https://github.com/google/cadvisor/releases/download/v0.35.0/cadvisor -O /usr/bin/cadvisor 
EXPOSE 8080

ENV CADVISOR_HEALTHCHECK_URL=http://localhost:8080/healthz

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider $CADVISOR_HEALTHCHECK_URL || exit 1
RUN cd httpflow &&  make && make install
EXPOSE 8282 8181
#ENTRYPOINT [ "commands.sh" ]
#ENTRYPOINT ["/usr/bin/cadvisor", "-logtostderr"]
ENTRYPOINT  ["node", "server.js" ]
