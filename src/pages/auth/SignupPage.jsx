import { useNavigate } from "react-router-dom";
import authService from "../../services/auth_service";
import Signup from "../../features/auth/Signup";

const SignupPage = ({ role }) => {
  const navigate = useNavigate();

  const handleSignup = (e,data) => {
    e.preventDefault();
    authService.signup(role, data).then((response) => {
      navigate(`/${role}/login`);
    }).catch((error) => {
      if(error.response){
        console.log(error.response.data);
      }else{
        console.log(error.message);
      }
    })
  }

  return (
    <Signup role={role} onSubmit={(e,data) => handleSignup(e,data)} />
  )
}

export default SignupPage;