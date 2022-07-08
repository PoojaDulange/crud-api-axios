import React, { useState } from 'react'
import PropTypes from 'prop-types';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

   
const Login = () => {
    const navigate=useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange=(e)=>{
        // fetch('/api',{headers:{},bo})
        const{value,name}=e.target;
        setData(()=>{
            return{
            ...data,[name]:value
    }});
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try{
        const response =await axios.post('/api/users/login', data, {
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        }});
        console.log(response);
        localStorage.setItem("token",response.data.token);
        navigate("/view");
      }catch(e){
        console.log(e);
      }
}

    
    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" placeholder='Enter Email:' onChange={handleChange} name='email'/>
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' onChange={handleChange} name='password' autoComplete='off'/>
            <button type='submit' className='btn btn-primary' >Login</button>
            </form>
        </div>
    )
}
export default Login