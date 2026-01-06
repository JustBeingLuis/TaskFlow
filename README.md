<div align="center">

# TaskFlow

### Full-Stack AI-Powered Task Management Platform

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

_A modern, production-ready full-stack application combining RESTful API architecture with intelligent AI assistance and a dynamic React frontend_

[Features](#features) • [Tech Stack](#tech-stack) • [Quick Start](#quick-start) • [Architecture](#architecture) • [API Documentation](#api-documentation) • [Screenshots](#screenshots)

</div>

---

## Overview

TaskFlow is an enterprise-grade task management platform that seamlessly integrates a robust RESTful backend with an intuitive React-based frontend. Powered by Google Gemini AI, it transforms natural language into structured tasks, while maintaining security through JWT authentication and Supabase Row Level Security. The entire stack is containerized for effortless deployment and scaling.

---

## Features

<table>
<tr>
<td width="50%">

### Backend Capabilities

- **RESTful API Design** with Express.js
- **AI Task Parsing** via Google Gemini 1.5 Flash
- **JWT Authentication** with Supabase Auth
- **Row Level Security (RLS)** for data isolation
- **OpenAPI 3.0 Documentation** with Swagger UI
- **Rate Limiting** and DDoS protection
- **Automated Testing** with Jest & Supertest
- **Input Validation** and error handling
- **CORS Support** for cross-origin requests

</td>
<td width="50%">

### Frontend Capabilities

- **Modern React Architecture** with Vite
- **Responsive UI** with Tailwind CSS
- **Multi-language Support (i18n)** for EN/ES
- **Protected Routes** with authentication guards
- **Real-time Task Management** with AI suggestions
- **Interactive Dashboard** with statistics
- **Task Filtering** by status and priority
- **Optimized Build** with code splitting
- **Accessibility Features** following WCAG

</td>
</tr>
</table>

---

## Tech Stack

<details>
<summary><b>Backend Technologies</b></summary>

```
Runtime             : Node.js 20+
Framework           : Express.js 4.x
Database            : Supabase (PostgreSQL)
Authentication      : Supabase Auth (JWT)
AI Service          : Google Gemini 1.5 Flash
Rate Limiting       : express-rate-limit
Testing             : Jest + Supertest
Documentation       : OpenAPI 3.0 / Swagger UI
Environment Config  : dotenv
```

</details>

<details>
<summary><b>Frontend Technologies</b></summary>

```
Framework           : React 18+
Build Tool          : Vite 5+
Styling             : Tailwind CSS 3.x
Internationalization: react-i18next
State Management    : React Hooks
HTTP Client         : Axios
Routing             : React Router v6
```

</details>

<details>
<summary><b>DevOps & Deployment</b></summary>

```
Containerization    : Docker + Docker Compose
Web Server          : Nginx (production)
Version Control     : Git
Package Manager     : npm
```

</details>

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      TaskFlow Platform                       │
├──────────────────────┬──────────────────────────────────────┤
│   React Frontend     │         Express API                  │
│   (Port 5173/80)     │         (Port 3000)                  │
├──────────────────────┼──────────────────────────────────────┤
│  • Vite Build        │  • RESTful Endpoints                 │
│  • Tailwind CSS      │  • JWT Middleware                    │
│  • i18n Support      │  • Rate Limiting                     │
│  • Protected Routes  │  • OpenAPI Docs                      │
│  • Axios HTTP        │  • AI Integration                    │
└──────────────────────┴──────────────────────────────────────┘
           │                          │
           └──────────┬───────────────┘
                      │
         ┌────────────┴─────────────┐
         │                          │
    ┌────▼─────┐            ┌───────▼────────┐
    │ Supabase │            │ Google Gemini  │
    │PostgreSQL│            │   AI Service   │
    │   + Auth │            │  (1.5 Flash)   │
    └──────────┘            └────────────────┘
```

---

## Quick Start

### Prerequisites

| Requirement       | Version | Description                           |
| ----------------- | ------- | ------------------------------------- |
| Docker            | Latest  | Container runtime                     |
| Docker Compose    | Latest  | Multi-container orchestration         |
| Supabase Account  | -       | Database and authentication service   |
| Google Gemini API | -       | AI task parsing (free tier available) |

### Installation

<details>
<summary><b>Option 1: Docker Compose (Recommended)</b></summary>

```bash
# 1. Clone the repository
git clone <repository-url>
cd taskflow

# 2. Configure environment variables
cd API
cp .env.example .env
# Edit .env with your credentials:
# - SUPABASE_URL=your-supabase-project-url
# - SUPABASE_KEY=your-supabase-anon-key
# - GEMINI_API_KEY=your-gemini-api-key

# 3. Build and start all services
cd ..
docker-compose up --build

# Access the application:
# Frontend: http://localhost:5173
# API: http://localhost:3000
# API Docs: http://localhost:3000/api-docs
```

</details>

<details>
<summary><b>Option 2: Manual Setup (Development)</b></summary>

**Backend Setup:**

```bash
cd API
npm install
# Configure .env file
npm start
# API available at http://localhost:3000
```

**Frontend Setup:**

```bash
cd frontend
npm install
npm run dev
# Frontend available at http://localhost:5173
```

</details>

### First Steps After Installation

1. **Register an account** at the frontend login page
2. **Create your first task** manually or using AI
3. **Explore the API documentation** at `/api-docs`
4. **Toggle language** between English and Spanish

---

## API Documentation

### Interactive Swagger UI

Access comprehensive, interactive API documentation with live testing capabilities:

**URL:** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### Endpoints Overview

| Method              | Endpoint          | Description                                | Auth Required |
| ------------------- | ----------------- | ------------------------------------------ | ------------- |
| **Authentication**  |                   |                                            |               |
| `POST`              | `/auth/register`  | Create a new user account                  | ✗             |
| `POST`              | `/auth/login`     | Authenticate and receive JWT token         | ✗             |
| **Task Management** |                   |                                            |               |
| `GET`               | `/tasks`          | Retrieve all tasks for authenticated user  | ✗             |
| `POST`              | `/tasks`          | Create a new task                          | ✓             |
| `PUT`               | `/tasks/:id`      | Update an existing task                    | ✓             |
| `DELETE`            | `/tasks/:id`      | Delete a task                              | ✓             |
| **AI Assistant**    |                   |                                            |               |
| `POST`              | `/ai/parse-tasks` | Parse natural language into multiple tasks | ✓             |

<details>
<summary><b>Example: AI Task Creation</b></summary>

**Request:**

```http
POST /ai/parse-tasks
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "text": "Tomorrow: meeting at 10am, buy groceries, call John about the project, finish quarterly report by Friday"
}
```

**Response:**

```json
{
  "success": true,
  "tasks": [
    { "title": "Meeting at 10am tomorrow" },
    { "title": "Buy groceries" },
    { "title": "Call John about the project" },
    { "title": "Finish quarterly report by Friday" }
  ],
  "error": null
}
```

</details>

<details>
<summary><b>Example: Manual Task Creation</b></summary>

**Request:**

```http
POST /tasks
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "title": "Review pull requests",
  "completed": false
}
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Review pull requests",
      "completed": false,
      "user_id": "user-uuid",
      "created_at": "2026-01-06T15:30:00Z"
    }
  ],
  "error": null
}
```

</details>

**OpenAPI Specification:** See [`API/openapi.yaml`](API/openapi.yaml) for complete schema definitions.

---

## Frontend Features

### User Interface Highlights

<table>
<tr>
<td width="33%">

**Dashboard**

- Real-time task statistics
- Completion rate tracking
- Quick task creation
- AI-powered input

</td>
<td width="33%">

**Task Management**

- Intuitive task list view
- Filtering by status
- Priority indicators
- Batch operations

</td>
<td width="33%">

**Internationalization**

- English & Spanish support
- Persistent language preference
- Animated toggle switch
- RTL-ready architecture

</td>
</tr>
</table>

### Component Architecture

```
src/
├── components/
│   ├── ProtectedRoute.jsx      # Auth guard wrapper
│   ├── TaskModal/              # Modular task creation
│   │   ├── TaskModal.jsx
│   │   ├── ManualTaskForm.jsx
│   │   └── AITaskForm.jsx
│   ├── Dashboard/
│   │   ├── Sidebar.jsx
│   │   ├── DashboardHeader.jsx
│   │   ├── StatsCards.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   └── LanguageToggle.jsx      # i18n switcher
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── services/
│   └── api.js                  # Axios HTTP client
└── i18n/
    ├── config.js
    └── locales/
        ├── en.json
        └── es.json
