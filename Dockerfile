# Use official Node.js runtime as base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy all other source files to the container
COPY . .

# Expose port 3000 (your app’s listening port)
EXPOSE 3000

#run app
CMD ["node", "src/app.js"]
