# Human Resources Backend API

A production-ready RESTful API built with **Node.js**, **Express**, and **TypeScript**.
This project provides a scalable backend architecture with Prisma ORM, Zod validation, Swagger documentation, and modern development tooling.

---

## 🚀 Tech Stack

### Core

* **Node.js** - JavaScript runtime
* **Express.js** - Web framework
* **TypeScript** - Type-safe development

### Database

* **Prisma ORM** - Database toolkit and ORM
* **PostgreSQL** - Relational database

### Validation & Documentation

* **Zod** - Schema validation
* **Swagger / OpenAPI** - API documentation

### Security & Middleware

* **Helmet** - HTTP security headers
* **CORS** - Cross-origin resource sharing
* **Morgan** - HTTP request logger

### Development Tools

* **Nodemon** - Automatic server restart
* **TSX** - TypeScript execution
* **dotenv** - Environment configuration

---

# 📁 Project Structure

```
src
│
├── config
│   ├── prisma.ts
│   └── swagger.ts
│
├── controllers
│
├── services
│
├── repositories
│
├── routes
│
├── schemas
│
├── middlewares
│
├── utils
│
├── app.ts
└── server.ts

prisma
└── schema.prisma

.env
.env.example
nodemon.json
package.json
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>

cd back
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file:

```env
PORT=3000

DATABASE_URL="postgresql://username:password@localhost:5432/database"

NODE_ENV=development
```

---

# 🗄️ Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

# ▶️ Running the Project

Development mode:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Production:

```bash
npm start
```

---

# 📚 API Documentation

Swagger documentation is available at:

```
http://localhost:3000/api-docs
```

---

# 🔌 API Health Check

Request:

```
GET /
```

Response:

```json
{
  "success": true,
  "message": "Server is running"
}
```

---

# 🛡️ Features

* ✅ TypeScript strict mode
* ✅ RESTful API architecture
* ✅ Prisma ORM integration
* ✅ Database migrations
* ✅ Request validation with Zod
* ✅ Swagger API documentation
* ✅ Secure HTTP headers
* ✅ CORS configuration
* ✅ Environment configuration
* ✅ Clean architecture structure
* ✅ Error handling middleware
* ✅ Repository-Service pattern

---

# 🧪 Scripts

| Command                   | Description              |
| ------------------------- | ------------------------ |
| `npm run dev`             | Start development server |
| `npm run build`           | Compile TypeScript       |
| `npm start`               | Run production server    |
| `npm run prisma:generate` | Generate Prisma client   |
| `npm run prisma:migrate`  | Run database migrations  |
| `npm run prisma:studio`   | Open Prisma Studio       |

---

# 🌱 Development Guidelines

* Keep business logic inside **Services**
* Keep database operations inside **Repositories**
* Validate all incoming requests using **Zod**
* Document all APIs using **Swagger**
* Never commit `.env` files

---

# 📄 License

This project is licensed under the MIT License.
