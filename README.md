# Notes App MERN Stack



A simple and full-featured Notes Application built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling.

## 🚀 Tech Stack

- **Frontend:**
  - React
  - Typescript
  - Tailwind CSS
  - Axios
  - Shadcn UI

- **Backend:**
  - Express.js
  - MongoDB (via Mongoose)

## ⚙️ MongoDB Configuration

Pastikan kamu memiliki MongoDB URI (misalnya dari [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

Edit file `backend/config.json`:

```json
{
  "mongoURI": "mongodb+srv://<username>:<password>@cluster0.mongodb.net/notesapp?retryWrites=true&w=majority"
}
```

Gantilah `<username>`, `<password>`, dan `notesapp` sesuai konfigurasi milikmu.

## 📦 Cara Install & Menjalankan

### 1. Clone repositori

```bash
git clone https://github.com/username/notes-app.git
cd notes-app
```

### 2. Install dependencies frontend dan backend

```bash
# Install frontend
cd frontend
npm install

# Install backend
cd ../backend
npm install
```

### 3. Jalankan server backend

```bash
# file index.js
npm run start
```

### 4. Jalankan frontend React

```bash
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`
Backend akan berjalan di `http://localhost:8000`
