import React from "react";
import russellBrand from "./images/russellBrand.webp";
import blender from "./images/blender.avif";
import blender2 from "./images/blender2.jpg";
import danielGavidia from "./images/danielGavidia.jpeg";

const news = [
     {
          outlet: "GOOD MORNING AMERICA",
          headline: "Russell Brand joins mambojus as coolest investor.",
          subheader: "Discover what our collab means for the future of juicing...",
          photo: russellBrand,
     },
     {
          outlet: "NEW YORK TIMES",
          headline: "In a sweetgreen world, can mambojus compete?",
          subheader: "Learn how we're using tech to innovate fast-casual smoothies...",
          photo: blender2,
     },
     {
          outlet: "NPR HOW I BUILT THIS",
          headline: "mambojus: Daniel Gavidia",
          subheader: "Dive into this juicy podcast with our visionary founder...",
          photo: danielGavidia,
     },
];

const TheLatest = () => {
     const newsCard = (array: any) => {
          return (
               <div className="flex rounded-[20px] w-[32.5%] h-[200px] bg-white">
                    <button className="flex text-start h-full">
                         <div className="flex flex-col font-comfortaa w-[60%] p-4 h-full">
                              <div className="h-[20%]">{array.outlet}</div>
                              <div className="h-[40%] text-sm font-bold">{array.headline}</div>
                              <div className="h-[30%] text-sm">{array.subheader}</div>
                              <div className="">Read more</div>
                         </div>
                         <div className="flex flex-col justify-center w-[40%] p-3 h-full">
                              <img className="h-full w-full rounded-[20px] object-contain" src={array.photo} alt="" />
                         </div>
                    </button>
               </div>
          );
     };

     return (
          <>
               <div className="flex justify-center h-[400px] bg-orange-100">
                    <div className="flex flex-col w-[1600px] justify-start h-full">
                         <div className="h-[50px]"></div>
                         <div className="flex justify-between font-comfortaa h-[50px]">
                              <div className="text-2xl">THE LATEST</div>
                              <div>
                                   <button className="hover:underline">READ MORE</button>
                              </div>
                         </div>
                         <div className="flex justify-between">
                              {newsCard(news[0])}
                              {newsCard(news[1])}
                              {newsCard(news[2])}
                         </div>
                    </div>
               </div>
          </>
     );
};

export default TheLatest;
