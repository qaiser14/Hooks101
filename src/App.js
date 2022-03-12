import React,{useState} from 'react'
import TodoHooks from './todoHooks'

function App() {

  const [name,setName] = useState("Qaiser")

  const [fName,setFname] = useState("Malik")

  const [count,setCount] = useState(0)

  const  handleChange = ()=>{
      setName("Zohaib")
      setFname("Iqbal")
  }

  const handleCount = () =>{

    setCount(count + 1)
  }

  const handleDecrease = () => {

    setCount(count-1)
  }



  
  return (
    <div>
        hello app
        <br />
    {name}
    <p>{fName}</p>
    <button onClick={handleChange}>Change Name</button>

    <h2>{count}</h2>
    <button onClick={handleCount}>Inc</button>
    <button onClick={handleDecrease}>Dec</button>

    <TodoHooks/>

    </div>
  )
}

export default App


