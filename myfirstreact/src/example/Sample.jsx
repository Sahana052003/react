import React from 'react'



const Mango=()=>{
    return(
        <div>Mango is Sweet</div>
    )
}

const Grapes=()=>{
    return(
        <div>Grapes is Green
            <h1>This is Grapes</h1>
        </div>
    )
}
function sample() {
  return (
    <div>sample
         <Mango />
         <Grapes />
    </div>
   
  )
}

export default sample