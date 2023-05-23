import React from "react";

export const Navbar = () => {
     return (
          <div className="flex w-full p-5 bg-orange-100">
               <div className="flex justify-center w-1/3 space-x-8">
                    <button>OUR MENU</button>
                    <button>OUR MISSION</button>
                    <button>OUTPOST</button>
                    <button>CATERING</button>
                    <button>LOCATIONS</button>
               </div>
               <div className="flex justify-center w-1/3">
                    <button>mambojus</button>
               </div>
               <div className="flex justify-center w-1/3 space-x-8">
                    <button className="w-20">SIGN IN</button>
                    <button className="bg-orange-400 rounded-2xl w-20">
                         ORDER
                    </button>
               </div>
          </div>
     );
};
