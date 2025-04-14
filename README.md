# Realtime Blog Backend

This is the backend for a **Realtime Blog Application** built using Node.js, Express.js, and Sequelize ORM. It handles user authentication, blog CRUD operations, file uploads, and real-time communication using Socket.IO.

## 🌐 Live API Endpoint

```
https://realtime-blog-backend.onrender.com
```

## 📁 Features

- User authentication with JWT
- Secure password hashing with bcrypt
- Blog post creation, editing, deletion
- Image upload with multer
- Real-time updates using Socket.IO
- PostgreSQL database with Sequelize ORM
- CORS and Helmet for security
- RESTful API architecture

## 🚀 Technologies Used

- Node.js
- Express.js
- Sequelize (PostgreSQL)
- JWT for authentication
- bcrypt for password hashing
- multer for file uploads
- socket.io for real-time updates
- dotenv for environment variables
- Helmet and CORS for security

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Lokeshwar28/Realtime_blog_backend.git
cd Realtime_blog_backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5001
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the development server

```bash
npm run dev
```

## 🗃️ Folder Structure

- `controllers/` – Business logic for routes
- `routes/` – API route definitions
- `models/` – Sequelize models
- `middleware/` – Authentication & validation middleware
- `uploads/` – Uploaded blog images
- `index.js` – Server entry point

## 🧪 API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| POST   | `/api/auth/register` | Register new user        |
| POST   | `/api/auth/login`    | Login user               |
| GET    | `/api/blogs`         | Fetch all blog posts     |
| POST   | `/api/blogs`         | Create a blog post       |
| PUT    | `/api/blogs/:id`     | Update a blog post       |
| DELETE | `/api/blogs/:id`     | Delete a blog post       |
| GET    | `/api/blogs/:id`     | Get a single blog post   |

## 📅 Last Updated

April 14, 2025

## 👤 Author

**Lokeshwar Reddy Gummireddy**  
 📧 reddylokesh142@gmail.com
🌐 GitHub: [Lokeshwar28](https://github.com/Lokeshwar28)

---

Feel free to ⭐️ this repository if you found it helpful!
