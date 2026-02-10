# Todo API - NestJS

A simple REST API for managing Todo items, built to fulfill a Full Stack technical test.  
**Node.js version used:** v22.19.0

## Tech Stack

- **Node.js**
- **NestJS**
- **TypeScript**
- **TypeORM**
- **PostgreSQL / MySQL** (configurable)

## Features

- CRUD operations for Todo items
- Search Todos by title
- Patch Todo status and optional problem description
- DTO-based validation
- CORS enabled for frontend access

## API Endpoints

### Get all todos

```bash
GET /api/todos
```

### Optionally filter by title

```bash
GET /api/todos?search=
```

### Get one todo's detail

```bash
GET /api/todos/:id
```

### Create a new todo

```bash
POST /api/todos
Content-Type: application/json

{
  "title": "Learn NestJS"
}
```

### Patch todo's status & add todo's problem description

```bash
PATCH /api/todos/:id
Content-Type: application/json

{
  "created": true,        # or "completed", "on_going", "problem"
  "problem_desc": "Issue description (optional)"
}
```

Note: Only one status can be true at a time; the others will automatically be set to false.

### Delete one todo

```bash
DELETE /api/todos/:id
```

## Project Setup & Run

1. Make sure the database exist (e.g., `todo_db`) in your postgreSQL
2. Install dependencies:

```bash
$ npm install
```

3. Run the project:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Running tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

MIT
