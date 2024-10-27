// src/pages/BinarySearch.js
import React, { useState, useEffect } from 'react';
import './BinarySearch.css';

export default function BinarySearch() {
  const [array] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 45]);
  const [target, setTarget] = useState(7);  // Example target value
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(array.length - 1);
  const [mid, setMid] = useState(null);
  const [running, setRunning] = useState(false);
  const [messages, setMessages] = useState([]);  // List of messages for each step

  // Binary search step logic
  useEffect(() => {
    if (running && left <= right) {
      const interval = setInterval(() => {
        const newMid = Math.floor((left + right) / 2);
        setMid(newMid);

        let newMessage = `Checking element at index ${newMid}: ${array[newMid]}`;

        if (array[newMid] === target) {
          newMessage += ` - Target ${target} found!`;
          setRunning(false);  // Stop if target is found
        } else if (array[newMid] < target) {
          newMessage += ` - Target is greater, moving right and moving midpoint to the right side of the array`;
          setLeft(newMid + 1);
        } else {
          newMessage += ` - Target is smaller,  moving left and moving midpoint to the left side of array`;
          setRight(newMid - 1);
        }

        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }, 9000);  // Adjust interval time for speed of visualization

      return () => clearInterval(interval);  // Clear interval on stop
    }
    if (!running && left > right) {
      setMessages((prevMessages) => [...prevMessages, `Target ${target} not found in array`]);
    }
  }, [running, left, right, target, array]);

  // Start and stop control functions
  const handleRun = () => {
    setLeft(0);
    setRight(array.length - 1);
    setMid(null);
    setMessages(['Starting binary search...']);
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
    setLeft(0);
    setRight(array.length - 1);
    setMid(null);
    setMessages((prevMessages) => [...prevMessages, 'Search stopped.']);
  };

  return (
    <div className="binary-search-container">
      <h2>Binary Search Visualization</h2>
      <h3> Our target is 7</h3>
      <div className="array-container">
        {array.map((num, index) => (
          <div
            key={index}
            className={`array-element ${index === mid ? 'highlight' : ''}`}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handleRun} disabled={running}>Run</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div className="message-log">
        <h3>Steps:</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}





// // src/pages/BinarySearch.js
// import React, { useState, useEffect } from 'react';
// import './BinarySearch.css';

// export default function BinarySearch() {
//   const [array] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 45, 67, 99]);
//   const [target, setTarget] = useState(7);  // Example target value
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(array.length - 1);
//   const [mid, setMid] = useState(null);
//   const [running, setRunning] = useState(false);
//   const [message, setMessage] = useState('');  // Message to show feedback

//   // Binary search step logic
//   useEffect(() => {
//     if (running && left <= right) {
//       const interval = setInterval(() => {
//         const newMid = Math.floor((left + right) / 2);
//         setMid(newMid);

//         if (array[newMid] === target) {
//           setMessage(`Target ${target} found at index ${newMid}`);
//           setRunning(false);  // Stop if target is found
//         } else if (array[newMid] < target) {
//           setMessage(`Target is greater than ${array[newMid]}, searching right`);
//           setLeft(newMid + 1);
//         } else {
//           setMessage(`Target is less than ${array[newMid]}, searching left`);
//           setRight(newMid - 1);
//         }
//       }, 1000);  // Adjust interval time for speed of visualization

//       return () => clearInterval(interval);  // Clear interval on stop
//     }
//     if (!running && left > right) {
//       setMessage(`Target ${target} not found in array`);
//     }
//   }, [running, left, right, target, array]);

//   // Start and stop control functions
//   const handleRun = () => {
//     setLeft(0);
//     setRight(array.length - 1);
//     setMid(null);
//     setMessage('Starting binary search...');
//     setRunning(true);
//   };

//   const handleStop = () => {
//     setRunning(false);
//     setLeft(0);
//     setRight(array.length - 1);
//     setMid(null);
//     setMessage('Search stopped.');
//   };

//   return (
//     <div className="binary-search-container">
//       <h2>Binary Search Visualization</h2>
//       <h3> Target is 7</h3>
//       <div className="array-container">
//         {array.map((num, index) => (
//           <div
//             key={index}
//             className={`array-element ${index === mid ? 'highlight' : ''}`}
//           >
//             {num}
//           </div>
//         ))}
//       </div>
//       <div className="controls">
//         <button onClick={handleRun} disabled={running}>Run</button>
//         <button onClick={handleStop}>Stop</button>
//       </div>
//       <div className="message">
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// }




// // src/pages/BinarySearch.js
// import React, { useState, useEffect } from 'react';
// import './BinarySearch.css';

// export default function BinarySearch() {
//   const [array] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19,21,45,67,99]);
//   const [target, setTarget] = useState(7);  // Example target value
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(array.length - 1);
//   const [mid, setMid] = useState(null);
//   const [running, setRunning] = useState(false);

//   // Binary search step logic
//   useEffect(() => {
//     if (running && left <= right) {
//       const interval = setInterval(() => {
//         const newMid = Math.floor((left + right) / 2);
//         setMid(newMid);

//         if (array[newMid] === target) {
//           setRunning(false);  // Stop if target is found
//         } else if (array[newMid] < target) {
//           setLeft(newMid + 1);
//         } else {
//           setRight(newMid - 1);
//         }
//       }, 1000);  // Adjust interval time for speed of visualization

//       return () => clearInterval(interval);  // Clear interval on stop
//     }
//   }, [running, left, right, target, array]);

//   // Start and stop control functions
//   const handleRun = () => {
//     setLeft(0);
//     setRight(array.length - 1);
//     setMid(null);
//     setRunning(true);
//   };

//   const handleStop = () => {
//     setRunning(false);
//     setLeft(0);
//     setRight(array.length - 1);
//     setMid(null);
//   };

//   return (
//     <div className="binary-search-container">
//       <h2>Binary Search Visualization</h2>
//       <div className="array-container">
//         {array.map((num, index) => (
//           <div
//             key={index}
//             className={`array-element ${index === mid ? 'highlight' : ''}`}
//           >
//             {num}
//           </div>
//         ))}
//       </div>
//       <div className="controls">
//         <button onClick={handleRun} disabled={running}>Run</button>
//         <button onClick={handleStop}>Stop</button>
//       </div>
//     </div>
//   );
// }
