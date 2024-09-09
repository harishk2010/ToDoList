
const Task = ({task,index}) => {
  return (
    <div className="w-[340px] h-[50px]  bg-white text-center p-3 flex gap-8 font-bold rounded-full">
        <p className="text-start">{index+1}</p>
        <p className="text-center">{task}</p>
      
    </div>
  )
}

export default Task
