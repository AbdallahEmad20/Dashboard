


import useIcons from "../hooks/useIcons";


export const Headder = () => {
    const { FiSearch, FiBell } = useIcons();

    return (
    

            <header className="flex justify-between items-center bg-white shadow-sm px-6 py-3">
                
                <div>
                 
                    <h1 className="font-semibold text-sm md:text-lg">Organization</h1>
                </div>

            
                <div className="flex items-center gap-5">
                    
                    <div className="hidden sm:flex items-center bg-white shadow-sm px-3 py-2 rounded-md">
                        <FiSearch className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent ml-2 outline-none text-sm"
                        />
                    </div>

                

              <div className="relative">
                  <FiBell className="text-gray-600 text-xl cursor-pointer" />
     <span className="top-[-8px] left-2 absolute flex justify-center items-center bg-red-400 rounded-[50%] w-4 h-4 text-[10px] text-white l-- let-2">3</span>
               </div>
                 
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                        className="border rounded-full w-8 h-8"
                    />
                </div>
            </header>
  )
}
