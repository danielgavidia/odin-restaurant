import React from "react";
import {Navbar} from "./components/Navbar";
import PopularItems from "./components/PopularItems";
import Mambopass from "./components/Mambopass";
import MamboForWork from "./components/MamboForWork";
import MamboExclusives from "./components/MamboExclusives";
import TheLatest from "./components/TheLatest";
import InTheLab from "./components/InTheLab";
import BottomLinks from "./components/BottomLinks";
import Join from "./components/Join";

function App() {
     return (
          <>
               <div className="flex flex-col">
                    <Navbar />
                    <PopularItems />
                    <Mambopass />
                    <MamboForWork />
                    <TheLatest />
                    <MamboExclusives />
                    <InTheLab />
                    <Join />
                    <BottomLinks />
               </div>
          </>
     );
}

export default App;
