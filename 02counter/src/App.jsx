import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCounter] = useState(0)

  const increment = () => {
    setCounter(count+1);

    //OR (but we will have to use let instead of const
    // count = count +1;
    // setCounter(count)  
  }
  const decrement = () => {
    if(count>0){
      setCounter(count-1);
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2> Value of counter is: {count} </h2>
      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>Counter : {count}</p>
    </>
  )
}

export default App
