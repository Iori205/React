// "use client"
// import { useState } from "react";
// import { Button } from "@/components";

// const Todo = () => {
//   const [tasks, setTasks] = useState([]);   // Таскууд хадгалах
//   const [text, setText] = useState("");     // Input доторх утга

//   const handleAdd = () => {
//     if (!text.trim()) return;              // хоосон үед нэмэхгүй
//     setTasks([...tasks, text.trim()]);     // шинэ task нэмэх
//     setText("");                           // input-оо цэвэрлэх
//   };

//   return (
//     <div className="bg-[#F3F4F6] w-full h-screen flex justify-center pt-15">
//       <div className="py-6 px-4 w-[377px] h-fit gap-10 flex flex-col justify-center items-center">
//         <div className="flex flex-col gap-5">
//           <p className="text-black text-center text-xl font-semibold leading-7">
//             To-Do List
//           </p>
//           <div className="flex gap-1.5">
//             <input
//               className="w-[280px] h-10 py-2 px-4 rounded-md border border-[#E4E4E4] text-sm"
//               type="text"
//               placeholder="Add a new task..."
//               value={text}
//               onChange={(e) => setText(e.target.value)} // бичих болгонд state-д хадгална
//               onKeyDown={(e) => e.key === "Enter" && handleAdd()} // Enter дарвал нэмэх
//             />
//             <Button onClick={handleAdd}>Add</Button>
//           </div>
//           <div className="pb-[9px] flex gap-[6px]">
//             <Button>All</Button>
//             <Button>Active</Button>
//             <Button>Completed</Button>
//           </div>
//         </div>

//         {/* Таскуудын жагсаалт */}
//         {tasks.length === 0 ? (
//           <p className="text-[#6B7280] font-normal text-center font-sm pb-[22px]">
//             No tasks yet. Add one above.
//           </p>
//         ) : (
//           <ul className="text-black">
//             {tasks.map((task, idx) => (
//               <li key={idx}>{task}</li>
//             ))}
//           </ul>
//         )}

//         <div className="flex justify-center gap-[4px]">
//           <p className="text-[#6B7280] font-normal font-xs">Powered by</p>
//           <a className="text-[#3B7BED] font-normal font-xs">Pinecone academy</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0)
// const handleOnClick = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <button onClick={handleOnClick}>Increment</button>
//       <p>Count: {count}</p>
//     </div>
//   );

// import React, { useState } from "react";

// function InputField() {
//   const [value, setValue] = useState("");

//   function handleChange(event) {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <p>Input text: {value}</p>
//     </div>
//   );
// }

// export default InputField;

// import React, { useState } from "react";

// function ToggleVisibility() {
//   const [visible, setVisible] = useState(true);

//   function handle() {
//     setVisible(!visible);
//   }

//   return (
//     <div>
//       <button onClick={handle}>Show/Hide Text</button>
//       {visible && <p>Toggle me!</p>}
//     </div>
//   );
// }

// export default ToggleVisibility;

// import { useState } from "react";

// function CharacterCounter() {
//   const [text, setText] = useState("");
//   const handle = (event) => {
//     setText(event.target.value);
//   };
//   return (
//     <div>
//       <textarea onChange={handle} value={text} />
//       <p>Character count: {text.length}</p>
//     </div>
//   );
// }

// export default CharacterCounter;
"use client";

import { useState } from "react";

const MediumTodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          value={inputValue}
          onChange={handleOnChange}
          type="text"
          placeholder="type ...."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MediumTodoList;