```

---

## Project Structure

```
taskflow/
│
├── API/                           # Backend REST API
│   ├── controllers/              # Business logic handlers
│   │   ├── ai.controller.js      # AI task parsing
│   │   ├── auth.controller.js    # Authentication
│   │   └── task.controller.js    # Task CRUD operations
│   ├── middlewares/              # Express middlewares
│   │   ├── auth.js               # JWT verification
│   │   └── rateLimiter.js        # Rate limiting
│   ├── routes/                   # API route definitions
│   │   ├── ai.routes.js
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   ├── tests/                    # Automated tests
│   │   └── task.test.js
│   ├── bd-conection.js           # Supabase client config
│   ├── index.js                  # Express app entry point
│   ├── openapi.yaml              # OpenAPI 3.0 specification
│   ├── Dockerfile                # API container image
│   ├── package.json
│   └── README.md                 # API-specific documentation
│
├── frontend/                      # React frontend application
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── components/           # Reusable React components
│   │   ├── pages/                # Page-level components
│   │   ├── services/             # API integration
│   │   ├── i18n/                 # Internationalization
│   │   ├── App.jsx               # Root component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── Dockerfile                # Frontend container image
│   ├── nginx.conf                # Production web server config
│   ├── vite.config.js            # Vite build configuration
│   ├── tailwind.config.js        # Tailwind CSS settings
│   ├── package.json
│   └── README.md
│
├── docker-compose.yaml           # Multi-service orchestration
├── .gitignore                    # Version control exclusions
└── README.md                     # This file
```

---

## Development & Testing

### Backend Development

```bash
cd API

