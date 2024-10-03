import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetUser from './Pages/GetUser'
import AddUser from './Pages/AddUser'
import UpdateUser from './Pages/UpdateUser'
import Error from './Pages/Error'


export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetUser/>}/>
            <Route path="/add" element={<AddUser/>}/>
            <Route path="/edit/:id" element={<UpdateUser/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App



