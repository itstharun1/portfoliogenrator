import { Component } from "react";

import Login from "./components/loginFolder/login";

import Register from "./components/loginFolder/register";

import { BrowserRouter, Route, Routes } from "react-router-dom"

class App extends Component{
  render(){
    
      return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}></Route>  
         <Route path="/loginPage" element={<Login/>}></Route>
      </Routes> 
    </BrowserRouter>
      )
    
  }
}

export default App