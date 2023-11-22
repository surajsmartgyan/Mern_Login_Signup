import React, { useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
function Signup() {
  const [SignupData,setSignupData] = useState({
    username:'',
    password:''
  });
  const hangleSignupChange = (e)=>{
    const {name,value} = e.target;
    setSignupData((prevData) =>({
      ...prevData,
      [name]:value,
    }))
  }
  const hangleSignup= async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:9000/signup',SignupData)
      console.log(response.data)
    }
    catch(error){
      console.log("Signup Error",error)
    }
    setSignupData({
      username:'',
      password:'',
    })
  }
  return (
    <>
    <h1>This is a Sign up Page </h1>
    <form onSubmit={hangleSignup}>
      <input type='text' name='username' placeholder='Username' value={SignupData.username} onChange={hangleSignupChange} required/>
      <input type='password' name='password' placeholder='Password' value={SignupData.password} onChange={hangleSignupChange} required/>
      <button type='submit'>Signup Now </button>
    </form>
    <p>Already Have An Account ? <Link to="/login">Login Here</Link></p>
    </>
  )
}

export default Signup