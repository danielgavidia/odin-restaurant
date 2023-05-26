import React from "react";
import joinPhone from "./images/joinPhone.png";
import joinPhone2 from "./images/joinPhone2.avif";

const Join = () => {
     return (
          <>
               <div className="flex w-full h-[calc(60vh-70px)] border-t-2 border-black">
                    <div className="flex w-1/2 justify-end border-r-2 border-black">
                         <div className="flex flex-col w-[800px]">
                              <div className="font-comfortaa pt-[60px]">JOIN OUR NEWSLETTER</div>
                              <div className="font-comfortaa text-3xl pt-[20px] w-[750px]">
                                   Sign up for exclusive promos, new menu drops, store openings, and more.
                              </div>
                              <div className="pt-[20px]">
                                   <form action="">
                                        <input
                                             type="text"
                                             className="border-2 border-black rounded-[10px] w-[650px] h-[50px] font-comfortaa pl-[10px]"
                                             placeholder="Email address"
                                        />
                                   </form>
                              </div>
                         </div>
                    </div>
                    <div className="w-1/2 flex">
                         <div className="flex w-1/2 justify-start">
                              <div className="flex flex-col w-[800px] pl-[50px]">
                                   <div className="font-comfortaa pt-[60px]">DOWNLOAD THE APP</div>
                                   <div className="font-comfortaa text-xl pt-[10px]">
                                        <button className="underline">iOS</button>
                                   </div>
                                   <div className="font-comfortaa text-xl pt-[10px]">
                                        <button className="underline">Android</button>
                                   </div>
                              </div>
                         </div>
                         <div className="flex flex-col justify-center w-1/2 bg-white">
                              <img src={joinPhone2} alt="" />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Join;
