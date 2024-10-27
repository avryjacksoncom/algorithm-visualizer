
import React, { useState } from 'react';
import './StackVisualization.css';

export default function StackVisualization() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to push an element onto the stack
  const pushToStack = () => {
    if (inputValue) {
      setStack([...stack, inputValue]);
      setInputValue("");
    }
  };

  // Function to pop an element from the stack
  const popFromStack = () => {
    setStack(stack.slice(0, -1));
  };

  return (
    <div className="container text-center">
      <h1>Stack Visualization</h1>
      <div className="input-section">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter a value"
        />
        <button onClick={pushToStack}>Push</button>
        <button onClick={popFromStack}>Pop</button>
      </div>

      <div className="stack-container">
        {stack.map((item, index) => (
          <div key={index} className="stack-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
