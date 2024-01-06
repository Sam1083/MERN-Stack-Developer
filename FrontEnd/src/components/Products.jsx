import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



const Products = () => {

  const [products,setProducts]=useState([])


  const fetchData=async()=>{
  const response=await fetch("http://localhost:8000/api/product");
  const data=await response.json();
  setProducts(data.products);

  }



useEffect(()=>{
   fetchData();
},[])






  return (
<>

    <div className="d-flex justify-content-center align-items-center container flex-wrap">

{
products.map((item)=>{
return(

  <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <Link to={`/Products/${item._id}`} class="btn btn-primary">{item.price}</Link>
  </div>
</div>
)
})
}   </div>
</>
 )
}

export default Products