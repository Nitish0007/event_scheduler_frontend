import { useSidebarStore } from "../store/sidebarStore";
import { Link } from "react-router-dom";
import sidebarUtils from "../utils/sidebarUtils";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <>
      {
        isOpen ? (
          <div className="w-[250px] h-full border-r border-gray-200 bg-white fixed top-[70px] left-0 shadow-md">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-2">
                {
                  sidebarUtils.commonSidebarItems.map((item) => (
                    <Link to={item.link} key={item.label} onClick={toggleSidebar} replace
                      className="flex items-center gap-4 p-2 hover:bg-gray-100 hover:text-black rounded-md cursor-pointer text-black font-semibold"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  )
}

export default Sidebar;