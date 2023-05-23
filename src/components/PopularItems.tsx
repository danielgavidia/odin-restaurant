import React from "react";

const PopularItems = () => {
     const orders = [
          {
               photo: "photo",
               title: "LOCO BANANAS",
               description: "Apples, bananas, a treat",
          },
          {
               photo: "photo",
               title: "STRAWBERRY FANTASIA",
               description: "Apples, bananas, a treat",
          },
          {
               photo: "photo",
               title: "MAMBO MANGO",
               description: "Apples, bananas, a treat",
          },
     ];

     return (
          <>
               <div className="p-5">
                    <div className="flex justify-center">
                         <div className="flex justify-center text-4xl w-1/5">
                              <button>Juices</button>
                         </div>
                         <div className="flex justify-center text-4xl w-1/5">
                              <button>Smoothies</button>
                         </div>
                         <div className="flex justify-center text-4xl w-1/5">
                              <button>Fruit Bowls</button>
                         </div>
                    </div>
                    <div className="flex justify-center pt-10">
                         {orders.map((item) => (
                              <div className="flex flex-col border-solid border-2 border-black w-1/4 h-[600px]">
                                   <div className="h-[500px] bg-gray-100">
                                        {item.photo}
                                   </div>
                                   <div className="title">{item.title}</div>
                                   <div className="description">
                                        {item.description}
                                   </div>
                                   <div className="order now">
                                        <button>Order now</button>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </>
     );
};

export default PopularItems;
