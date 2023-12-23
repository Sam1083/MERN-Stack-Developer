import React,{useState} from 'react'
import { toast } from 'react-toastify'


const Counter = () => {
const [counter,setCounter]= useState(0)

const add=()=>{
if (counter<10){
    setCounter(counter+1)
}
else{

    toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
}

const sub=()=>{

    if(counter>0){
        setCounter(counter-1)
    }
}


  return (
    <div className='d-flex justify-content-center align-items-center'>
<button onClick={sub} className='btn btn-primary'>-</button>
<h1>{counter}</h1>
<button onClick={add} className='btn btn-danger'>+</button>


    </div>
  )
}

export default Counter