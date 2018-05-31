# Dockerfile
# Pull nodejs into the container (based on alpine).
FROM node:8.11.2-alpine

# Create tag label for contact me.
LABEL maintainer "ztrixack.th@gmail.com" \
      description "Template Build Container" \
      version "1.0.0"

# Run updates and install deps.
RUN apk update \
    && apk upgrade --available \
    && rm -rf /var/cache/apk/*

# Update npm
RUN npm install -g npm \
  && npm cache clean --force

# Set environment variables.
ENV NODE_VERSION=v8.11.2 \
    NPM_CONFIG_LOGLEVEL=warn \
    NODE_ENV=production \
    PORT=5000 \
    WORKSPACE="/home/src/app"

# Create app directory
RUN mkdir -p $WORKSPACE
WORKDIR $WORKSPACE

# Install PM2
RUN npm install -g pm2 \
  && npm cache clean --force

# Copy app source to workspace.
COPY . .

# Install app dependencies. 
# Build for production with minification.
RUN npm install \
  && npm run build --production \
  && npm cache clean --force

# Set the command to start the node server.
CMD pm2 start --no-daemon processes.json

# Tell Docker about the port we'll run on.
EXPOSE 5000
