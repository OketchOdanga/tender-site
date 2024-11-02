Here's a well-detailed `README.md` file for the backend of your **Tender Site** project. This file provides a clear overview of the backend functionality, the setup process, and the file structure.

---

# Tender Site Backend

This backend is built using **Node.js**, **Express**, and **PostgreSQL** to support a tender management platform. It provides a RESTful API with user authentication, allowing users to securely manage tender data. The backend serves as the core of the platform, managing users, tenders, and restricted access to certain features based on user authentication.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [File Structure](#file-structure)
4. [API Endpoints](#api-endpoints)
5. [Installation and Setup](#installation-and-setup)
6. [Environment Variables](#environment-variables)
7. [Usage](#usage)

---

## Features

- **User Authentication**: Register and log in users with hashed passwords. Authentication is managed with JSON Web Tokens (JWT) for secure, stateless sessions.
- **Tender Management**: Perform CRUD (Create, Read, Update, Delete) operations on tenders, with protected routes for modifying data.
- **JWT-Based Access Control**: Only authenticated users can create, update, or delete tenders.
- **RESTful API**: Provides a clean, RESTful API for integration with the frontend.

---

## Technologies

- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for Node.js
- **PostgreSQL** - Relational database for storing user and tender data
- **pg-promise** - PostgreSQL interface for Node.js
- **bcryptjs** - Library for hashing passwords
- **jsonwebtoken** - Library for managing JWT-based authentication
- **dotenv** - Loads environment variables from a `.env` file
- **cors** - Middleware for enabling Cross-Origin Resource Sharing

---

## File Structure

```
/Backend
├── config
│   └── db.js                  # Database configuration and connection setup
├── controllers
│   ├── authController.js      # Handles authentication logic for registration and login
│   └── tenderController.js    # Handles business logic for managing tenders
├── middleware
│   └── authMiddleware.js      # JWT authentication middleware to protect routes
├── routes
│   ├── authRoutes.js          # Authentication routes (register, login)
│   └── tenderRoutes.js        # Routes for CRUD operations on tenders
├── .env                       # Environment variables (database URL, JWT secret, etc.)
├── .gitignore                 # Specifies files to ignore in version control
├── package.json               # Project dependencies and scripts
├── server.js                  # Main entry point for starting the server
└── README.md                  # Documentation for the backend setup and usage
```

### Description of Important Files and Folders

- **config/db.js**: Establishes a connection to the PostgreSQL database using `pg-promise`.
- **controllers**:
  - **authController.js**: Contains functions for user registration and login, including password hashing and JWT generation.
  - **tenderController.js**: Contains functions for managing tenders, including creating, reading, updating, and deleting tenders.
- **middleware/authMiddleware.js**: Verifies JWT tokens for protected routes, ensuring only authenticated users can access specific operations.
- **routes**:
  - **authRoutes.js**: Defines routes for registering and logging in users.
  - **tenderRoutes.js**: Defines routes for tender-related CRUD operations and applies JWT protection to relevant routes.
- **server.js**: The main server file that sets up Express, configures middleware, and loads routes.

---

## API Endpoints

### Authentication Routes (Public)

- **POST /api/auth/register** - Register a new user.
  - **Request Body**:
    ```json
    {
      "username": "user123",
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - **Response**: Returns the registered user's details without the password.

- **POST /api/auth/login** - Log in an existing user and receive a JWT.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - **Response**: Returns a JWT token and the username if successful.

### Tender Routes (Protected with JWT)

- **POST /api/tenders** - Create a new tender (requires authentication).
  - **Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Request Body**:
    ```json
    {
      "number": "ONT.KDC.073.2023-2024",
      "description": "Supply and Delivery of Laptops",
      "document_link": "http://example.com/doc",
      "closing_date": "2024-06-12T10:00:00"
    }
    ```
  - **Response**: Returns the created tender.

- **GET /api/tenders** - Retrieve a list of all tenders.
  - **Response**: Returns an array of tender objects.

- **GET /api/tenders/:id** - Retrieve a specific tender by ID.
  - **Response**: Returns the details of the specified tender.

- **PUT /api/tenders/:id** - Update an existing tender (requires authentication).
  - **Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Request Body**:
    ```json
    {
      "number": "ONT.KDC.073.2023-2024",
      "description": "Updated description",
      "document_link": "http://example.com/newdoc",
      "closing_date": "2024-07-12T10:00:00"
    }
    ```
  - **Response**: Returns the updated tender.

- **DELETE /api/tenders/:id** - Delete a tender by ID (requires authentication).
  - **Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Response**: Returns a success message if deletion is successful.

---

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **PostgreSQL** installed and running.

### Step-by-Step Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tender-backend.git
   cd tender-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Log in to PostgreSQL and create a new database for this project:
     ```sql
     CREATE DATABASE tenderdb;
     ```
   - Create the required tables in your PostgreSQL database:
     ```sql
     CREATE TABLE users (
         id SERIAL PRIMARY KEY,
         username VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );

     CREATE TABLE tenders (
         id SERIAL PRIMARY KEY,
         number VARCHAR(255) NOT NULL,
         description TEXT NOT NULL,
         document_link VARCHAR(255),
         closing_date TIMESTAMP NOT NULL,
         date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory with the following values:
     ```
     PORT=5000
     DATABASE_URL=postgres://username:password@localhost:5432/tenderdb
     JWT_SECRET=your_jwt_secret
     ```

5. **Start the Server**:
   - Run the server using `nodemon` for auto-restarts during development:
     ```bash
     npx nodemon server.js
     ```

   - The server should now be running on `http://localhost:5000`.

---

## Environment Variables

The application requires the following environment variables in a `.env` file:

- `PORT`: The port number for the server (default is `5000`).
- `DATABASE_URL`: The PostgreSQL database connection URL.
- `JWT_SECRET`: Secret key used for signing JWT tokens.

**Example `.env` file**:

```
PORT=5000
DATABASE_URL=postgres://username:password@localhost:5432/tenderdb
JWT_SECRET=your_jwt_secret
```

---

## Usage

### Testing the API

- **Postman** or **curl** can be used to test the API endpoints. Use the JWT received after logging in to access protected routes.
  
- Example of testing a protected route with `curl`:
  
  ```bash
  curl -X GET http://localhost:5000/api/tenders -H "Authorization: Bearer <JWT_TOKEN>"
  ```

### Example Workflow

1. **Register a User**:
   - Send a `POST` request to `/api/auth/register` with a username, email, and password.

2. **Login**:
   - Send a `POST` request to `/api/auth/login` to receive a JWT token.

3. **Manage Tenders**:
   - Use the JWT token in the `Authorization` header to create, update, or delete tenders.
   - Retrieve all tenders or a specific tender without authentication.

---

## Notes

- The project uses JWT for stateless authentication. Ensure you store the JWT securely on the client-side, such as in `localStorage`.
- This backend can be deployed on platforms like **Heroku**, **AWS**, or **DigitalOcean** with appropriate configuration for environment variables and database access.

---

This backend is designed to fully support

 the frontend for the **Tender Site** project, providing a robust and secure API for user authentication and tender management.