import "./App.css";
import ViewComponent from "./ViewComponent";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

const idCreation = () => {
  return new Date().getTime();
};

function App() {
  const [getData, setData] = useState([{ id: idCreation(), value: 0 }]);
  // const [inputText, setInputText] = useState(0);

  const addPageHandler = () => {
    const newData = [...getData, { id: idCreation(), value: 0 }];
    setData(newData);
  };
  const subtractHandler = (valueObject) => {
    const clonned = [...getData];
    const currentIndex = clonned.indexOf(valueObject);
    if (clonned[currentIndex].value > 0) {
      const newValueclonned = {
        ...clonned[currentIndex],
        value: clonned[currentIndex].value - 1,
      };
      clonned[currentIndex] = newValueclonned;
      setData(clonned);
    }
  };

  const addHandler = (currentObject) => {
    const clonned = [...getData];
    const currentIndex = getData.indexOf(currentObject);
    const newValueclonned = {
      ...clonned[currentIndex],
      value: clonned[currentIndex].value + 1,
    };
    clonned[currentIndex] = newValueclonned;
    setData(clonned);
  };
  const removePageHandler = (id) => {
    const dataClonned = [...getData];
    const updateData = dataClonned.filter((value) => value.id !== id);
    setData(updateData);
  };
  // const handleChange = (e) => {
  //   const numberConverted = Number(e.target.value);
  //   setInputText(numberConverted);
  // };

  return (
    <div className="App">
      <div className="AddPage">
        <button className="additem" onClick={addPageHandler}>
          <BiAddToQueue size={36} />
        </button>
      </div>
      {/* <input
        style={{ margin: "5px" }}
        type="number"
        onChange={handleChange}
        value={inputText}
        name={"user"}
      /> */}
      {/* <p>Your Input: {inputText}</p> */}
      {getData.map((value) => (
        <ViewComponent
          key={value.id}
          subtractHandlerChild={() => subtractHandler(value)}
          currentValue={value.value}
          addHandlerChild={() => addHandler(value)}
          removeHandlerChild={() => removePageHandler(value.id)}
          
        />
      ))}
    </div>
  );
}

export default App;
