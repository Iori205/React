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

import React, { useState } from "react";

function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  function handle() {
    setVisible(!visible);
  }

  return (
    <div>
      <button onClick={handle}>Show/Hide Text</button>
      {visible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;
