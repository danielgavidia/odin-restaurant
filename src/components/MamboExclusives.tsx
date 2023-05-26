import React from "react";
import blueberrySmoothie from "./images/blueberrySmoothie.webp";

const MamboExclusives = () => {
     return (
          <>
               <div className="flex bg-white w-full h-[calc(100vh-70px)]">
                    <div className="flex w-1/2 justify-end">
                         <div className="flex flex-col w-[800px]">
                              <div className="font-comfortaa pt-[60px]">MAMBOJUS EXCLUSIVES</div>
                              <div className="font-space text-6xl pt-[20px]">Dive into the fan favorites</div>
                              <div className="font-comfortaa text-xl pt-[20px] w-[600px]">
                                   Ordered often and always a hit, these popular picks are true mambojus stables.
                              </div>
                              <div className="font-comfortaa text-xl pt-[5px] w-[600px] pb-[500px]">
                                   This collection includes Loco Bananas, Strawberry Fantasia, and Mambo Mango.
                              </div>
                              <div
                                   className="font-comfortaa border-solid border-black border-2 rounded-[30px] w-[250px]
                                        flex justify-center hover:text-white hover:bg-black transition delay-100
                                        ease-in-out h-[50px]"
                              >
                                   <button>ORDER NOW</button>
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 bg-white">
                         <img className="p-20 rounded-[200px] w-full h-full" src={blueberrySmoothie} alt="" />
                    </div>
               </div>
          </>
     );
};

export default MamboExclusives;
