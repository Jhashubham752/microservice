# Backend Dockerfile
FROM node:14

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]
