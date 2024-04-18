import { useState, useEffect } from "react";

const InputCreate = ({data}) => {
const [newTask, setNewTask] = useState('');
const urlApi = 'http://localhost:3000/create'

useEffect(() => {
console.log("hola mundo")
//console.log(data)
}, []);


   const handlesubmit = (e)  => {
    console.log("probando handlesubmit")
    e.preventDefault();
    

    const fetchCreate = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({title:newTask}), 
      }
    fetch(urlApi, fetchCreate)
    .then(() => {
        console.log('new task added')
    
    })
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