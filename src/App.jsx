import { useState } from "react";
import Task from "./Task";

const App = () => {
  const [currentValue, setcurrentValue] = useState("");
  const [listOfTask, setListOfTask] = useState([]);
  const [exist,SetExist]=useState(false)

  console.log(listOfTask);

  const deleteFunction=(indexoftask)=>{
    const updatedList=listOfTask.filter((_,index)=>{
     return index!==indexoftask
    })
    console.log(updatedList,"asdasdsadasdasd")
    setListOfTask(updatedList)

  }

  const handleEdit=(index,currtask)=>{

    const updatedList=[...listOfTask]
    updatedList[index]=currtask
    console.log(updatedList,"updatedList")
    setListOfTask(updatedList)

  }

  return (
    <div className="bg-blue-200 w-full min-h-screen flex flex-col items-center">
      


      {/* Input and Button Section */}
      <div className="w-[350px] h-[50px] bg-white flex items-center justify-between p-2 rounded-full mt-[20vh]">
        
        <input
          type="text"
          value={currentValue}
          className="bg-red-200 h-8 w-96 m-3 rounded-full text-center font-extrabold"
          onChange={(event) => {
            setcurrentValue(event.target.value);
          }}
        />
        <button
          className="bg-color-black p-2  rounded-full hover:border-black"
          onClick={() => {
            if (listOfTask.includes(currentValue)) {
              SetExist(true)
              setTimeout(()=>SetExist(false),2000)
            } else {
              setListOfTask([...listOfTask, currentValue]);
              setcurrentValue("");
              SetExist(false); 
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 hover:text-red-600">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>


        </button>
      </div>
      {exist && <div className="mt-4"><h4 className="text-red-600 text-lg font-semibold" >Task already exists!!!</h4></div>}

      <div className="w-full mt-6 flex flex-col items-center gap-2">
        {listOfTask.map((task, index) => (
          <Task key={`${index+task}`} tasks={task} index={index} onEdit={handleEdit} onDelete={deleteFunction} />
        ))}
      </div>
    </div>
  );
};
export default App;
