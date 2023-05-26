import React from "react";
import mamboforwork from "./images/mamboforwork.webp";
import mamboforwork2 from "./images/mamboforwork2.jpg";

const MamboForWork = () => {
     return (
          <>
               <div className="flex w-full h-[calc(100vh-70px)]">
                    <div className="flex w-1/2 justify-end">
                         <div className="flex flex-col w-[800px]">
                              <div className="font-comfortaa pt-[60px]">MAMBOJUS FOR WORK</div>
                              <div className="font-space text-6xl pt-[20px]">
                                   All the ways we keep your workplace working
                              </div>
                              <div className="font-comfortaa text-xl pt-[20px] font-bold underline">Catering</div>
                              <div className="font-comfortaa text-xl pt-[5px] w-[600px]">
                                   For the little things and the big milestones alike, we’re here to bring the plant
                                   party
                              </div>
                              <div className="font-comfortaa text-xl pt-[20px] font-bold underline">Outpost</div>
                              <div className="font-comfortaa text-xl pt-[5px] w-[600px]">
                                   A daily batch delivery right to your office to keep your team firing on all cylinders
                              </div>
                              <div className="font-comfortaa text-xl pt-[20px] font-bold underline">Still WFH?</div>
                              <div className="font-comfortaa text-xl pt-[5px] w-[600px]">
                                   Learn about our sweetgreen credits program so your teams can fuel up with subsidized
                                   meals, wherever they are
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col justify-center w-1/2">
                         <img className="p-8 rounded-[100px]" src={mamboforwork2} alt="" />
                    </div>
               </div>
          </>
     );
};

export default MamboForWork;
