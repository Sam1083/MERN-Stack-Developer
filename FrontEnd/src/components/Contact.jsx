import React,{useState} from 'react'

const contact = () => {






  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-4'>
      <div class="mb-3 w-50">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" />
      </div>
      <div class="mb-3 w-50">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
      </div>
      <div class="mb-3 w-50">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </div>    
  )
}

export default contact