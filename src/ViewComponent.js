import React from "react";
import { IoIosAddCircle,IoIosRemoveCircle} from "react-icons/io";
import { MdDelete } from "react-icons/md";

function ViewComponent({
  currentValue,
  subtractHandlerChild,
  addHandlerChild,
  removeHandlerChild,
}) {
  return (
    <div className="container">
      <div className="action">
        <button  onClick={subtractHandlerChild}><IoIosRemoveCircle size={24} /></button>
        <p style={{margin:"10px", width:"55px"}}>{currentValue}</p>
        <button onClick={addHandlerChild}><IoIosAddCircle size={24} /></button>
      </div>
      <div>
        <button className="remove" onClick={removeHandlerChild}><MdDelete size={32}/></button>
      </div>
    </div>
  );
}
export default ViewComponent;
