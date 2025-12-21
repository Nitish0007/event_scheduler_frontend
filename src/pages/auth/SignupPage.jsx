import { useNavigate } from "react-router-dom";
import authService from "../../services/auth_service";
import Signup from "../../features/auth/Signup";

const SignupPage = ({ role }) => {
  const navigate = useNavigate();

  const handleSignup = (data) => {
    try {
      const response = authService.signup(data);
      if(response.status === 201){
        navigate("/login");
      }else{
        // needs to be handled by pop-ups
        console.log("signup failed: ", response.data);
      }
    }catch (error) {
      console.log("Error while signing up: ", error);
      throw error;
    }
  }

  return (
    <Signup role={role} onSubmit={handleSignup} />
  )
}

export default SignupPage;