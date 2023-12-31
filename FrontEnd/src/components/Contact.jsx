import React,{useState} from 'react'
import axios from "axios"
import {toast} from "react-toastify"


const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })

const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const {name,email,message}=formData;
const onSubmit=async(e)=>{
  e.preventDefault();
  const response=await axios.post("http://localhost:8000/api/contact",formData)
 setFormData({
  name:"",
  email:"",
  message:""
 })
toast.success(response.data.message)

}

  return (
    <form onSubmit={onSubmit}>
    <div className='d-flex justify-content-center align-items-center flex-column mt-4'>
      <div class="mb-3 w-50">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" value={name} id="exampleFormControlInput1" placeholder="name" onChange={onChange} />
      </div>
      <div class="mb-3 w-50">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" name="email" value={email} id="exampleFormControlInput1" placeholder="Email" onChange={onChange} />
      </div>
      <div class="mb-3 w-50">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={message} placeholder="Message" rows="3" onChange={onChange}></textarea>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </div>
    </form>    
  )
}

export default Contact