import Login from "../../features/auth/Login";
import authService from "../../services/auth_service";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ role }) => {
  const authStore = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = (e, data) => {
    e.preventDefault();
    authService.login(role, data).then((response) => {
      const jsonData = response.data;
      if (jsonData.token) {
        const user = {
          token: jsonData.token,
          role: role,
          email: data.email
        }
        authStore.login(user);
        navigate("/dashboard");
      }
    }).catch((error) => {
      if(error.response){
        console.log(error.response.data);
      }else{
        console.log(error.message);
      }
    })
  }

  return (
    <Login role={role} onSubmitHandler={(e, data) => handleLogin(e, data)} />
  )
}

export default LoginPage;
