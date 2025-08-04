# Zerodha Clone - MERN Stack Trading Platform

A full-stack trading platform clone inspired by Zerodha, built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes a landing page, user authentication, and a comprehensive trading dashboard.

## 🏗️ Project Architecture

This project consists of three main applications:

- **Frontend** - Landing page and marketing site (React.js)
- **Dashboard** - Trading dashboard and portfolio management (React.js + Material-UI)
- **Backend** - REST API server (Node.js + Express.js + MongoDB)

## 🚀 Features

### Landing Page (Frontend)

- Modern, responsive landing page
- User authentication (Login/Signup)
- Product information and pricing
- About section and support pages
- Mobile-responsive design with Bootstrap

### Trading Dashboard

- Real-time portfolio overview
- Holdings and positions management
- Order placement and tracking
- Interactive charts and analytics
- Funds management
- Watchlist functionality

### Backend API

- JWT-based authentication
- User account management
- Trading operations (buy/sell orders)
- Portfolio data management
- Secure API endpoints with middleware protection

## 🛠️ Tech Stack

### Frontend & Dashboard

- **React.js** (v19.1.0 / v18.2.0)
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Material-UI** - Component library (Dashboard)
- **Chart.js** & **React-ChartJS-2** - Data visualization
- **React Toastify** - Notifications
- **Bootstrap** - CSS framework (Landing page)

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** with **Mongoose** - Database and ODM
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Passport.js** - Authentication middleware

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Zerodha
```

### 2. Backend Setup

```bash
cd backend
npm install

# Create a .env file with the following variables:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=5000

npm run dev  # Development mode with nodemon
# or
npm start    # Production mode
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start    # Runs on http://localhost:3000
```

### 4. Dashboard Setup

```bash
cd dashboard
npm install
npm start    # Runs on http://localhost:3001
```

## 📁 Project Structure

```
Zerodha/
├── README.md
├── backend/
│   ├── index.js                 # Server entry point
│   ├── controllers/
│   │   └── AuthController.js    # Authentication logic
│   ├── middleware/
│   │   └── AuthMiddleware.js    # JWT verification
│   ├── models/
│   │   ├── UserModel.js         # User schema
│   │   ├── HoldingModel.js      # Holdings data
│   │   ├── OrderModel.js        # Order management
│   │   └── PositionsModels.js   # Position tracking
│   ├── routes/
│   │   └── AuthRoute.js         # Authentication routes
│   └── schemas/
│       └── *.js                 # Mongoose schemas
├── frontend/
│   ├── src/
│   │   ├── landing_page/        # Landing page components
│   │   │   ├── home/           # Hero section, features
│   │   │   ├── about/          # About page
│   │   │   ├── pricing/        # Pricing information
│   │   │   ├── products/       # Product showcase
│   │   │   ├── support/        # Support pages
│   │   │   └── Login/          # Authentication forms
│   │   └── test/               # Component tests
│   └── public/assets/          # Images and static files
└── dashboard/
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.js     # Main dashboard
    │   │   ├── Holdings.js      # Portfolio holdings
    │   │   ├── Orders.js        # Order management
    │   │   ├── Positions.js     # Current positions
    │   │   ├── WatchList.js     # Stock watchlist
    │   │   └── *.js            # Other components
    │   └── data/
    └── public/
```

## 🔗 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Trading (Protected Routes)

- `GET /api/holdings` - Get user holdings
- `GET /api/positions` - Get current positions
- `POST /api/orders` - Place new order
- `GET /api/orders` - Get order history

## 🧪 Testing

### Frontend Testing

```bash
cd frontend
npm test
```

The project includes comprehensive tests for components using:

- **React Testing Library**
- **Jest**
- **@testing-library/jest-dom**

Example test coverage:

- Hero component rendering
- User authentication flows
- Component accessibility

## 🚦 Usage

1. **Start the Backend Server**

   ```bash
   cd backend && npm run dev
   ```

2. **Launch the Landing Page**

   ```bash
   cd frontend && npm start
   ```

3. **Open the Trading Dashboard**

   ```bash
   cd dashboard && npm start
   ```

4. **Access the Applications**
   - Landing Page: http://localhost:3000
   - Dashboard: http://localhost:3001
   - API Server: http://localhost:5000

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- CORS configuration
- Input validation and sanitization

## 🎨 UI/UX Features

- Responsive design for all screen sizes
- Modern Material-UI components in dashboard
- Bootstrap styling for landing page
- Interactive charts and data visualization
- Real-time notifications with React Toastify
- Smooth navigation with React Router

## 📊 Data Models

### User Model

- Personal information
- Authentication credentials
- Portfolio summary

### Holdings Model

- Stock holdings
- Quantity and average price
- Current market value

### Orders Model

- Order history
- Buy/sell transactions
- Order status tracking

### Positions Model

- Current trading positions
- P&L calculations
- Market data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes. Please respect Zerodha's intellectual property and trademarks.

## 🙏 Acknowledgments

- Inspired by [Zerodha](https://zerodha.com/) - India's largest stockbroker
- Built with modern web technologies and best practices
- Responsive design principles and accessibility standards

---

**Note**: This is a clone project created for learning purposes. It is not affiliated with or endorsed by Zerodha.
