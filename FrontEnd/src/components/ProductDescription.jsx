import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Counter from './Counter'


const ProductDescription = () => {
    const [product,setProduct]=useState(null)
    const params=useParams();

    const fetchData=async()=>{
        const response=await axios.get(`http://localhost:8000/api/product/${params.id}`)
        setProduct(response.data.product)
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col-lg-6">
            <img src={product?.image} height={"300px"} width={"500px"} alt={product?.title}/>
        </div>
        <div className="col-lg-6">
            <h1>{product?.title}</h1>
            <p>{product?.inStock ? <span className='text-success'>In Stock</span> : <span className='text-danger'>Out of Stock</span>}</p>
            <h3>{product?.price}</h3>
            <Counter/>
        </div>

    </div>
    </div>
    </div>
  )
}

export default ProductDescription
