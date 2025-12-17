# Uber Clone Project

Welcome to the Uber Clone repository! This project is a fully functional and scalable ride-hailing application inspired by Uber. It encapsulates a robust backend built with `Node.js` and `Express`, and a dynamic frontend using `React` and `Vite`. This project demonstrates modern web application design patterns and development practices.

---

## 🚀 Project Overview

This project aims to replicate the functionalities of a ride-hailing application. Users can book rides, view driver details, and manage their ride history. Captains (drivers) can accept or decline ride requests and manage their profiles. The platform is designed with modularity and scalability in mind.

---

## 🧑‍💻 Technologies and Dependencies

### Backend
- **Language**: Node.js
- Frameworks & Libraries:
  - **Express.js**: For routing and middleware setup
  - **Mongoose**: For MongoDB object modeling and data interaction
  - **Express Validator**: For input validation
  - **JSON Web Tokens (JWT)**: For secure authentication
  - **Cors**: Handling cross-origin requests
  - **Bcrypt**: Password hashing and security
  - **Dotenv**: Managing environment variables
- **Database**: MongoDB via Mongoose ORM

### Frontend
- **Language**: JavaScript
- **Library**: React.js (v19+)
- **Tools and Plugins**:
  - **Vite**: Modern development environment for high-speed optimization
  - **GSAP**: For animations on the front-end
  - **React Router Dom**: For routing
  - **TailwindCSS**: For styling
  - **ESLint**: For consistent coding styles
  - **PostCSS**: For transforming CSS

---

## 🗂️ Project Structure

### Backend
The backend is housed in the `Backend/` directory. Key components:
- **app.js**: Sets up middleware and API routes.
- **routes/**: Contains route handlers for different modules (`user.routes`, `captain.routes`, `ride.routes`, etc.).
- **controllers/**: Core business logic and processing.
- **db/**: Database connection setup.

### Frontend
The frontend is in the `frontend/` directory. Key files:
- **index.html**: Serves as the entry point, embedding React's root component.
- **src/**: Contains React components and application logic.
- **public/**: Static assets and public resources.

---

## 💻 Development Workflow

### Backend Setup
1. Navigate to `Backend/`:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   node server.js
   ```
4. API should be live at `http://localhost:PORT`.

### Frontend Setup
1. Navigate to `frontend/`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app in the browser using the URL from Vite’s terminal log.

---

## 💡 Key Features
- **User Authentication:** Secure login and signup using JWTs.
- **Ride Management:** Book rides with available captains.
- **Captain Features:** Accept or reject ride requests.
- **Database Integration:** Uses MongoDB for persistent storage.
- **Responsive UI:** Built with React and styled using TailwindCSS.
- **Asynchronous Communication:** Handle API calls with Axios.
- **Real-time Interaction Placeholder:** A placeholder to integrate real-time map functionalities and operations.

---

## 🌎 Future Enhancements
- Real-time maps integration to track rides and show routes using Google Maps API.
- Advanced features like rating systems for drivers and riders.
- Push notifications for ride updates.
- Payment gateway integration for handling payments.
- Dockerize the application for cloud deployment.

---

## 📂 Project Insights
### Sample Backend (`app.js`)
```javascript
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(require("cookie-parser")());

// Routes
app.use("/users", require("./routes/user.routes"));
app.use("/captains", require("./routes/captain.routes"));

// Connect Database
require("./db/db")();

// Server Listen
app.get("/", (req, res) => res.send("Server is up!"));
```

---

Thank you for taking the time to view this repository. Your suggestions to improve functionality or design are very welcome. Feel free to clone and contribute!
