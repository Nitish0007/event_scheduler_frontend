import AdminDashboard from "../features/dashboard/AdminDashboard";
import CustomerDashboard from "../features/dashboard/CustomerDashboard";
import { useAuthStore } from "../store/authStore";

const DashboardPage = () => {
  const userData = useAuthStore((state) => state.user);

  return (
    <>
      {
        userData.role === "organizer" ? <AdminDashboard /> : <CustomerDashboard />
      }
    </>
  )
}

export default DashboardPage;
