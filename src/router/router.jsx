import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";
import App from "../App";

import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import EventShowPage from "../pages/events/EventShowPage";
import EventsIndexPage from "../pages/events/EventsIndexPage";

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
            element: <DashboardPage />,
          },
          {
            path: "/events",
            element: <EventsIndexPage />,
          },
          {
            path: "/events/:id",
            element: <EventShowPage />,
          }
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
