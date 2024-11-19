import "./App.css";
import ViewComponent from "./ViewComponent";
import { useState } from "react";

const idCreation = () => {
  return new Date().getTime();
};

function App() {
  const [getData, setData] = useState([{ id: idCreation(), value: 0 }]);

  const addPageHandler = () => {
    const newData = [...getData, { id: idCreation(), value: 0 }];
    setData(newData);
  };
  const subtractHandler = (currentObject) => {
    const clonned = [...getData];
    const currentIndex = getData.indexOf(currentObject);
    if(clonned[currentIndex].value>0){
      const newValue ={
        ...clonned[currentIndex],
        value: clonned[currentIndex].value-1
      };
      clonned[currentIndex] = newValue;
      setData(clonned);
    };

  const addHandler = (currentObject) => {
    const clonned = [...getData];
    const currentIndex = getData.indexOf(currentObject);
    const newValueclonned = {
      ...clonned[currentIndex],
      value: clonned[currentIndex].value + 1
    };
    clonned[currentIndex] = newValueclonned;
    setData(clonned);
  };
  const removePageHandler = (currentObject) => {
   
    };

 

  return (
    <div className="App">
      <div className="AddPage">
        <button onClick={addPageHandler}>++</button>
      </div>
      {getData.map((value) => (
        <ViewComponent
          key={value.id}
          subtractHandlerChild={() => subtractHandler(value.id)}
          currentValue={value.value}
          addHandlerChild={() => addHandler(value)}
          removeHandlerChild={() => removePageHandler(value.id)}
        />
      ))}
    </div>
  );
}
}

export default App;
