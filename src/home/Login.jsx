import React, { useState } from 'react'
import './login.scss'
import axios, {} from 'axios'
function Login() {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const url = 'http://localhost:3456/login'
const handlesubmit=(e)=>{
  e.preventDefault()
 try {
  const config ={
    headers:{
      "Content-type":"application/json"
    },
  } 
  // const userdetails = {email,password}
  axios.post(url,{email,password},config).then(res=>res.data).then(data=>console.log(data))
 } catch (error) {
  
 }
}
  


  
  return (
    <div className='login'>
        
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" srcset="" />
                
            </div>
           
        </div>
        <div className="container">
              <form action="" onClick={handlesubmit}>
                <h1>Sign in</h1>
                <input type="text" name="" id="" value={email} placeholder='Email or Phone Number' onChange={(e)=>setemail(e.target.value)} />
                <input type="password" name="" value={password} id="" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
                <button className='loginbutton' >Sign In</button>
                <span>New to Netflix? <b>Sign up now</b></span>
                <small>
                  This page is protected by google reCAPTCHE to ensure you're not a bot. <b>Lern more</b>
                </small>
              </form>
            </div>


    </div>
  )
}

export default Login