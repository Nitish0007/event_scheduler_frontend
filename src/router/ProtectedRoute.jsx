import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);
  // If user is not logged in, redirect to login page (or welcome page)
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If user is logged in, allow them to access the route
  return <Outlet />;
};

export default ProtectedRoute;
