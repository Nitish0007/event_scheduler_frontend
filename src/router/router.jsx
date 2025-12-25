import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";
import App from "../App";

import Dashboard from "../features/dashboard/Dashboard";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";

const router = createBrowserRouter([
  // public routes
  {
    path: "/",
    element: <App />,
    errorElement: <div>Page not found!</div>,
  },
  {
    path: "/customer/login",
    element: <LoginPage role="customer" />,
  },
  {
    path: "/customer/signup",
    element: <SignupPage role="customer" />,
  },
  {
    path: "/organizer/login",
    element: <LoginPage role="organizer" />,
  },
  {
    path: "/organizer/signup",
    element: <SignupPage role="organizer" />,
  },

  // protected routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />, // Layout applies to all children
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          // Add other protected routes here that need the Navbar
        ]
      }
    ]
  },

  // To catch-all redirect
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

export default router;
