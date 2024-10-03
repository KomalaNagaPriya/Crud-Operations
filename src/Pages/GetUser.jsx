import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function GetUser() {

  let[api,setApi]=useState([])
  let[keys,setKeys]=useState([])
  let navigate=useNavigate()

  //Reading 
  useEffect(()=>{
    axios.get("http://localhost:3000/users").then(res=>{
      setApi(res.data)
      setKeys(Object.keys(res.data[0]))
      }).catch(()=>console.log("Api Failed"))
  },[keys])
  
  // Deleting

  let remove=(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`).then(()=>{navigate("/")}).catch(()=>console.log("Api Failed"))
  }
  return (<div id="maindiv">
     <table  id="table">
      <caption>CRUD Operations</caption>
      <thead>
        <tr>
          {keys.slice(0,4).map((x,y)=><th key={y}>{x}</th>)}
          <th>Operations</th>
        </tr>
      </thead>

      <tbody>
        {api.map((x,y)=>{
          return(
            <tr key={y}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.username}</td>
              <td>{x.email}</td>
              <td>

                <Link to={`/edit/${x.id}`}><button>Edit</button></Link>
                <button onClick={()=>{remove(x.id)}} >Remove</button>
              </td>

            </tr>
          )
        })}
      </tbody>
    </table>
    <button id="add" onClick={()=>navigate("/add")}>Add</button>
    </div>
  )
}

export default GetUser

