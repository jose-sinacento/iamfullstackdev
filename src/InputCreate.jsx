import { useState, useEffect } from "react";

const InputCreate = () => {
const [newTask, setNewTask] = useState('');




useEffect(() => {
console.log("hola mundo")

}, [handlesubmit]);

   const handlesubmit = (e)  => {
    console.log("probando handlesubmit")
    e.preventDefault();
   }

  return (
    <>
      <form onSubmit={handlesubmit} >
        <label>
            Añade una tarea:
          <input type="text" name="taskName" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </label>
        <input type="submit" value="Create" />
      </form>
    </>
  )
}

export default InputCreate; 