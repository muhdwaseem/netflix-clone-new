import React, { useRef, useState } from 'react'
import './register.scss'
import axios from 'axios';
function Register() {
    const [email, setemail] = useState()
const [password, setpassword] = useState()
    const emailref =  useRef();
    const passwordref  = useRef();

const url = "http://localhost:3456/registerpage"
    const handlestart=(e)=>{
        e.preventDefault()
        const userdetails = {email}
        axios.post(url,userdetails).then(res=>res.data).then(data=>console.log(data))
        setemail(emailref.current.value)
    }

    const handlefinish=()=>{
setpassword(passwordref.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" srcset="" />
                <button className='loginbutton'>Sign up</button>
            </div>
        </div>
        <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
              <div className="inputall">
              <input type="text" name="" id="" ref={emailref}  placeholder='email address' />
              <button className='registerbutton' onClick={handlestart}>Get Started </button>
          </div>
        ) : (<form className="inputall">
        <input type="password" name="" id=""  ref={passwordref} placeholder='password' />
        <button className='registerbutton' onClick={handlefinish}>Start </button>
    </form>)}
      
        </div>


    </div>
  )
}

export default Register