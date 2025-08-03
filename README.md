Bistro Boss - Restaurant Management System
Welcome to Bistro Boss, a full-stack web application designed to streamline restaurant operations, including menu management, user authentication, and payment processing. This project showcases a modern, responsive, and feature-rich platform built with React, Firebase, and Stripe, offering both user and admin functionalities for an enhanced dining experience.
🚀 Features

User Authentication: Secure sign-up, login, and Google authentication using Firebase.
Menu Management: Admins can add, update, and delete menu items with real-time updates.
Shopping Cart: Users can add items to their cart and proceed to secure payments via Stripe.
Admin Dashboard: Comprehensive admin panel with analytics, user management, and order tracking.
Responsive Design: Fully responsive UI using Tailwind CSS for seamless use across devices.
Role-Based Access: Separate interfaces for admins and users with protected routes.
Payment History: Track payment history for users with detailed transaction records.
Real-Time Data: Powered by React Query for efficient data fetching and caching.

🛠️ Technologies Used
Frontend

React: For building dynamic and interactive user interfaces.
React Router: For client-side routing and navigation.
React Query: For managing server-state and caching API calls.
Tailwind CSS: For responsive and modern styling.
React Hook Form: For efficient form handling and validation.
Swiper: For interactive carousels (e.g., testimonials).
React Icons: For adding icons to enhance UI.
SweetAlert2: For elegant alerts and confirmations.

Backend

Node.js & Express: For building a robust REST API.
MongoDB: For storing menu items, user data, and orders.
Firebase Authentication: For secure user authentication and management.
Stripe: For secure payment processing.
Axios: For handling HTTP requests with interceptors for secure API calls.
Vercel: For seamless deployment of the backend.

Other Tools

ImgBB API: For image hosting and uploads.
React Simple Captcha: For CAPTCHA-based form security (optional feature).
Recharts: For visualizing admin analytics with charts.

📂 Project Structure
bistro-boss-client/
├── src/
│   ├── compoment/           # Reusable UI components (e.g., SectionTitle, SosalLogin)
│   ├── contex/              # React Context for authentication (Authprovider)
│   ├── dashbord/            # Dashboard components (AdminHome, UserHome, Cart, etc.)
│   ├── hooks/               # Custom hooks (useAuth, useCart, useAxiosSecure, etc.)
│   ├── layout/              # Layout components (Main, Dashbord)
│   ├── pages/               # Page components (Home, Login, SignUp, etc.)
│   ├── router/              # React Router configuration
│   ├── shared/              # Shared components (Navbar, Footer, MenuItems)
│   ├── index.css            # Global styles
│   ├── main.jsx             # Entry point for React
├── public/                  # Static assets
├── .env                     # Environment variables (API keys, Firebase config)
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation

🖥️ Installation & Setup
Prerequisites

Node.js (v16 or higher)
MongoDB (local or Atlas)
Firebase project with Authentication enabled
Stripe account for payment integration
ImgBB API key for image uploads

Steps

Clone the Repository:
git clone https://github.com/RejwanulIslam/bistro-boss-client.git
cd bistro-boss-client


Install Dependencies:
npm install


Set Up Environment Variables:Create a .env file in the root directory and add the following:
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_IMAGE_HOSTING_KEY=your_imgbb_api_key
VITE_PAYMENT_GETWAT_PK=your_stripe_publishable_key


Run the Application:
npm run dev

The app will be available at http://localhost:5173.

Backend Setup:

Clone the backend repository:git clone https://github.com/RejwanulIslam/bistro-boss-server.git
cd bistro-boss-server


Install backend dependencies:npm install


Set up environment variables for the backend (e.g., MongoDB URI, JWT secret).
Run the backend server:npm start





🌐 Live Demo
Check out the live application: https://bistro-boss-233c4.web.app

📚 Usage
For Users

Sign Up/Login: Create an account or log in using email/password or Google.
Browse Menu: View the menu, filter by category, and add items to the cart.
Checkout: Proceed to payment using Stripe for a secure transaction.
View History: Check your payment history in the user dashboard.

For Admins

Manage Menu: Add, update, or delete menu items with image uploads.
User Management: Promote users to admins or delete user accounts.
Analytics: View revenue, user, and order statistics with interactive charts.
Manage Orders: Track and manage customer orders.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
📬 Contact
For any inquiries or feedback, reach out to:

GitHub: [RejwanulIslam](https://github.com/RejwanulIslam)
Email: rejwanul96@gmail.com


Thank you for exploring Bistro Boss! We hope this application enhances your restaurant management experience.