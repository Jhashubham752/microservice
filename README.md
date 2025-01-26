# Microservice App - User CRUD Example

This project demonstrates a simple **User CRUD** application using Docker, Node.js, MongoDB, and Next.js for the frontend. The backend exposes APIs to manage user data, and the frontend interacts with these APIs to perform the CRUD operations.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Running the App](#running-the-app)
6. [Docker Compose](#docker-compose)
7. [Scripts](#scripts)
8. [License](#license)

## Project Structure

```
/microservice
├── /backend                # Backend Node.js application
│   ├── /src                # Source code for the backend
│   ├── Dockerfile          # Dockerfile for the backend service
│   └── package.json        # Backend dependencies
├── /user-crud-app          # Frontend Next.js application
│   ├── /pages              # Next.js pages
│   ├── Dockerfile          # Dockerfile for the frontend service
│   └── package.json        # Frontend dependencies
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # Project README
```

## Technologies Used
- **Frontend**: Next.js (React-based framework for the frontend)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing user data)
- **Docker**: Containerization of services
- **Docker Compose**: Orchestration of services

## Getting Started

Follow these steps to get the app running on your local machine:

### Prerequisites

- Docker & Docker Compose installed on your machine.
  - [Install Docker](https://docs.docker.com/get-docker/)
  - [Install Docker Compose](https://docs.docker.com/compose/install/)

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/microservice-app.git
cd microservice-app
```

## Environment Variables

You can configure environment variables for the app by modifying the `docker-compose.yml` file. Here's a list of the main variables:

- **Frontend**:
  - `NEXT_PUBLIC_API_URL`: The API URL for your backend service (default: `http://backend:5000`).
  
- **Backend**:
  - `MONGO_URI`: MongoDB connection string (default: `mongodb://mongo:27017/mydb`).
  
- **MongoDB**:
  - `MONGO_INITDB_ROOT_USERNAME`: MongoDB root username (default: `admin`).
  - `MONGO_INITDB_ROOT_PASSWORD`: MongoDB root password (default: `secret`).

These values are already set in the `docker-compose.yml` file, but you can modify them based on your requirements.

## Running the App

To run the application with Docker, use the following commands:

1. Build and start all services:
   ```bash
   docker-compose up --build
   ```

2. If you want to run it in detached mode (in the background):
   ```bash
   docker-compose up -d --build
   ```

3. Access the frontend:
   - Visit `http://localhost:3000` in your browser.

4. Backend API will be running on `http://localhost:5000`.

5. MongoDB will be accessible at `mongodb://localhost:27017`.

### Stopping the Services

To stop the running services, use the following command:

```bash
docker-compose down
```

This will stop and remove the containers, networks, and volumes.

## Docker Compose

Docker Compose makes it easy to run multi-container Docker applications. The services defined in `docker-compose.yml` are:

- **frontend**: The Next.js frontend application.
- **backend**: The Node.js backend application exposing REST APIs for user CRUD operations.
- **mongo**: A MongoDB container for the backend to store user data.

### Docker Compose Commands

- To rebuild the services after making changes:
  ```bash
  docker-compose up --build
  ```

- To run the services in the background:
  ```bash
  docker-compose up -d
  ```

- To view logs from all services:
  ```bash
  docker-compose logs
  ```

## Scripts

The following scripts are available in the project:

- **Frontend**:
  - `npm run dev`: Starts the Next.js development server.
  - `npm run build`: Builds the Next.js app for production.
  - `npm run start`: Starts the production Next.js server.

- **Backend**:
  - `npm run start`: Starts the backend server in production mode.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you need further customizations or if anything else should be added!
