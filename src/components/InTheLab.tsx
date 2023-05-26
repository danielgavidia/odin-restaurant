import React from "react";
import smoothieMaking from "./images/smoothieMaking.mp4";

const InTheLab = () => {
     return (
          <>
               <div className="flex bg-orange-100 w-full h-[calc(100vh-70px)]">
                    <div className="flex w-1/2 justify-end">
                         <div className="flex flex-col w-[800px]">
                              <div className="font-comfortaa pt-[60px]">IN THE LAB</div>
                              <div className="font-space text-6xl pt-[20px]">Step inside the mambojus kitchen</div>
                              <div className="font-comfortaa text-3xl pt-[20px] w-[600px] pb-[550px]">
                                   Head over to TikTok for an exclusive tutorial--how to make our famed Loco Bananas
                                   smoothie
                              </div>
                              <div className="font-comfortaa">
                                   <button className="underline">FOLLOW ALONG</button>
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 bg-orange-100">
                         <video
                              src={smoothieMaking}
                              loop
                              playsInline
                              muted
                              autoPlay
                              className="w-full h-full rounded-[100px] p-10"
                         ></video>
                    </div>
               </div>
          </>
     );
};

export default InTheLab;
