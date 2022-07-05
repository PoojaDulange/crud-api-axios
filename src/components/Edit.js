import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'

const Edit = () => {
    const [user,setUser]=useState({});
    const[newUser,setNewUser]=useState({});
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("user"));
        setUser(data);
    },[])
    const handleChange=(e)=>{
        const{value,name}=e.target;
        setNewUser(()=>{
            return{
            ...newUser,[name]:value
    }});
    }
    const editUser=async()=>{
        try{
        await axios.patch('/api/users',newUser);
        toast("Edited successfully");
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className='container'>
        <form>
        <label htmlFor='id'>Id:</label>
        <input id='id'  type='text' onChange={handleChange}  placeholder={user.id} name='id' required/>
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