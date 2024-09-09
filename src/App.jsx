import { useState } from "react";
import Task from "./Task";

const App = () => {
  const [currentValue, setcurrentValue] = useState("");
  const [listOfTask, setListOfTask] = useState([]);
  console.log(listOfTask);

  return (
    <div className="bg-blue-200 w-full min-h-screen flex flex-col items-center">
    {/* Input and Button Section */}
    <div className="w-[350px] h-[50px] bg-white flex items-center justify-between p-2 rounded-full mt-[20vh]">
      <input
        type="text"
        value={currentValue}
        className="bg-red-200 h-7 w-96 m-3 rounded-full text-center font-extrabold"
        onChange={(event) => {
          setcurrentValue(event.target.value);
        }}
      />
      <button
        className="bg-white border-red-100 border-8 w-20 rounded-full hover:border-black"
        onClick={() => {
          setListOfTask([...listOfTask, currentValue]);
        }}
      >
        Add
      </button>
    </div>
  
    {/* Task List Section */}
    <div className="w-full mt-6 flex flex-col items-center gap-2">
      {listOfTask.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </div>
  </div>
  

  );
};
export default App;
