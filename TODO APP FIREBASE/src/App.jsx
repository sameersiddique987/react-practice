import React, { useRef, useState } from 'react'
import Card from './Component/Card'
function App() {
  

  const [Add , SetAdd] = useState([])
  const [ descrip , SetDescrip ] = useState([])
  const [per , SetPer] = useState([])
  const todoval = useRef()
const des = useRef()
const price = useRef()
  const addTodo = (event ) => {
  event.preventDefault()
  Add.push(todoval.current.value );
  descrip.push(des.current.value);
  per.push(price.current.value);
  
  SetAdd([...Add]) 
  SetDescrip([...descrip]) 
  SetPer([...per]) 
    todoval.current.value=""
    des.current.value="" 
    price.current.value=""    
  }



  return (
    <div >
    <div className='text-center font-medium text-5xl p-5 '>
      <h1>TODO APP</h1>
    </div>
      <form onSubmit={addTodo} >
        
<div className="flex items-center max-w-sm mx-auto pb-5">  
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        
        <input ref={todoval} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Inter Your Product Name..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white  bg-purple-700 hover:bg-purple-800 rounded-lg border  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</div>
        
<div className="flex items-center max-w-sm mx-auto pb-5">  
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        
        <input ref={des} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Inter Your Description..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white  bg-purple-700 hover:bg-purple-800 rounded-lg border  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</div>
        
<div className="flex items-center max-w-sm mx-auto pb-5">  
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        
        <input ref={price} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Inter Your Price..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white rounded-lg  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</div>
<div className=' text-center '>
<button type="Submit" className="  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
    </div>  
      </form>
      <div className='justify-center flex text-center '>
        <div >
      {
       
        Add.length > 0 ? Add.map((index) =>{
          return <div key={index} className='mb-4'>
<Card title={Add} description={descrip} price={per}/>

          </div>
          }) : <h1>NOT FOUND</h1>
}
</div>
    </div>
    </div>
  )
}

export default App