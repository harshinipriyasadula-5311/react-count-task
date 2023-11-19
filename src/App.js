import React, { useState, useEffect } from "react";
import "./App.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [isDisable, setIsDisable] = useState(false); 

  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      setIsDisable(true); 
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
     } else {
      setIsDisable(false); 
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [startTimer]);
  return (
    <div className="container">
      <div className="time">{time}</div>
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     <button className="start-btn" onClick={() => setStartTimer(true)}
        disabled={isDisable}> Start </button>
      &nbsp;&nbsp; 
      <button className="stop-btn"
        onClick={() => setStartTimer(false)}
        disabled={!isDisable}>Stop </button>
    </div>
  );
};
export default Timer;






















































// import React, { useState } from "react";

// function App() {
//   const [todoItemName, setTodoItemName] = useState("");
//   const [todoItems, setTodoItems] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const inputNameChange = (value) => {
//     setTodoItemName(value);
//   }

//   const addItem = () => {
//     if (editIndex !== null) {
//       // If editIndex is not null, update the existing item
//       const updatedItems = [...todoItems];
//       updatedItems[editIndex] = todoItemName;
//       setTodoItems(updatedItems);
//       setEditIndex(null);
//     } else {
//       // Add a new item to the list
//       setTodoItems([...todoItems, todoItemName]);
//     }
//     setTodoItemName("");
//   }

//   const editItem = (index) => {
//     // Set the editIndex to the index of the item to be edited
//     setEditIndex(index);
//     // Set the todoItemName to the current value of the item
//     setTodoItemName(todoItems[index]);
//   }

//   const deleteItem = (index) => {
//     const updatedItems = [...todoItems];
//     updatedItems.splice(index, 1);
//     setTodoItems(updatedItems);
//   }

//   return (
//     <>
//       <h1>App Component</h1>
//       <input
//         value={todoItemName}
//         placeholder="type item"
//         onChange={(e) => inputNameChange(e.target.value)}
//       />
//       {/* <button onClick={addItem}>{editIndex !== null ? 'Update item' : 'Add item'}</button> */}
//       <button onClick={addItem}>{'Add item'}</button>

//       <ol>
//         {todoItems.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => editItem(index)}>Update Item</button>
//             <button onClick={() => deleteItem(index)}>Delete Item</button>
//           </li>
//         ))}
//       </ol>
//     </>
//   );
// }

// export default App;


















































// // import React, { useState, useEffect } from "react";
// // import "./App.css";

// // const Timer = () => {
// //   const [time, setTime] = useState(0);
// //   const [startTimer, setStartTimer] = useState(false);

// //   useEffect(() => {
// //     let intervalId = null;

// //     if (startTimer) {
// //       intervalId = setInterval(() => {
// //         setTime((prev) => prev + 1);
// //       }, 1000);
// //     } else {
// //       clearInterval(intervalId);
// //     }
// //     return () => clearInterval(intervalId);
// //   }, [startTimer]);
// //   return (
// //     <div className="container">
// //       <div className="time">{time}</div>
// //       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
// //        <button className="start-btn"
// //           onClick={() => setStartTimer(true)}>Start  </button>
          
// //        &nbsp;  &nbsp;
// //         <button className="stop-btn"
// //           onClick={() => setStartTimer(false)}>Stop </button>
// //     </div>
// //   );
// // };
// // export default Timer;


























