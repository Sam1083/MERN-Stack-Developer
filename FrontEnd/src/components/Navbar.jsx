import React from 'react'
import { Link } from 'react-router-dom'
 

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">store</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">product</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact us</Link>
            </li><li class="nav-item">
              <Link class="nav-link" to="/about">about</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contactus">Contact US Listing</Link>
            </li>
            
          </ul>
          <form class="d-flex" role="search">
            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <button class="btn btn-outline-success" type="submit">cart</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar