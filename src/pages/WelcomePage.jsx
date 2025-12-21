import { Button } from "@mantine/core";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const WelcomePage = () => {
  const [isHost, setIsHost] = useState(false);

  const handleHostChange = () => {
    setIsHost(!isHost);
  }

  const navigate = useNavigate();

  const handleRouting = (action = "login", role = "customer") => {
    navigate(`${role}/${action}`)
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Welcome to Event Scheduler</h1>
        <p className="text-gray-500">Please login to continue as {isHost ? "Event host" : "customer"}</p>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="filled"
          onClick={() => handleRouting("login", isHost ? "host" : "customer")}
        >Login</Button>
      </div>

      <div onClick={handleHostChange}>
        Are you {isHost ? "customer" : "event host"}? 
        <a href="#" className="text-blue-500" onClick={handleHostChange}> Click here</a>
      </div>

      <div>
        Create{isHost ? " host " : " customer "}account   
        <Link to={`/${isHost ? "host" : "customer"}/signup`} className="text-blue-500"> Click here</Link>
      </div>
    </div>
  )
}

export default WelcomePage;