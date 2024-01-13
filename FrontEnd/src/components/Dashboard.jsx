import React,{useEffect,useState} from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user,setUser]=useState(null)
  const token=localStorage.getItem("token")
  const navigate=useNavigate();
  const decoded = jwtDecode(token);
const fetchUser=async()=>{
const response=await axios.get(`http://localhost:8000/api/user/${decoded._id}`)
setUser(response.data.user)
}
const logout=()=>{
  localStorage.removeItem("token")
  navigate("/login")
}

  useEffect(()=>{
    fetchUser();
  },[])
  
  return (
    <div>
      <button onClick={()=>logout()} className='btn btn-danger'>Logout</button>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
    </div>
  )
}

export default Dashboard
