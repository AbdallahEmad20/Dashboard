import { useComponent } from "../hooks/useComponent";

import { Outlet } from "react-router-dom";

const LayoutCharity = () => {
    const { Headder, Sidebar } = useComponent() 
    return (
        <div className="flex h-screen">

            <Sidebar />


            <div className="flex flex-col flex-1 ml-[65px] md:ml-56">
                <Headder />
                <div className="bg-gray-100 p-2 md:p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default LayoutCharity