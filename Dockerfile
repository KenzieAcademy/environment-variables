# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /app
# What does this add do? (hot reloading??? is this static?)
ADD . /usr/src/app

# COPY package.json /usr/src/app/package.json

#Make sure you are using this dockerfile to execute app by using an environment variable
ENV REACT_APP_DOCKER=true

# install and cache app dependencies
# COPY package.json /usr/src/app/package.json
RUN npm install --silent


# start app
CMD ["npm", "start"]