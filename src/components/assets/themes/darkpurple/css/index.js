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
import Dashboard from './components/user/Dashboard';
import './components/assets/themes/darkpurple/css/'
const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/about", element: <About /> },
    { path: "/plan", element: <Plan /> },
    { path: "/blog", element: <Blog /> },
    { path: "/faq", element: <Faq /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path:"/dashboard", element:Dashboard}

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  

//   <React.StrictMode>
//     <RouterProvider router={router} />yyyyyy
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
