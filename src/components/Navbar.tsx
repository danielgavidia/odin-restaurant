import React from "react";

export const Navbar = () => {
     return (
          <div className="sticky top-0 flex justify-center w-full bg-orange-100 h-[70px]">
               <div className="flex justify-between w-[1600px] pt-[10px] pb-[10px]">
                    <div className="invisible xl:visible flex justify-between w-1/3 space-x-8 font-comfortaa text-sm">
                         <div className="flex flex-col justify-center hover:underline">
                              <button>MENU</button>
                         </div>
                         <div className="flex flex-col justify-center hover:underline">
                              <button>MISSION</button>
                         </div>
                         <div className="flex flex-col justify-center hover:underline">
                              <button>OUTPOST</button>
                         </div>
                         <div className="flex flex-col justify-center hover:underline">
                              <button>CATERING</button>
                         </div>
                         <div className="flex flex-col justify-center hover:underline">
                              <button>LOCATIONS</button>
                         </div>
                    </div>
                    <div className="flex justify-center w-1/3 font-space text-3xl hover:text-orange-900 transition delay-150">
                         <button className="flex flex-col justify-center">mambojus</button>
                    </div>
                    <div className="invisible xl:visible flex justify-end w-1/3 space-x-8 font-comfortaa text-sm">
                         <div className="flex flex-col justify-center w-20 hover:underline">
                              <button>SIGN IN</button>
                         </div>
                         <div
                              className="bg-orange-900 text-white rounded-[30px] w-40
                                        flex flex-col justify-center hover:text-black hover:bg-orange-100 
                                        hover:border-solid hover:border-2 hover:border-black transition delay-50
                                        ease-in-out"
                         >
                              <button>ORDER</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};
