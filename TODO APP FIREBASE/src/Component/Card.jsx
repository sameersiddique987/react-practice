
import React from 'react'

function Card (props) {
  return (
    <div>
        
<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
<p className="font-normal text-gray-700 dark:text-grar-400">{props.description}</p>
<h1>{props.price}</h1>
</a>

    </div>
  )
}

export default Card



