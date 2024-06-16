import { useState , useCallback,useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState (8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

const passwordRef = useRef(null)

  const pswdGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+="1234567890"
    }

    if(charAllowed){
      str+="!@#$%^&*{}[]`~"
    }
    let char;
    for(let i=1;i<=length;i++){
      char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, 
    [length, numberAllowed, charAllowed, setPassword]
  )

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)

    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() =>{
    pswdGenerator()
  } ,[length, charAllowed, numberAllowed, pswdGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-sm rounded-lg px-4 py-2 my-8 text-orange-600 bg-gray-600'>
        <h1 className='text-white font-semibold text-4xl text-center my-3'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-md overflow-hidden mb-5 '>
          <input
            type="text"
            value={password}
            className='w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref= {passwordRef}
          />
          <button className='bg-blue-600 text-white px-3 py-0.5 shrink-0 ' 
          onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={24}
            value = {length}
            className='cursor-pointer ' 
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
