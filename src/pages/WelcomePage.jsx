import { Button } from "@mantine/core";
import { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const WelcomePage = () => {
  const [isHost, setIsHost] = useState(false);
  const loggedInUser = useAuthStore((state) => state.user);

  const handleUserTypeChange = () => {
    setIsHost(!isHost);
  }

  const navigate = useNavigate();

  const handleRouting = (action = "login", role = "customer") => {
    navigate(`${role}/${action}`)
  }

  return (
    <>
      {
        loggedInUser ? (
          <Navigate to="/dashboard" replace />
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Welcome to Event Scheduler</h1>
              <p className="text-gray-500">Please login to continue as {isHost ? "Event organizer" : "customer"}</p>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="filled"
                onClick={() => handleRouting("login", isHost ? "organizer" : "customer")}
              >Login</Button>
            </div>

            <div onClick={handleUserTypeChange}>
              Are you {isHost ? "customer" : "event organizer"}?
              <a href="#" className="text-blue-500" onClick={handleUserTypeChange}> Click here</a>
            </div>

            <div>
              Create{isHost ? " organizer " : " customer "}account
              <Link to={`/${isHost ? "organizer" : "customer"}/signup`} className="text-blue-500"> Click here</Link>
            </div>
          </div>
        )
      }
    </>

  )
}

export default WelcomePage;