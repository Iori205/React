"use client"
import { Button } from "@/components"
import { useState } from "react"

const Todo = () => {
  const [todos,setTodos] = useState([])
  const [inputvalue, setInputvalue] = useState("")

  const handleOnChange = () => {
    setInputvalue(event.target)
  }

  const handleOnClick = () => {
    const newTodo = [... todos, inputvalue]
    setTodos(newTodo)
    setInputvalue("")
  }

  const handleKeyOwn = () => {
    if (event.key === "Enter") {
      const newTodo = [...todos, inputvalue]
      setTodos(newTodo)
      setInputvalue("")
    }
  }

  return (
    <div className="bg-[#F3F4F6] w-full h-screen flex justify-center pt-15">
      <div className="py-6 px-4 w-[377px] h-fit gap-10 flex flex-col justify-center items-center rounded-md bg-[#FFF] shadow-[0_0_12px_0_rgb(0,0,0,0)]">
        <div className="flex flex-col gap-5">
          <p className="text-black text-center text-xl font-semibold leading-7">To-Do List</p>
          <div className="flex gap-1.5 ">
            <input className="w-[280px] h-10 py-2 px-4 rounded-md border border-[#E4E4E4] text-[#71717A]" type="text" placeholder="Add a new task..." />
            <Button className="w-[59px] h-[40px] border-0 rounded-md bg-[#3C82F6] text-white hover:bg-[#2563EB] transition">Add</Button>
          </div>
          <div className="pb-[9px] flex gap-[6px] font-normal">
            <Button className={"border-0 rounded-md bg-[#3C82F6] w-[38px] h-[32px] text-xs"}>All</Button>
            <Button className={"border-0 rounded-md bg-[#F3F4F6] w-[60px] h-[32px] text-xs text-[#363636]"}>Active</Button>
            <Button className={"border-0 rounded-md bg-[#F3F4F6] w-[87px] h-[32px] text-xs text-[#363636]"}>Completed</Button>
          </div>
          <p className="text-[#6B7280] font-normal text-center font-sm pb-[22px]">No tasks yet. Add one above!</p>
          <div className="flex justify-center gap-[4px]">
            <p className="text-[#6B7280] font-normal font-xs">Powered by</p>
            <a href="#" className="text-[#3B73ED] font-normal font-xs">Pinecone academy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Todo
