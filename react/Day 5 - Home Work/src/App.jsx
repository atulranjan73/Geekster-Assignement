import React, { useState } from "react";
import "./App.css";
import { dataArray } from "./data";

function App() {
  const [para , setpara] = useState(1);
  const [result , setresult ] = useState([""])

  const handleClick = () => {

  if(para>=dataArray.length){
    alert("Maximum paragraph Enter")
  }else{

    setresult(dataArray.slice( 0 ,para))
  }

  };
  return (
    <div className="container">
      <h1 className="heainding">tired of boring lorem ipsum?</h1>
      <div className="form">
        <span> paragraphs</span>
        <span>
          <input
            onChange={(e) => {
              setpara(e.target.value);
            }}
            type="number"
            value={para}
            min={1} max={10}
          />
        </span>
        <button onClick={handleClick}>Generate</button>
      </div>

      <div className="result">
     {
      result.map((para ,index)=>(
        <p key={index}>.{para} </p>
      ))
     }
      </div>
    </div>
  );
}

export default App;
