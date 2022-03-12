import React,{useState,useEffect} from 'react'

function TodoHooks(){


    const [array, setArray] = useState([])
    const [value,setValue] = useState('')

    // Handle change function
    const handleChange = (e) =>{

        setValue(e.target.value)

    }
    console.log(value);

    // Handle click function
    const handleClick =()=>{

        setArray([...array,value])
        setValue("")
    }
    console.log(array, "arraydata");

    // // Creating the delete function
    const handleDelete =(index) =>{

                    var newArray = array
                     newArray.splice(index,1)

                    // const item = array.splice(index,1)
                        // console.log(item);
              setArray(newArray)
    }


    // useEffect(() => {
                
        
    // }, [array])


    // Creating a function to loop throgh all buttons
    let resp = array.map((item,i)=>{
        return(
            <div>
                <span>
                {item}    
                </span>
                <button>Shift Up</button>
                <button>Shift Down</button>
                <button onClick={()=>{handleDelete(i)}}>Delete</button>
                <button>Update</button>
            </div>
        )
    })


    return(
        <div>

            Hello Todo
            <input value={value} type="text" onChange={handleChange}/>            
            <button type="submit" onClick={handleClick}>Add Task</button>
            {resp}
        </div>
    )
}

export default TodoHooks