import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ContactUslist = () => {
const [contacts,setContacts]=useState([])


const fetchData=async()=>{
    const response=await axios.get("http://localhost:8000/api/contact")
    setContacts(response.data.contacts)
}
useEffect(()=>{
    fetchData();
})


    return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
    {
        contacts.map((item)=>{
            return(
                <tr>
                <th scope="row">{item._id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
              </tr>
            )
        })
    }
   
  </tbody>
</table>
    </div>
  )
}

export default ContactUslist
