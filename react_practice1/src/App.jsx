import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
const hi=()=>{
     setCount(count+1)
     }
     
     const hello= ()=>{
setCount(count-1)

     }
  return (
   <>
     
      <h1>hi my name is saksham</h1>
      <button onClick={hi} >increase counter: {count}</button>
    <button onClick={hello}>decrese counter:{count}</button>
    {count==0&&<p>the counter is zero!!</p>}
    {count>0&&<p>the counter is positive!!</p>}
    {count<0&&<p>the counter is negative!!</p>}

    </>
  )
}

export default App
