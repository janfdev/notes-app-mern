# NotS - MERN Stack Notes App

NotS is a full-stack note-taking application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a clean, responsive, and intuitive interface for users to create, manage, and organize their digital notes efficiently.

## Features

- **User Authentication**: Secure registration and login system using JSON Web Tokens (JWT).
- **CRUD Operations**: Full capabilities to Create, Read, Update, and Delete notes.
- **Note Pinning**: Pin important notes to keep them at the top of your list.
- **Rich Text Editing**: A simple interface to write and format note content.
- **Tagging System**: Organize notes by adding custom tags.
- **Powerful Search**: Quickly find notes by title or content.
- **Responsive Design**: A seamless experience across desktop and mobile devices.
- **Dark/Light Mode**: Toggle between dark and light themes for user comfort.
- **Protected Routes**: User-specific data is protected and only accessible after login.

## Tech Stack

### Frontend
- **Framework**: React (with TypeScript & Vite)
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Icons**: Lucide React, React Icons
- **Notifications**: React Toastify

### Backend
- **Framework**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Middleware**: CORS, Custom Auth Middleware

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local instance or a cloud service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/janfdev/notes-app-mern.git
    cd notes-app-mern
    ```

2.  **Setup the Backend:**
    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```
    - Install the dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `backend` root and add the JWT TOKEN and Your MongoDB connection string following variables:
      ```
      JWT_TOKEN_SECRET=YOUR_SUPER_SECRET_KEY
      MONGODB_URL:YOUR_MONGODB_CONNECTION_STRING
      ```
    - Start the backend server:
      ```bash
      npm start
      ```
      The server will be running on `http://localhost:8000`.

3.  **Setup the Frontend:**
    - Navigate to the `frontend` directory in a new terminal:
      ```bash
      cd frontend
      ```
    - Install the dependencies:
      ```bash
      npm install
      ```
    - The frontend connects to the backend API specified in `frontend/src/utils/constants.ts`. Ensure the `BASE_URL` matches your backend server address (default is `http://localhost:8000`).
    - Start the frontend development server:
      ```bash
      npm run dev
      ```
      The application will be available at `http://localhost:5173`.

## Project Structure

The project is organized into two main parts: `frontend` and `backend`.

```
.
├── backend/
│   ├── src/
│   │   ├── modules/      # Business logic divided by features (auth, notes, user)
│   │   └── shared/       # Shared code like middlewares
│   ├── config.json       # Database configuration
│   └── index.js          # Backend entry point
│
└── frontend/
    ├── src/
    │   ├── assets/       # Static assets like images and SVGs
    │   ├── components/   # Reusable UI components
    │   ├── context/      # React context for state management
    │   ├── lib/          # Utility functions (e.g., cn for Tailwind Merge)
    │   ├── pages/        # Page components for different routes
    │   ├── utils/        # Axios instance, constants, and helper functions
    │   └── App.tsx       # Main app component with routing setup
    └── vite.config.ts    # Vite configuration
```

## API Endpoints

The backend exposes the following REST API endpoints:

| Method | Endpoint                    | Description                       | Protected |
| :----- | :-------------------------- | :-------------------------------- | :-------- |
| `POST` | `/api/auth/register`        | Register a new user               | No        |
| `POST` | `/api/auth/login`           | Log in a user                     | No        |
| `GET`  | `/api/users/me`             | Get current user's details        | Yes       |
| `GET`  | `/api/notes`                | Get all notes for the logged-in user | Yes       |
| `POST` | `/api/notes`                | Create a new note                 | Yes       |
| `PUT`  | `/api/notes/:id`            | Update an existing note           | Yes       |
| `DELETE`| `/api/notes/:id`           | Delete a note                     | Yes       |
| `GET`  | `/api/notes/search`         | Search for notes                  | Yes       |
| `PATCH`| `/api/notes/:id/pin`        | Pin or unpin a note               | Yes       |