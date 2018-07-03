FROM ubuntu:latest

# install gnupg
RUN apt-get update && apt-get install -my wget gnupg

# install mongo
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list
RUN apt-get update && apt-get install -y mongodb-org

# create data directory
RUN mkdir -p /data/db

# expose port
EXPOSE 27017

# bind all addresses
CMD ["--bind_ip_all"]

# init script
# COPY create.sh /docker-entrypoint-initdb.d/

ENTRYPOINT ["/usr/bin/mongod"]
