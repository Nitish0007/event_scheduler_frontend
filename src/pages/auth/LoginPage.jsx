import Login from "../../features/auth/Login";
import authService from "../../services/auth_service";
import { useAuthStore } from "../../store/authStore";

const LoginPage = ({ role }) => {
  const authStore = useAuthStore();

  const handleLogin = (data) => {
    try {
      const response = authService.login(data);
      if(response.status === 200){
        authStore.login(response.data);
        navigate("/dashboard");
      }else{
        console.log("Login failed: ", response.data);
      }
    }catch (error) {
      console.log("Error while logging in: ", error);
      throw error;
    }
  }

  return (
    <Login role={role} onSubmit={handleLogin} />
  )
}

export default LoginPage;
