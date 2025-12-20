import { useState } from "react";

function Dashboard() {
  const [userType, setUserType] = useState(null);

  function getUserType() {
    const user = sessionStorage.getItem("_es_user");
    if(user){
      setUserType(JSON.parse(user).role);
    }

    return userType;
  }

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  )
}

export default Dashboard;