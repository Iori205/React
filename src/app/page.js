"use client"
import { useState } from "react";
import { Button } from "@/components";

const Todo = () => {
  const [tasks, setTasks] = useState([]);   // Таскууд хадгалах
  const [text, setText] = useState("");     // Input доторх утга

  const handleAdd = () => {
    if (!text.trim()) return;              // хоосон үед нэмэхгүй
    setTasks([...tasks, text.trim()]);     // шинэ task нэмэх
    setText("");                           // input-оо цэвэрлэх
  };

  return (
    <div className="bg-[#F3F4F6] w-full h-screen flex justify-center pt-15">
      <div className="py-6 px-4 w-[377px] h-fit gap-10 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5">
          <p className="text-black text-center text-xl font-semibold leading-7">
            To-Do List
          </p>
          <div className="flex gap-1.5">
            <input
              className="w-[280px] h-10 py-2 px-4 rounded-md border border-[#E4E4E4] text-sm"
              type="text"
              placeholder="Add a new task..."
              value={text}
              onChange={(e) => setText(e.target.value)} // бичих болгонд state-д хадгална
              onKeyDown={(e) => e.key === "Enter" && handleAdd()} // Enter дарвал нэмэх
            />
            <Button onClick={handleAdd}>Add</Button>
          </div>
          <div className="pb-[9px] flex gap-[6px]">
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </div>
        </div>

        {/* Таскуудын жагсаалт */}
        {tasks.length === 0 ? (
          <p className="text-[#6B7280] font-normal text-center font-sm pb-[22px]">
            No tasks yet. Add one above.
          </p>
        ) : (
          <ul className="text-black">
            {tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        )}

        <div className="flex justify-center gap-[4px]">
          <p className="text-[#6B7280] font-normal font-xs">Powered by</p>
          <a className="text-[#3B7BED] font-normal font-xs">Pinecone academy</a>
        </div>
      </div>
    </div>
  );
};

export default Todo;
