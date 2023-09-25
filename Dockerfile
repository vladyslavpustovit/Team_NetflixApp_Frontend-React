# Use an official Node.js runtime as the build image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use NGINX as the production image
FROM nginx:latest

# Copy the built React app from the build image to the NGINX image
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

