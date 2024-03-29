import axios from 'axios'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



const Register = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
        phone:""
      })
      const {name,email,phone,password,cpassword}=formData;
      const navigate=useNavigate();
      const onChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }
      const onSubmit=async(e)=>{
e.preventDefault();
if(password !== cpassword){
    toast.warning("Password Does not match")
}
else{
const response=await axios.post("http://localhost:8000/api/user",formData)
toast.success(response.data.message);
navigate("/login")
}


      }


  return (
    <div>
        <form className=' d-flex justify-content-center flex-column align-items-center' onSubmit={onSubmit}>
        <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input type="text" name='name' value={name} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange} required/>
  </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" name='email' value={email} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange} required/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Phone</label>
    <input type="text" name='phone' value={phone}  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange} required/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Password</label>
    <input type="password" name='password' value={password} class="form-control" id="exampleFormControlInput1" placeholder="password" onChange={onChange} required/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
    <input type="password" name='cpassword' value={cpassword} class="form-control" id="exampleFormControlInput1" placeholder="Confirm password" onChange={onChange} required/>
  </div>
  Already have a account Click to Login?<Link to="/login">Login</Link>
  <button className='btn btn-primary'>Register</button>
  
  </form>
    </div>
  )
}

export default Register
