import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function UpdateUser() {
  let navigate=useNavigate();

  let [data,setData]=useState({name:"",username:"",email:""})

  let change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
   }

  let {id}=useParams()
  useEffect(()=>{
    axios.get("http://localhost:3000/users/"+id).then(x=>setData(x.data)).catch(()=>console.log("Api Failed"))
  },[]) 
  
  function update(e){
    e.preventDefault();
    axios.put("http://localhost:3000/users/"+id,data).then(x=>navigate("/")).catch(()=>console.log("Api Failed"))
  }

  return (
    <div id="maindiv">
    <fieldset >
    <legend><h1>Edit User</h1></legend>
    <form>
        
     <input type="text" placeholder='name' name="name" value={data.name}             onChange={change}/><br/>
     <input type="text" placeholder='username' name="username" value={data.username} onChange={change}/><br/>
     <input type="text" placeholder='email' name="email" value={data.email}          onChange={change}/><br/>
     <button onClick={update} className='button'>Edit</button>
     
      
    </form>
    </fieldset>
    </div>
  )
}

export default UpdateUser

