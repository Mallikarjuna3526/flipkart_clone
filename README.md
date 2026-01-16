🛒 Flipkart Clone – Full-Stack E-Commerce Application

A **full-stack e-commerce web application** inspired by Flipkart, built as part of the **Scaler SDE Intern Full-Stack Assignment**.  
This project replicates Flipkart’s core shopping workflow, including **product browsing, cart management, and order placement**, with a clean, responsive, and user-friendly interface.

---

## 🔗 Live Demo
https://flipkart-clone-frontend-fucg.onrender.com/

---



## 🚀 Features

### ✅ Core Features (As per Assignment)

- Product listing displayed as **grid-based product cards**
- Product detail page with **image gallery**
- Search products by **name**
- Shopping cart functionality:
  - Add items to cart
  - Update item quantity
  - Remove items from cart
- Checkout flow with **shipping address**
- Order placement and **confirmation page**
- **Dynamic UI updates** without page refresh (Single Page Application)

---

### 🎨 UI / UX

- Flipkart-style **color scheme and layout**
- Card-based product design
- Responsive grid layout
- Clean and intuitive user experience

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Context API
- CSS

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- PostgreSQL (Neondb)

---

## 🗂️ Project Structure

flipkart-clone/
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── models/
│       └── config/
│
├── frontend/
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── styles/
│       └── api/
│
├── package.json
└── README.md

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone the Repository

git clone https://github.com/Mallikarjuna3526/flipkart_clone.git  
cd flipkart-clone

---

### 2️⃣ Backend Setup

cd backend  
npm install

Create a .env file inside backend:

PORT=5000  
DATABASE_URL=<Your-Database-URL>

Run backend:

node index.js

Backend runs at: http://localhost:5000

---

### 3️⃣ Frontend Setup

cd frontend  
npm install  
npm start

Frontend runs at: http://localhost:3000

---

### 4️⃣ Run Both Together

From root:

npm install  
npm start

---

## 🗄️ Database Schema

- products – product catalog
- cart_items – cart data
- orders – order summary
- order_items – products per order

---

## 🧠 Design Decisions

- No authentication (default user)
- Backend handles business logic
- MVC backend architecture

---

## 🧪 Sample Data

Seeded product categories:
- Mobiles
- Laptops
- Electronics
- Fashion

---

