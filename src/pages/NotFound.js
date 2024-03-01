import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function NotFound() {
  const navigate = useNavigate();
  const toNavigate = ()=>{
    navigate("/");
  }
  useEffect(()=>{
    setTimeout(toNavigate,3000);
  },[navigate]);


  return (
    <div className='bg-light d-flex flex-column justify-content-center align-items-center position-absolute start-0 top-0 w-100 vh-100' style={{ "zIndex":"99999" }}>
        <div className="logoContainer" style={{ "backgroundImage":`url("${logo}")`}}></div>
        <h1 className='text-primary'>Page Not Found !</h1>
    </div>
  )
}

export default NotFound