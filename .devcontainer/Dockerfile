# Use the official Node.js image as the base image
FROM node:14

# Install JDK and other dependencies
RUN apt-get update && apt-get install -y openjdk-11-jdk

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
RUN npm install -g react-native-cli
COPY . /app/
RUN npm install

# Expose Metro Bundler and GraphQL ports
EXPOSE 19000 19001

# Start Metro Bundler
CMD ["npm", "start"]
