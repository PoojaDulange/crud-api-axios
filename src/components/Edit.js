import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({});
    const[newUser,setNewUser]=useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phone:"",
        gender:""
    });
    useEffect(()=>{

        const data=JSON.parse(localStorage.getItem("user"));
        setUser(data);
        newUser.id=data.id;
    },[])
    const handleChange=(e)=>{
        const{value,name}=e.target;
        setNewUser(()=>{
            return{
            ...newUser,[name]:value
    }});
    }
    const editUser=async(e)=>{
        e.preventDefault();
        try{
        console.log(newUser);
        const token=localStorage.getItem("token");
        await axios.patch('/api/users',newUser,{headers:{"Authorization":`bearer ${token}`}});
        toast("Edited successfully");
        navigate('/view')
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className='container'>
        <form>
        <label htmlFor='fname'>FirstName:</label>
        <input id='fname'  type='text' onChange={handleChange}  placeholder={user.firstName} name='firstName' required/>
        <label htmlFor='lname'>LastName:</label>
        <input id='lname' type='text' onChange={handleChange} placeholder={user.lastName} name='lastName'required/>
        <label htmlFor='email'>Email:</label>
        <input id='email' type='text' onChange={handleChange} placeholder={user.email} name='email'required/>
        <label htmlFor='pass'>Password:</label>
        <input id='pass' type='text' onChange={handleChange} placeholder='Enter Password' name='password'required />
        <label htmlFor='phone'>Phone:</label>
        <input id='phone' type='text' onChange={handleChange} placeholder={user.phone} name='phone'required/><br/><br/>
        <label htmlFor='gender'>Gender:</label>
        <input id='gender' type='text' onChange={handleChange} placeholder={user.gender} name='gender'required/><br/><br/>

        <button onClick={editUser}>Submit</button><br/><br/>
        <ToastContainer/>
        </form>
        
    </div>
  )
}

export default Edit