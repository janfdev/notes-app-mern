# Nota-Wota - MERN Stack Notes App

Nota-Wota is a full-stack note-taking application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a clean, responsive, and intuitive interface for users to create, manage, and organize their digital notes efficiently.

## Features

- **User Authentication**: Secure registration and login system using JSON Web Tokens (JWT).
- **CRUD Operations**: Full capabilities to Create, Read, Update, and Delete notes.
- **Note Pinning**: Pin important notes to keep them at the top of your list.
- **Tagging System**: Organize notes by adding custom tags.
- **Powerful Search**: Quickly find notes by title, content, or tags.
- **Responsive Design**: A seamless experience across desktop and mobile devices.
- **Dark/Light Mode**: Toggle between dark and light themes for user comfort.
- **Protected Routes**: User-specific data is protected and only accessible after login.

## Tech Stack

### Frontend
- **Framework**: React (with TypeScript & Vite)
- **UI Components**: Shadcn/ui & Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **Notifications**: React Toastify
- **Icons**: Lucide React, React Icons

### Backend
- **Framework**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Middleware**: CORS, Custom Auth Middleware

## Project Structure

The project is organized into `frontend` and `backend` directories.

```
.
├── backend/
│   ├── src/
│   │   ├── modules/      # Feature-based modules (auth, notes, user)
│   │   └── shared/       # Shared code like middlewares
│   └── index.js          # Backend server entry point
│
└── frontend/
    ├── src/
    │   ├── assets/       # Images and other static assets
    │   ├── components/   # Reusable React components
    │   ├── context/      # User context for global state
    │   ├── lib/          # Utility functions
    │   ├── pages/        # Page components for each route
    │   └── utils/        # Axios instance, constants, helpers
    └── vite.config.ts    # Vite configuration
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development.

### Prerequisites

- Node.js (v18 or higher)
- npm or an equivalent package manager
- MongoDB instance (local or cloud-based like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/janfdev/notes-app-mern.git
    cd notes-app-mern
    ```

2.  **Set up the Backend:**
    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `backend` root and add your MongoDB connection string and a JWT secret:
      ```env
      MONGO_URL=YOUR_MONGODB_CONNECTION_STRING
      JWT_TOKEN_SECRET=YOUR_SUPER_SECRET_KEY
      PORT=8000
      ```
    - Start the backend server:
      ```bash
      npm start
      ```
      The server will run on `http://localhost:8000`.

3.  **Set up the Frontend:**
    - In a new terminal, navigate to the `frontend` directory:
      ```bash
      cd frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `frontend` root to point to your backend API:
      ```env
      VITE_REACT_BACKEND_URL=http://localhost:8000
      ```
    - Start the frontend development server:
      ```bash
      npm run dev
      ```
      The application will be available at `http://localhost:5173`.

## API Endpoints

The backend exposes the following REST API endpoints, with protected routes requiring a valid JWT.

| Method | Endpoint                    | Description                       | Protected |
| :----- | :-------------------------- | :-------------------------------- | :-------: |
| `POST` | `/api/auth/register`        | Register a new user               |    No     |
| `POST` | `/api/auth/login`           | Log in a user & get a token       |    No     |
| `GET`  | `/api/users/me`             | Get current user's details        |    Yes    |
| `GET`  | `/api/notes`                | Get all notes for the logged-in user |    Yes    |
| `POST` | `/api/notes`                | Create a new note                 |    Yes    |
| `PUT`  | `/api/notes/:id`            | Update an existing note           |    Yes    |
| `DELETE`| `/api/notes/:id`            | Delete a note                     |    Yes    |
| `GET`  | `/api/notes/search`         | Search for notes by query         |    Yes    |
| `PATCH`| `/api/notes/:id/pin`        | Pin or unpin a note               |    Yes    |