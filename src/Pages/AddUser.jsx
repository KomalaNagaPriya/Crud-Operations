import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddUser() {
  let navigate=useNavigate();

  let [data,setData]=useState({name:"",username:"",email:""})

  let change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
   }
// create
 let add=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/users",data).then(x=>navigate("/")).catch(()=>console.log("Api Failed"))
 }

  return (
    <div id="maindiv">
    <fieldset >
    <legend><h1>Add User</h1></legend>
    <form>
        
     <input type="text" placeholder='name' name="name" value={data.name}             onChange={change}/><br/>
     <input type="text" placeholder='username' name="username" value={data.username} onChange={change}/><br/>
     <input type="text" placeholder='email' name="email" value={data.email}          onChange={change}/><br/>
     <button onClick={add} className='button'>Add</button>
     
      
    </form>
    </fieldset>
    </div>
  )
}

export default AddUser
