import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function calculater() {

  const [input, setInput] = useState("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <h1 className='text-4xl text-orange-500 uppercase items-center justify-center font-mono mb-4 animate-bounce'> Calculator</h1>
      <div className=' mx-auto items-center justify-center w-[380px] h-[550px] bg-orange-950 rounded-2xl shadow-[0_0_25px_rgba(255,100,0,0.5)] p-4 border border-orange-500'>
        <div className="w-80 text-white bg-orange-950 mb-4 mr-2 mt-5 rounded-2xl shadow-[0_0_25px_rgba(255,100,0,0.5)] p-4 border border-orange-500">{input || "0"}</div>
        <div className='grid grid-cols-4 gap-3 '>
          {buttons.map((val) => (

            <button id='btn'
              key={val}
              onClick={() => handleClick(val)}
              className= { 
                val === "C" ? "clear" :
                  val === "=" ? "equals" :
                    ["+", "-", "*", "/"].includes(val) ? "operator" : ""
              }
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default calculater
