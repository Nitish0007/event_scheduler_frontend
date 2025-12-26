import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1 flex bg-gray-50">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
