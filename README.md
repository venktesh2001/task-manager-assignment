# Task Manager Assignment

## Tech Stack

* Backend: Node.js, Express, MongoDB
* Frontend: React
* Auth: JWT, bcrypt

## Features

* User Registration & Login
* JWT Authentication
* Protected Routes
* CRUD Operations (Tasks)
* React Dashboard UI

## Setup Instructions

### Backend

cd backend
npm install
node server.js

### Frontend

cd frontend
npm install
npm start

## API Endpoints

POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

## Authentication Flow

* User registers → password hashed
* Login → JWT token returned
* Token used in headers

## Scalability Notes

* Can scale using load balancing
* Redis caching possible
* Microservices architecture
* Database indexing

## Author

Venktesh
