import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./features/auth/Login/Login";
import Signup from "./features/auth/Signup/Signup";
import Dashboard from "./features/dashboard/Dashboard";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Page not found!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
