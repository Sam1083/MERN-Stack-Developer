import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
// import Carousel from './components/Carousel';


import { Routes,Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Counter from './components/Counter';
import ContactUslist from './components/ContactUslist';
import ProductDescription from './components/ProductDescription';
import Register from './components/Register';
import Dashboard from './components/Dashboard';




function App() {
 
  return (  
    <>
    <Navbar/>
 
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Products/:id" element={<ProductDescription/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>  
      <Route path="/register" element={<Register/>}></Route>  
      <Route path="/contactus" element={<ContactUslist/>}></Route>  
      <Route path="/dashboard" element={<Dashboard/>}></Route>  

    </Routes>
    
    <ToastContainer/>
    </>

  );
}

export default App;
