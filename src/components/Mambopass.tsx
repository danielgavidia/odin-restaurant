import React from "react";
import mambopassPhoto from "./images/mambopass.webp";

const Mambopass = () => {
     return (
          <>
               <div className="flex bg-orange-100 w-full h-[calc(100vh-70px)]">
                    <div className="flex w-1/2 justify-end">
                         <div className="flex flex-col w-[800px]">
                              <div className="font-comfortaa pt-[60px]">INSIDE THE APP</div>
                              <div className="font-space text-6xl pt-[20px]">Join Mambopass</div>
                              <div className="font-comfortaa text-xl pt-[20px] w-[600px]">
                                   The mambojuss app for iOS and Android is the #1 most convenient way to get fresh,
                                   craveable, feel-good food on demand. Download the app and order ahead for pickup or
                                   delivery.
                                   <br />
                                   <br />
                                   Unlock a delicious new world of perks when you join our free loyalty program,
                                   Mambopass, and earn rewards, birthday gifts, menu exclusives and more.
                              </div>

                              <div className="font-comfortaa text-xl pt-[60px]">
                                   <button className="underline">Download for iOS</button>
                              </div>

                              <div className="font-comfortaa text-xl pt-[10px]">
                                   <button className="underline">Download for Android</button>
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 bg-orange-100">
                         <img className="p-8 rounded-[100px]" src={mambopassPhoto} alt="" />
                    </div>
               </div>
          </>
     );
};

export default Mambopass;