# Run tests with coverage
npm test

# Start development server with auto-reload
npm run dev

# Lint code
npm run lint

# View API documentation
# Navigate to http://localhost:3000/api-docs
```

### Frontend Development

```bash
cd frontend

# Start Vite dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Docker Commands

```bash
# Build images
docker-compose build

# Start services in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up --build --force-recreate
```

---

## Deployment

### Production Considerations

| Aspect                    | Recommendation                                            |
| ------------------------- | --------------------------------------------------------- |
| **Environment Variables** | Use secrets management (e.g., AWS Secrets Manager, Vault) |
| **Database**              | Configure Supabase connection pooling for high traffic    |
| **API Rate Limiting**     | Adjust limits in `rateLimiter.js` based on usage patterns |
| **Frontend Build**        | Enable compression in Nginx, configure CDN                |
| **SSL/TLS**               | Use reverse proxy (Nginx/Traefik) with Let's Encrypt      |
| **Monitoring**            | Integrate APM tools (New Relic, DataDog)                  |
| **Logging**               | Centralize logs with ELK Stack or CloudWatch              |
| **Scaling**               | Use Kubernetes or Docker Swarm for orchestration          |

### Docker Compose Production

```yaml
# docker-compose.prod.yaml
services:
  api:
    image: taskflow-api:latest
    restart: always
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: "1"
          memory: 512M

  frontend:
    image: taskflow-frontend:latest
    restart: always
    deploy:
      replicas: 2
```

---

## Security & Best Practices

### Implemented Security Measures

- **JWT Authentication**: Secure token-based authentication with Supabase Auth
- **Row Level Security (RLS)**: Database-level isolation ensuring users only access their own data
- **Rate Limiting**: Protection against brute-force attacks and API abuse
- **Input Validation**: Comprehensive request validation on all endpoints
- **CORS Configuration**: Restricted cross-origin requests to trusted domains
- **Environment Variables**: Sensitive credentials never committed to version control
- **SQL Injection Prevention**: Parameterized queries via Supabase client
- **Password Security**: Handled by Supabase Auth with bcrypt hashing

### Security Checklist

- [ ] Change default JWT secrets in production
- [ ] Enable HTTPS/SSL in production environment
- [ ] Configure Supabase RLS policies for all tables
- [ ] Set up API rate limits appropriate for your traffic
- [ ] Implement request logging and monitoring
- [ ] Regular dependency updates (`npm audit fix`)
- [ ] Enable Supabase database backups
- [ ] Configure CORS to allow only your frontend domain

---

## API Rate Limiting

Default rate limits to prevent abuse:

| Endpoint Type   | Limit        | Window     |
| --------------- | ------------ | ---------- |
| Authentication  | 5 requests   | 15 minutes |
| Task Operations | 100 requests | 15 minutes |
| AI Task Parsing | 20 requests  | 15 minutes |

Customize in [`API/middlewares/rateLimiter.js`](API/middlewares/rateLimiter.js)

---

## Screenshots

<details>
<summary><b>View Application Screenshots</b></summary>

_Coming soon: Add screenshots of your dashboard, task management interface, and AI task creation feature._

</details>

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting PR
- Keep commits focused and descriptive

---

## Troubleshooting

<details>
<summary><b>Common Issues and Solutions</b></summary>

**Issue: "Cannot connect to Supabase"**

- Verify `SUPABASE_URL` and `SUPABASE_KEY` in `.env`
- Check network connectivity to Supabase
- Ensure Supabase project is active

**Issue: "AI parsing not working"**

- Verify `GEMINI_API_KEY` is valid
- Check Google AI Studio quota limits
- Review API logs for detailed error messages

**Issue: "Docker containers won't start"**

- Check port 3000 and 5173 are not in use
- Verify Docker Engine is running
- Review logs: `docker-compose logs`

**Issue: "Frontend can't connect to API"**

- Ensure API is running on port 3000
- Check CORS configuration in `API/index.js`
- Verify `API_URL` in frontend configuration

</details>

---

## License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Supabase](https://supabase.com/) for database and authentication infrastructure
- [Google Gemini](https://ai.google.dev/) for AI-powered task parsing
- [Express.js](https://expressjs.com/) community for the robust backend framework
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) teams for excellent frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">

**Built with ❤️ for modern task management**

[Report Bug](https://github.com/your-repo/issues) • [Request Feature](https://github.com/your-repo/issues) • [Documentation](API/README.md)

</div>
