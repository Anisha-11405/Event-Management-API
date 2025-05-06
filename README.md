# Event Management API

A simple CRUD API to manage events using Express, TypeScript, and MongoDB.

## Features
- Create, Read, Update, Delete events
- MongoDB for data storage
- Date validation to ensure future dates only
- JSON responses
- No authentication

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and set your values
4. Run the server: `npm start`

## Endpoints
- `POST /api/events`
- `GET /api/events`
- `GET /api/events/:id`
- `PUT /api/events/:id`
- `DELETE /api/events/:id`
