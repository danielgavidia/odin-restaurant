import React, {useState} from "react";
import {useTransition, animated} from "react-spring";
import popularBowlBerry from "./images/popularBowlBerry.jpg";
import popularBowlJungle from "./images/popularBowlJungle.jpg";
import popularBowlOatmeal from "./images/popularBowlOatmeal.jpg";
import popularJuiceMango from "./images/popularJuiceMango.jpg";
import popularJuiceOrange from "./images/popularJuiceOrange.jpg";
import popularJuicePapaya from "./images/popularJuicePapaya.jpg";
import popularSmoothieBananas from "./images/popularSmoothieBananas.jpg";
import popularSmoothieBlueberry from "./images/popularSmoothieBlueberry.webp";
import popularSmoothieStrawberry from "./images/popularSmoothieStrawberry.webp";

const popularJuices = [
     {
          photo: popularJuicePapaya,
          title: "PLAYA PAPAYA",
          description: "Papaya, pineapple, orange, lemon juice, honey, black pepper powder, salt",
     },
     {
          photo: popularJuiceMango,
          title: "MAMBO MANGO",
          description: "Mango, lime juice splash, rosewater, chia seeds, mint leaves, cardamom powder, ginger powder",
     },
     {
          photo: popularJuiceOrange,
          title: "ORANGE P. FRESH",
          description: "Orange, pineapple, honey, mint leaves, lemon juice, salt",
     },
];

const popularSmoothies = [
     {
          photo: popularSmoothieBananas,
          title: "LOCO BANANAS",
          description:
               "Bananas, Greek yogurt, almond milk, vanilla, flax seeds, raw old-fashioned oats, peanut butter spoonful, pure maple syrup, cinnamon",
     },
     {
          photo: popularSmoothieStrawberry,
          title: "STRAWBERRY FANTASIA",
          description:
               "Strawberries, skim milk, plain yogurt, vanilla extract, orange juice, ground flax seeds, wheat germ, baby spinach",
     },
     {
          photo: popularSmoothieBlueberry,
          title: "BLUEBERRY BOMBSHELL",
          description: "Blueberry, Greek yogurt, reduced-fat milk, vanilla, ground nutmeg, honey",
     },
];

const popularBowls = [
     {
          photo: popularBowlJungle,
          title: "JUNGLE BOWL",
          description:
               "Watermelon, dragon fruit, papaya, mango, pineapple, kiwi, banana, honey, lime zest, lime juice, coconut chips, mint",
     },
     {
          photo: popularBowlOatmeal,
          title: "YOGI OATMEAL",
          description:
               "Old-fashioned oats, mashed banana, satsuma orange, raspberries, kiwi, toasted almonds, chia seeds, maple syrup, vanilla almond milk",
     },
     {
          photo: popularBowlBerry,
          title: "BERRY-BERRY",
          description: "Strawberries, blueberries, blackberries, raspberries, white sugar, mint, spinach",
     },
];

const Popular = () => {
     const [popular, setPopular] = useState(popularJuices);
     const [popularKey, setPopularKey] = useState(0);

     const updatePopular = (array: any, key: number) => {
          setPopular(array);
          setPopularKey(key);
     };

     const transitions = useTransition(popular, {
          config: {duration: 500},
          from: {opacity: 0},
          enter: {opacity: 1},
          leave: {opacity: 1},
          exitBeforeEnter: true,
     });

     const popularTitleFormatSelect =
          "flex flex-col justify-center text-xl lg:text-5xl md:text-3xl w-[270px] text-black p-2";
     const popularTitleFormatUnselect = "flex flex-col justify-center text-xl lg:text-5xl md:text-3xl w-[270px] p-2";

     return (
          <>
               <div className="flex flex-col justify-center p-5 w-full pt-[10px] h-[calc(100vh-70px)]">
                    <div className="flex justify-center font-space text-gray-500">
                         <div className={popularKey === 0 ? popularTitleFormatSelect : popularTitleFormatUnselect}>
                              <button
                                   className="hover:text-black transition delay-50"
                                   onClick={() => updatePopular(popularJuices, 0)}
                              >
                                   Juices
                              </button>
                              <div
                                   className={
                                        popularKey === 0 ? "flex justify-center" : "flex justify-center text-white"
                                   }
                              >
                                   .
                              </div>
                         </div>
                         <div className={popularKey === 1 ? popularTitleFormatSelect : popularTitleFormatUnselect}>
                              <button
                                   className="hover:text-black transition delay-50"
                                   onClick={() => updatePopular(popularSmoothies, 1)}
                              >
                                   Smoothies
                              </button>
                              <div
                                   className={
                                        popularKey === 1 ? "flex justify-center" : "flex justify-center text-white"
                                   }
                              >
                                   .
                              </div>
                         </div>
                         <div className={popularKey === 2 ? popularTitleFormatSelect : popularTitleFormatUnselect}>
                              <button
                                   className="hover:text-black transition delay-50"
                                   onClick={() => updatePopular(popularBowls, 2)}
                              >
                                   Bowls
                              </button>
                              <div
                                   className={
                                        popularKey === 2 ? "flex justify-center" : "flex justify-center text-white"
                                   }
                              >
                                   .
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-center pt-10 w-full">
                         {transitions((style, item) => (
                              <div className="flex flex-col w-[550px] h-[70vh] p-4">
                                   <animated.div style={style} className="flex flex-col h-full">
                                        <div className="flex justify-center h-[450px]">
                                             <img
                                                  src={item.photo}
                                                  className="object-cover w-full h-full rounded-[30px]"
                                                  alt=""
                                             />
                                        </div>
                                        <br />
                                        <div className="font-space text-2xl h-[5%]">{item.title}</div>
                                        <div className="font-comfortaa text-lg h-[15%]">{item.description}</div>
                                        <div className="font-comfortaa">
                                             <button className="hover:underline">Order now</button>
                                        </div>
                                   </animated.div>
                              </div>
                         ))}
                    </div>
               </div>
          </>
     );
};

export default Popular;
