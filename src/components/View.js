import React, { useState,useEffect } from 'react'
import axios from '../axios';
import {useNavigate} from 'react-router-dom';


const View = () => {
    const[users,setUsers]=useState([{}]);
    
    const navigate=useNavigate();

    useEffect(()=>{
      const  view =async()=>{
        try{
            const result=await axios.get('/api/users');
            const data=result.data.data;
            setUsers(data);
        
            // console.log(users);
            }
            catch(err){
                console.log(err);
            }
        }
        view();
    },[]);

    const deleteUser =async (user)=>{
        try{
       await axios.delete('/api/users',user);    
        }
        catch(err){console.log(err);}
    }
    
  return (
    <div>
        <button onClick={()=>{navigate('/add')}}>AddUser</button>

        <table className='table bordered'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Gender</td>
                    <td>Actions</td>
                </tr>
            </thead>
           { users.map((user,index)=>{
               return(
               <tbody key={index}>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.gender}</td>
                        <td>
                            <button className='btn btn-warning mx-3' onClick={()=>{}}>Edit</button>
                            <button className='btn btn-danger mx-3' onClick={()=>{deleteUser(user)}}>Delete</button>

                        </td>
                    </tr>

                </tbody>)
            })
        }
        </table>
    </div>
  )
}

export default View