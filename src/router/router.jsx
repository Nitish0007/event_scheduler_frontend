import { createBrowserRouter, Navigate } from "react-router-dom";
// import Login from "../features/auth/Login/Login";
// import Signup from "../features/auth/Signup/Signup";
import Dashboard from "../features/dashboard/Dashboard";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Page not found!</div>,
  },
  {
    path: "/customer/login",
    element: <LoginPage role="customer"/>,
  },
  {
    path: "/customer/signup",
    element: <SignupPage role="customer" />,
  },
  {
    path: "/host/login",
    element: <LoginPage role="host" />,
  },
  {
    path: "/host/signup",
    element: <SignupPage role="host" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  // Catch-all redirect
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

export default router;
