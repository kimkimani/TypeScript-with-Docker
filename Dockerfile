# Development Stage
FROM node:20-alpine as development
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./
# Upgrade npm to the latest version globally
RUN npm install -g npm@latest
# Install project dependencies
RUN npm install
# Install ts-node globally for running TypeScript code
RUN npm install -g ts-node
# Copy the entire application code into the container
COPY . .
# Build the application 
RUN npm run build

# Production Stage
FROM node:20-alpine as production
# Define an argument for the Node environment 
# with a default value of "production"
ARG NODE_ENV=production
# Set the environment variable for Node environment
ENV NODE_ENV=${NODE_ENV}
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./
# Install only production dependencies
RUN npm install --only=production
# Copy the entire application code into the container
COPY . .
# Copy the build artifacts from the development stage to the production stage
COPY --from=development /app/build ./build
# Default command to run when the container starts in production mode
CMD npm run prod
