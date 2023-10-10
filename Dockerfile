## Use an official Node.js runtime as the base image
#FROM node:18
#
## Set the working directory in the container
#WORKDIR /app
#
## Copy package.json and package-lock.json to the working directory
#COPY package*.json ./
#
## Install project dependencies
#RUN npm ci
#
## Copy the rest of the application code to the container
#COPY . .
#
## Build your React application for production
#RUN npm run build
#
## Install serve globally (if not already installed)
#RUN npm install -g serve
#
## Expose a port (optional, but you can expose if needed)
#EXPOSE 3000
#
## Start your application with serve
#CMD ["serve", "-s", "build", "-l", "3000"]

# Use an official Node.js runtime as the base image
FROM node:18 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html