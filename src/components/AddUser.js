import axios from '../axios';
import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddUser.css';
const AddUser = () => {

    const[user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phone:"",
        gender:"",
    });
    const handleChange=(e)=>{
        const{value,name}=e.target;
        setUser(()=>{
            return{
            ...user,[name]:value
            
            }
        });
    }

    const addUser= async ()=>{
        try{
            await axios.post('/api/users',user);
            toast("User added successfully");
        }
        catch(err){console.log(err);}
    }

    
    
  return (
    <div className='container'>
        <form>
        <label htmlFor='fname'>FirstName:</label>
        <input id='fname'  type='text' onChange={handleChange}  placeholder='Enter firstName' name='firstName' required/>
        <label htmlFor='lname'>LastName:</label>
        <input id='lname' type='text' onChange={handleChange} placeholder='Enter lastName' name='lastName'required/>
        <label htmlFor='email'>Email:</label>
        <input id='email' type='text' onChange={handleChange} placeholder='Enter email' name='email'required/>
        <label htmlFor='pass'>Password:</label>
        <input id='pass' type='text' onChange={handleChange} placeholder='Enter password' name='password'required />
        <label htmlFor='phone'>Phone:</label>
        <input id='phone' type='text' onChange={handleChange} placeholder='Enter phone' name='phone'required/><br/><br/>

        <strong>male <input className='mx-3'  type='radio' onChange={handleChange} value='male' name='gender'/></strong>
        <strong>female <input className='mx-3'  type='radio' onChange={handleChange} value='female' name='gender'/></strong><br/><br/>

        <button onClick={addUser}>Submit</button><br/><br/>
        <ToastContainer/>
        </form>
        
    </div>
  )
}

export default AddUser