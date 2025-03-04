import Logoo from "../assets/loaf color.png";
import { Link, useLocation } from "react-router-dom"; 
import useIcons from "../hooks/useIcons";

const Sidebar = () => {
    const { FiHome, FiClipboard, FiClock, FiSettings } = useIcons();
    const location = useLocation(); 

    const SIDEBAR_LINKS = [
        { id: 1, path: "/dashboardCharity", name: "Dashboard", icon: <FiHome /> },
        { id: 2, path: "/dashboardCharity/requests", name: "Requests", icon: <FiClipboard /> },
        { id: 3, path: "/dashboardCharity/history", name: "History", icon: <FiClock /> },
        { id: 4, path: "/dashboardCharity/settings", name: "Settings", icon: <FiSettings /> },
    ];

    return (
        <div className="top-0 left-0 z-10 fixed bg-white px-4 pt-8 border-gray-200 border-r w-[70px] md:w-56 h-screen overflow-auto">
            <div className="flex justify-center items-center mb-8">
                <img src={Logoo} alt="logo" className="hidden md:flex w-20" />
                <img src={Logoo} alt="logo" className="md:hidden w-8" />
            </div>

            {/* Navigation Links */}
            <ul className="space-y-3 mt-6">
                {SIDEBAR_LINKS.map((link) => {
                    const isActive = location.pathname === link.path; // ✅ الآن يعمل بشكل صحيح

                    return (
                        <li
                            key={link.id}
                            className={`hover:bg-gray-100 rounded-md font-medium hover:text-indigo-500 
                ${isActive ? "bg-indigo-500 text-white hover:text-white hover:bg-indigo-500" : ""}`}
                        >
                            <Link to={link.path} className="flex justify-center md:justify-start items-center md:space-x-5 px-5 py-4">
                                <span className={isActive ? "text-white" : ""}>{link.icon}</span>
                                <span className={`hidden md:flex text-gray-500 text-sm ${isActive ? "text-white" : ""}`}>
                                    {link.name}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
