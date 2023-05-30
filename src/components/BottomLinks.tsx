import React, {useState} from "react";
import {useSpring, animated} from "react-spring";

const BottomLinks = () => {
     const [key, setKey] = useState(1);

     const scrolling = useSpring({
          config: {duration: 100000},
          from: {transform: "translate(100%, 0)"},
          to: {transform: "translate(-1000%, 0)"},
          reset: true,
          onRest: () => {
               setKey(key + 1);
          },
     });

     const scrollText = () => {
          let arr = [];
          const text = `New Menu Drop--Watermelon, Pineapple, Red Grapes, Strawberries, Kiwi, Ground Nutmeg`;

          for (let i = 0; i < 100; i++) {
               arr.push(text);
          }

          let finalArr = arr.map((item, i) => {
               return (
                    <div className="flex">
                         <div>{item}</div>
                         <div className="text-orange-100">AAAAAAAAAAAAAA</div>
                    </div>
               );
          });

          return finalArr;
     };

     const linksCol = (array: any) => {
          const mappedArray = array.map((item: any, i: number) => {
               return (
                    <div>
                         <button className="hover:underline">{item}</button>
                    </div>
               );
          });

          return mappedArray;
     };

     const col1 = ["Investor Relations", "Locations", "Press", "mambojus app", "Covid-19 safety"];
     const col2 = ["Instagram", "Twitter", "TikTok", "Spotify", "Facebook"];
     const col3 = ["Contact Us", "FAQs", "Gift Cards", "Store"];
     const col4 = [
          "Privacy Policy",
          "Terms + Conditions",
          "Do Not Sell My Personal",
          "Information",
          "Diversity, Equity + Inclusion",
          "Fringe Benefits Claims MRFs",
     ];

     return (
          <>
               <div className="flex flex-col justify-center bg-orange-100 h-[350px]">
                    <div
                         className="overflow-hidden h-[100px] font-space text-5xl whitespace-nowrap flex flex-col justify-center"
                         key={key}
                    >
                         <animated.div style={scrolling} className="flex">
                              {scrollText()}
                         </animated.div>
                    </div>
                    <div className="flex justify-center h-[200px]">
                         <div className="flex justify-between w-[1600px] font-comfortaa">
                              <div className="flex flex-col w-[250px] text-sm">
                                   <div className="text-lg pb-[10px]">ABOUT US</div>
                                   {linksCol(col1)}
                              </div>
                              <div className="flex flex-col w-[250px] text-sm">
                                   <div className="text-lg pb-[10px]">SOCIAL MEDIA</div>
                                   {linksCol(col2)}
                              </div>
                              <div className="flex flex-col w-[250px] text-sm">
                                   <div className="text-lg pb-[10px]">SUPPORT + SERVICES</div>
                                   {linksCol(col3)}
                              </div>
                              <div className="flex flex-col w-[250px] text-sm">
                                   <div className="text-lg pb-[10px]">TERMS + CONDITIONS</div>
                                   {linksCol(col4)}
                              </div>
                              <div className="w-[250px]"></div>
                              <div className="flex flex-col w-[250px]">
                                   <div className="text-lg pb-[10px]">2023 mambojus</div>
                              </div>
                         </div>
                    </div>
                    <div className="h-[50px]"></div>
               </div>
          </>
     );
};

export default BottomLinks;
