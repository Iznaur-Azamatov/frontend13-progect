import Buttons from "./Buttons";
import Number from "./Number";
import refresh from "../assets/images/refresh 1.png";
import { useState } from "react";

function Main() {
const [counter, setCounter] = useState(0)

    return(
       <div>
          <div className="container">
            <Number counter={counter}  />
            <Buttons counter={counter} setCounter={setCounter}/>
         </div>
       </div>
       
    );
}
export default Main;