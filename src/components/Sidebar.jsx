import { useSidebarStore } from "../store/sidebarStore";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <>
    {
      isOpen ? (
        <div className="w-[250px] h-full border-r border-gray-200 bg-white fixed top-[70px] left-0 shadow-md">
          this is sidebar
        </div>
      ) : null
    }
    </>
  )
}

export default Sidebar;