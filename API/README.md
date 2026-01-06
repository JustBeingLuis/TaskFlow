<div align="center">

# TaskFlow API

### Modern RESTful API with AI-Powered Task Management

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Features](#features) • [Quick Start](#quick-start) • [API Documentation](#api-documentation) • [AI Integration](#ai-integration) • [Deployment](#deployment)

</div>

---

## Table of Contents

- [TaskFlow API](#taskflow-api)
  - [Modern RESTful API with AI-Powered Task Management](#modern-restful-api-with-ai-powered-task-management)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Quick Start](#quick-start)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [API Documentation](#api-documentation)
    - [Interactive Documentation](#interactive-documentation)
    - [Endpoints Overview](#endpoints-overview)
      - [Authentication Endpoints](#authentication-endpoints)
      - [Task Management Endpoints](#task-management-endpoints)
      - [AI Assistant Endpoint](#ai-assistant-endpoint)
      - [Example: Create Task Manually](#example-create-task-manually)
      - [Example: Create Tasks with AI](#example-create-tasks-with-ai)
  - [Authentication](#authentication)
    - [Register a New User](#register-a-new-user)
    - [Login and Obtain Token](#login-and-obtain-token)
    - [Using the Token](#using-the-token)
  - [AI Integration](#ai-integration)
    - [Natural Language Task Parsing](#natural-language-task-parsing)
    - [Configuration](#configuration)
  - [Testing](#testing)
    - [Test Coverage](#test-coverage)
  - [Project Structure](#project-structure)
  - [Docker Deployment](#docker-deployment)
    - [Build and Run with Docker](#build-and-run-with-docker)
    - [Using Docker Compose](#using-docker-compose)
  - [Environment Variables](#environment-variables)
  - [Security](#security)
    - [Implemented Security Measures](#implemented-security-measures)
    - [Best Practices](#best-practices)
  - [Rate Limiting](#rate-limiting)
  - [Contributing](#contributing)
  - [License](#license)

---

## Overview

A production-ready REST API for task management with intelligent AI assistance, built following industry best practices. The API combines traditional CRUD operations with Google Gemini AI to enable natural language task creation, making task management more intuitive and efficient. Features include JWT-based authentication, Row Level Security (RLS) policies, comprehensive test coverage, and full OpenAPI documentation.

---

## Features

| Feature                 | Description                                                       |
| ----------------------- | ----------------------------------------------------------------- |
| **CRUD Operations**     | Complete Create, Read, Update, Delete functionality for tasks     |
| **AI-Powered Parsing**  | Natural language processing using Google Gemini 1.5 Flash         |
| **Batch Task Creation** | Create multiple tasks from a single text input using AI           |
| **Authentication**      | JWT-based authentication with Supabase Auth                       |
| **Row Level Security**  | Database-level security ensuring users only access their own data |
| **API Documentation**   | Interactive Swagger UI documentation with OpenAPI 3.0             |
| **Automated Testing**   | Unit and integration tests with Jest and Supertest                |
| **Rate Limiting**       | Protection against abuse and excessive API usage                  |
| **Containerization**    | Docker and Docker Compose ready for deployment                    |
| **Input Validation**    | Comprehensive request validation and error handling               |
| **Modern Architecture** | Separation of concerns with controllers, routes, and middlewares  |
| **CORS Support**        | Cross-Origin Resource Sharing enabled for frontend integration    |

---

## Tech Stack

```
Backend Framework    : Express.js 4.x
Runtime             : Node.js 20+
Database            : Supabase (PostgreSQL)
Authentication      : Supabase Auth (JWT)
AI Service          : Google Gemini 1.5 Flash
Rate Limiting       : express-rate-limit
Testing             : Jest + Supertest
Documentation       : OpenAPI 3.0 / Swagger UI
Containerization    : Docker + Docker Compose
Environment Config  : dotenv
```

---

## Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Supabase account and project
- Google Gemini API key (free tier available)
- Docker (optional, for containerized deployment)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd API

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your credentials:
# - SUPABASE_URL: Your Supabase project URL
# - SUPABASE_KEY: Your Supabase anon/public key
# - GEMINI_API_KEY: Your Google Gemini API key

# Start the development server
npm start
```

The API will be available at `http://localhost:3000`

**Note:** Ensure `require('dotenv').config()` is placed at the top of `index.js` before all other imports.

---

## API Documentation

### Interactive Documentation

Access the full interactive API documentation powered by Swagger UI:

```
http://localhost:3000/api-docs
```

### Endpoints Overview

| Method              | Endpoint          | Description                                | Auth Required |
| ------------------- | ----------------- | ------------------------------------------ | ------------- |
| **Authentication**  |                   |                                            |               |
| `POST`              | `/auth/register`  | Register a new user account                | No            |
| `POST`              | `/auth/login`     | Login and receive JWT token                | No            |
| **Task Management** |                   |                                            |               |
| `GET`               | `/tasks`          | List all tasks for authenticated user      | Yes           |
| `POST`              | `/tasks`          | Create a new task                          | Yes           |
| `PUT`               | `/tasks/:id`      | Update an existing task                    | Yes           |
| `DELETE`            | `/tasks/:id`      | Delete a task                              | Yes           |
| **AI Assistant**    |                   |                                            |               |
| `POST`              | `/ai/parse-tasks` | Parse natural language into multiple tasks | Yes           |

<details>
<summary><b>Request/Response Examples</b></summary>

#### Authentication Endpoints

**Register User:**

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "error": null
}
```

**Login:**

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### Task Management Endpoints

**Get All Tasks:**

```http
GET /tasks
Authorization: Bearer <your-jwt-token>
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "title": "Complete project documentation",
      "completed": false,
      "user_id": "user-uuid",
      "created_at": "2026-01-05T10:30:00Z"
    }
  ],
  "error": null
}
```

#### AI Assistant Endpoint

**Parse Tasks with AI:**

```http
POST /ai/parse-tasks
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "text": "Tomorrow meeting at 10, buy groceries, call John, and finish the report"
}
```

**Response:**

```json
{
  "success": true,
  "tasks": [
    { "title": "Meeting at 10 tomorrow" },
    { "title": "Buy groceries" },
    { "title": "Call John" },
    { "title": "Finish the report" }
  ],
  "error": null
}
```

#### Example: Create Task Manually

```http
POST /tasks
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "title": "Complete project documentation",
  "completed": false
}
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Complete project documentation",
      "completed": false,
      "user_id": "user-uuid",
      "created_at": "2026-01-05T10:30:00Z"
    }
  ],
  "error": null
}
```

#### Example: Create Tasks with AI

The AI endpoint intelligently parses natural language and creates structured task objects that can be used with the POST `/tasks` endpoint.

```http
POST /ai/parse-tasks
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "text": "Need to prepare presentation for Monday, call the client about feedback, and review the budget report"
}
```

**Response:**

```json
{
  "success": true,
  "tasks": [
    { "title": "Prepare presentation for Monday" },
    { "title": "Call the client about feedback" },
    { "title": "Review the budget report" }
  ],
  "error": null
}
```

</details>

---

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. All protected endpoints require a valid token in the Authorization header.

### Register a New User

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### Login and Obtain Token

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "error": null
}
```

### Using the Token

Include the token in the Authorization header for all protected endpoints:

```http
Authorization: Bearer <your-jwt-token>
```

**Example with cURL:**

```bash
curl -X GET http://localhost:3000/tasks \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

## AI Integration

This API integrates Google Gemini 1.5 Flash for intelligent task parsing and creation.

### Natural Language Task Parsing

The AI endpoint `/ai/parse-tasks` converts natural language text into structured task objects. This enables users to create multiple tasks quickly by describing them conversationally.

**Use Cases:**

- Batch task creation from meeting notes
- Converting email content into actionable tasks
- Quick task entry without structured input
- Voice-to-text task creation workflows

**Example Input:**

```
"Tomorrow at 9am stand-up meeting, review pull requests before lunch,
update documentation, and send weekly report to the team"
```

**AI Output:**

```json
[
  { "title": "Stand-up meeting at 9am tomorrow" },
  { "title": "Review pull requests before lunch" },
  { "title": "Update documentation" },
  { "title": "Send weekly report to the team" }
]
```

### Configuration

1. Obtain a Google Gemini API key from [Google AI Studio](https://ai.google.dev/)
2. Add the key to your `.env` file:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. The API uses the `gemini-1.5-flash` model (free tier: 15 RPM, 1500 RPD)

**Important:** Ensure `require('dotenv').config()` is called at the very top of `index.js` before any other imports.

---

## Testing

Run the automated test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Coverage

Tests include:

- Unit tests for controllers
- Integration tests for API endpoints
- Validation and error handling tests
- Authentication middleware tests

---

## Project Structure

```
API/
├── controllers/              # Business logic layer
│   ├── ai.controller.js      # AI task parsing logic
│   ├── auth.controller.js    # Authentication handlers
│   └── task.controller.js    # Task CRUD operations
├── middlewares/              # Request processing middleware
│   ├── auth.js               # JWT authentication middleware
│   └── rateLimiter.js        # Rate limiting configuration
├── routes/                   # API route definitions
│   ├── ai.routes.js          # AI endpoints
│   ├── auth.routes.js        # Authentication endpoints
│   └── task.routes.js        # Task management endpoints
├── tests/                    # Test suites
│   └── task.test.js          # Task endpoint tests
├── bd-conection.js           # Supabase database connection
├── index.js                  # Application entry point
├── get-token.js              # Utility for token generation
├── openapi.yaml              # OpenAPI 3.0 specification
├── tasks-seed.csv            # Sample task data
├── Dockerfile                # Docker image definition
├── docker-compose.yaml       # Docker Compose configuration
├── .env.example              # Environment variables template
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

---

## Docker Deployment

### Build and Run with Docker

```bash
# Build the image
docker build -t task-api .

# Run the container
docker run -d -p 3000:3000 --env-file .env task-api
```

### Using Docker Compose

```bash
# Start services
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs -f
```

---

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

| Variable         | Description                           | Required | Example                       |
| ---------------- | ------------------------------------- | -------- | ----------------------------- |
| `SUPABASE_URL`   | Your Supabase project URL             | Yes      | `https://xxxxx.supabase.co`   |
| `SUPABASE_KEY`   | Your Supabase anon/public key         | Yes      | `eyJhbGciOiJIUzI1NiIsInR5...` |
| `GEMINI_API_KEY` | Google Gemini API key for AI features | Yes      | `AIzaSyD...`                  |
| `PORT`           | Server port (optional)                | No       | `3000`                        |

**Example `.env` file:**

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key
GEMINI_API_KEY=your-gemini-api-key
PORT=3000
```

**Security Notes:**

- Never commit `.env` files to version control
- Use `.env.example` as a template without real credentials
- Rotate API keys regularly
- Use different credentials for development and production

---

## Security

### Implemented Security Measures

- **JWT Authentication:** All protected routes require valid JWT tokens from Supabase Auth
- **Row Level Security (RLS):** Database-level policies ensure complete data isolation between users
- **Input Validation:** Comprehensive request data validation before processing
- **Environment Variables:** Sensitive credentials stored securely outside codebase
- **Rate Limiting:** Protection against abuse and DDoS attacks
- **CORS Configuration:** Cross-Origin Resource Sharing properly configured
- **HTTPS Ready:** Prepared for SSL/TLS in production environments
- **Token Expiration:** JWT tokens have defined expiration times
- **SQL Injection Protection:** Parameterized queries via Supabase client

### Best Practices

```
Check  Use environment variables for all sensitive data
Check  Implement rate limiting in production (already configured)
Check  Enable CORS with appropriate origins only
Check  Keep dependencies updated regularly
Check  Follow the principle of least privilege for database access
Check  Never log sensitive information (tokens, passwords)
Check  Use HTTPS in production environments
Check  Validate and sanitize all user inputs
Check  Monitor API usage and set up alerts
Check  Regular security audits and dependency scanning
```

---

## Rate Limiting

The API implements rate limiting to protect against abuse and ensure fair usage:

**Current Configuration:**

- Window: 15 minutes
- Max requests per window: 100 requests per IP
- Endpoints protected: All routes

**Rate Limit Headers:**

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1641024000
```

**Rate Limit Exceeded Response:**

```json
{
  "error": "Too many requests, please try again later."
}
```

You can adjust rate limits in `middlewares/rateLimiter.js` based on your needs.

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with Node.js, Express, Supabase, and Google Gemini AI**

[Report Bug](https://github.com/your-repo/issues) • [Request Feature](https://github.com/your-repo/issues)

</div>
