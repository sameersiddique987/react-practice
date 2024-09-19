import { useRef } from "react"
import { useState } from "react"

const App=()=>{
  const [todo , setTodo]= useState([])
  const todoval = useRef()

  const deleteTodo = (index)=>{
console.log("delete" , index);
todo.splice(index , 1)
setTodo([...todo])
    
  }
  

  const aditTodo = (index)=>{
    console.log("adit" , index);
    const updated = prompt ("Enter your value ")
    todo.splice(index , 1 , updated )
    setTodo([...todo])
      }




  const addtodo = (event)=>{
event.preventDefault()
todo.push(todoval.current.value)
setTodo([...todo])
console.log(todo);
todoval.current.value= ""
  }
  return(
    <>
    <h1 className="pb-3 bg-danger text-light py-3">TODO APP</h1>
    <form onSubmit={addtodo}>
    
{<div class="input-group  py-3 px-3 ">
  
  <input  type="text" class="form-control text-center border border-danger  " placeholder="ENTER YOUR VALUE" aria-label="Username" aria-describedby="basic-addon1" ref={todoval} />
</div>}
    
    
    <button type="submit"  class="btn btn-danger my-4 " >CLICK</button>
    </form>
  
    {
     todo.length > 0 ? todo.map((item , index)=>{
return <div key={index} className="border border-danger mt-3 mx-3 text-center d-flex justify-content-around rounded p-3 mb-2 bg-danger">
 <div> <h1 className="py-2 text-light">{item}</h1></div>
  <div>
  <button  className="btn btn-success m-3  " onClick={()=>deleteTodo(index)}>Delete</button>
  <button className="btn btn-warning m-3 px-3" onClick={()=>aditTodo(index)}>Adit</button>
</div>
  
</div>
      }): <h2 className="pt-3 text-danger">NO TODO FOUND!</h2>
    } 
    
    </>
  )
}
export default App