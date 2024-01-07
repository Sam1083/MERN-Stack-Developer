import axios from 'axios'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const login = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
const {email,password}=formData
  const onChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
  }
  const navigate=useNavigate();

  const onSubmit=async(e)=>{
    e.preventDefault();
    const response=await axios.post("http://localhost:8000/api/user/login",formData)
    if(response.data.success===true){
      toast.success(response.data.message)
navigate("/dashboard")
    }
    else{
      toast.warning(response.data.message)
    }

  }

  return (
    <form className=' d-flex justify-content-center flex-column align-items-center' onSubmit={onSubmit}>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" name='email' value={email} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Password</label>
    <input type="password" name='password' value={password} class="form-control" id="exampleFormControlInput1" placeholder="password" onChange={onChange}/>
  </div>
  Dont Have a account Click to Register?<Link to="/register">Register</Link>
  <button className='btn btn-primary'>Login</button>
  
  </form>
  )
}

export default login