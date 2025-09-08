# Blogging Application 📝

> A full-stack blogging platform built with **ReactJS** and **Node.js/Express.js**, featuring JWT authentication, role-based access, post & comment management, and advanced search/pagination.

---

## 🚀 Features

- 🔑 **User Authentication & Authorization**

  - Secure login/signup with **JWT authentication**
  - Role-based access (Admin / Normal User)

- 📝 **Blog Management**

  - Create, update, and delete blog posts
  - Categorize posts for better organization
  - Manage your own content with ease

- 💬 **Comments System**

  - Add, update, and delete comments
  - View all comments under each post

- 🔍 **Advanced Functionalities**

  - Pagination for blog feeds
  - Search and sorting options for better discoverability

- 🎨 **Frontend**
  - Responsive UI built with **ReactJS**
  - User-friendly dashboards for Admin and Normal users

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, HTML5, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Version Control:** Git, GitHub

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Blogging-Application.git
   cd Blogging-Application
   ```
2. Install dependencies
   For backend:
   cd backend
   npm install

   For frontend:
   cd frontend
   npm install

3. Configure environment variables
   Create a .env file in the backend folder with:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key

4. Run the application
   Start backend:
   cd backend
   npm start

   Start frontend:
   cd frontend
   npm start
