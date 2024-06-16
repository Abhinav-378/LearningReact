import {useState} from "react"


function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-4 py-2 rounded-2xl">
          
          <button
          className="px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button
          className="px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button
          className="px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
