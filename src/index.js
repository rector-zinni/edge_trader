import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/publicpage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from "react-router";
import AOS from 'aos';
import About from './components/publicpage/About';
import Plan from './components/publicpage/Plan'
import Blog from './components/publicpage/Blog'
import Faq from './components/publicpage/Faq'
import Contact from './components/publicpage/Contact'
import Login from './components/AuthUI/login';
import Register from './components/AuthUI/Register';
import Dashboard from './components/user/Index';
import UserDashboard from './components/user/Dashboard';
import TransactionHistory from './components/user/Transaction';
import InvestHistory from './components/user/InvestHistory';
import AddFund from './components/user/AddFunds';
import ConfirmFunds from './components/user/ConfirmFunds';
import Transfer from './components/user/Transfer';
import FundHistory from './components/user/FundHistory';
import PayoutHistory from './components/user/PayoutHistory';
import ReferalBonus from './components/user/ReferalBonus';
import Payout from './components/user/Payout';
import ReferralLink from './components/user/Referal';
import ResetPassword from './components/AuthUI/ResetPassword';
import UpdatePassword from './components/AuthUI/UpdatePassword';
import { UserProvider } from "./context/userContext";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { PublicOnlyRoute } from "./utils/PublicOnlyRoute";
import Profile from './components/user/Profile';
const router = createBrowserRouter([
  // 🌍 Public Routes
  {
    path: "/",
    element: (
      <PublicOnlyRoute>
        <App />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <PublicOnlyRoute>
        <About />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/plan",
    element: (
      <PublicOnlyRoute>
        <Plan />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/blog",
    element: (
      <PublicOnlyRoute>
        <Blog />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/faq",
    element: (
      <PublicOnlyRoute>
        <Faq />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/contact",
    element: (
      <PublicOnlyRoute>
        <Contact />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicOnlyRoute>
        <Login />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicOnlyRoute>
        <Register />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/register/:referralCode",
    element: (
      <PublicOnlyRoute>
        <Register />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <PublicOnlyRoute>
        <ResetPassword />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/update-password",
    element: (
      <PublicOnlyRoute>
        <UpdatePassword />
      </PublicOnlyRoute>
    ),
  },

  // 🧭 Protected Dashboard Routes
  {
    path: "/user/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <UserDashboard /> },
      { path: "transaction", element: <TransactionHistory /> },
      { path: "investhistory", element: <InvestHistory /> },
      { path: "addfund", element: <AddFund /> },
      { path: "confirmfund", element: <ConfirmFunds /> },
      { path: "transfer", element: <Transfer /> },
      { path: "fundhistory", element: <FundHistory /> },
      { path: "payouthistory", element: <PayoutHistory /> },
      { path: "referalbonus", element: <ReferalBonus /> },
      { path: "payout", element: <Payout /> },
      { path: "referal", element: <ReferralLink /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<UserProvider>
  <RouterProvider router={router} />
</UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  

  //   <RouterProvider router={router} /> 
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
