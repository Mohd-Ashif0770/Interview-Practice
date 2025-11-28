import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Register = () => {
    const [formData, setFormData]= useState({
        name:"",
        email:"",
        password:"",
    })
    const [message, setMessage]= useState("")

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();        
        try{
            // const res= await fetch("http://localhost:5000/auth/register", {
            //     method:"POST",
            //     headers:{
            //         "Content-Type" :"application/josn"
            //     },
            //     body: JSON.stringify(FormData)
            // })
            // const data= await res.json();

            const res= await axios.post("http://localhost:5000/auth/register", formData)            

            if(res.ok){
                setMessage("Registration Successfull!");
                setFormData({
                    name:"",
                    email:"",
                    password:""
                });
            }else{
                setMessage("Registration failed");
            }

        }catch(err){
            console.log("Server Error : ", err.message);
        }
    }

  return (
    <>
     <h2>Register Form</h2>
     <form onSubmit={handleSubmit} className='needs-validation' noValidate>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" name='name' value={formData.name} onChange={handleChange} required/>
           <div className="invalid-feedback">
             Please enter a username
          </div>
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" name='email' value={formData.email} onChange={handleChange} required />
          <div className="invalid-feedback">
             Please enter a valid email
          </div>
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password" name='password' value={formData.password} onChange={handleChange} required/>
          <div className="invalid-feedback">
             Please enter a strong passowrd
          </div>
        </div>
        <button type='submit'>Register</button>
     </form>
    </>
  )
}
