# 🛒 Next.js E-Commerce Catalog

**SSR • NextAuth • Prisma • PostgreSQL • Docker**

A full-stack e-commerce catalog built with **Next.js (Pages Router)** using **Server-Side Rendering (SSR)**, secure authentication with **NextAuth.js**, database management via **Prisma + PostgreSQL**, and a fully automated **Docker Compose** setup.

This project satisfies all mandatory requirements for backend, frontend, authentication, database management, and automated testing readiness.

---

## 🚀 Tech Stack

- **Frontend**: Next.js (Pages Router), React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Authentication**: NextAuth.js (OAuth – GitHub)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: Zod
- **Containerization**: Docker & Docker Compose

---

## 📁 Project Structure

my-ecommerce-app/
├── components/
├── lib/
│ └── prisma.js
├── pages/
│ ├── api/
│ │ ├── auth/
│ │ │ └── [...nextauth].js
│ │ └── cart/
│ │ └── index.js
│ ├── products/
│ │ └── [id].js
│ ├── cart.js
│ └── index.js
├── prisma/
│ ├── schema.prisma
│ └── seed.js
├── middleware.js
├── docker-compose.yml
├── Dockerfile
├── next.config.mjs
├── .env.example
├── submission.json
└── README.md

---

## 🔐 Environment Variables

Create a `.env` file using the template below:

DATABASE_URL="postgresql://user:password@db:5432/ecommerce?schema=public"

NEXTAUTH_URL=http://localhost:3001  
NEXTAUTH_SECRET=your_random_secret_key

GITHUB_ID=your_github_client_id  
GITHUB_SECRET=your_github_client_secret

⚠️ Do NOT commit the `.env` file to the repository.

---

## 🐳 Docker Setup

### 1️⃣ Build and Run the Application

docker-compose up --build

This command starts:

- db → PostgreSQL database (with healthcheck)
- app → Next.js application

Application URL:  
http://localhost:3001

---

## 🗄️ Database Setup (Prisma)

### 2️⃣ Sync Database Schema

docker-compose exec app sh  
npx prisma db push  
exit

This creates all required tables:

- User
- Account
- Session
- Product
- Cart
- CartItem

---

### 3️⃣ Seed Database

docker-compose exec app sh  
node prisma/seed.js  
exit

This inserts:

- Sample products
- Test user for authentication

---

## 🔍 Prisma Studio (Optional)

docker-compose exec app sh  
npx prisma studio

Open in browser:  
http://localhost:5555

---

## 🔑 Authentication (NextAuth.js)

- OAuth Provider: GitHub
- Prisma Adapter used for persisting:
  - Users
  - Accounts
  - Sessions

Test authentication:  
http://localhost:3001/api/auth/signin

---

## 🖥️ Pages (SSR)

### 🏠 Home Page (/)

- Uses getServerSideProps
- Fetches products from database
- Supports:
  - Search: /?q=keyword
  - Pagination: /?page=2

### 📄 Product Detail Page (/products/[id])

- SSR page
- Displays product name, description, price, image
- Returns 404 for invalid product IDs

---

## 🛒 Shopping Cart API (Protected)

Method | Endpoint | Description  
GET | /api/cart | Fetch user cart  
POST | /api/cart | Add item to cart  
DELETE | /api/cart | Remove item from cart

- Requires authentication
- Request bodies validated using Zod

---

## 🔒 Route Protection

- /cart route protected using middleware.js
- Unauthenticated users are redirected to sign-in page

---

## 🧪 Testing Support

All major UI elements include data-testid attributes to support automated testing with Playwright or Cypress.

Examples:

- product-card-{id}
- add-to-cart-button-{id}
- cart-item-{id}
- signin-button
- signout-button

---

## 📄 submission.json

{
"testUser": {
"email": "test.user@example.com",
"name": "Test User"
}
}

This user is created during database seeding and used for automated evaluation.

---

## ▶️ Running the Application

docker-compose up

Then open:  
http://localhost:3001

---
