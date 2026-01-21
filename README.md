# Bookstore API

This is a simple backend project for a **Bookstore API** made to practice real-world backend concepts. It is not just basic CRUD and includes authentication, caching, and a borrow system.

---

## Features

- User authentication using JWT
- Role based access (Admin / User)
- Add, update, delete and view books
- Borrow and return books
- Prevent borrowing same book twice
- View borrow history
- Redis used for caching books data
- Advanced querying (filter, sort, select fields)
- Pagination support
- Dockerized setup

---

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB
- Redis
- JWT
- Docker

---

## Project Structure

```
src/
  controllers/
  database/
  routes/
  models/
  middlewares/
  utils/
```

---

## Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://redis:6379
```

---

## Run Project

### Using Docker

```
docker-compose up --build
```

### Without Docker

```
npm install
npm run dev
```

---

## API Routes

- POST /auth/register
- POST /auth/login
- GET /books
- POST /books (admin)
- POST /borrow/\:bookId
- POST /return/\:bookId

---

## Purpose

This project was made to improve backend skills like authentication, caching, and clean API design.

##
