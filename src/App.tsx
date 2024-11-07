import React from 'react';
import { /*Outlet, useParams, Link,*/ BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Principal from './pages/Principal';
import Home from './pages/Home';
import Login from './pages/Login';
import Atendente from './pages/Atendente';


function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={ <Principal />} />
      <Route path="/home" element={ <Home />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/pdv" element={ <Atendente/>} />
     </Routes>     
    </BrowserRouter>


  )
}

export default App

//https://www.flaticon.com/br/icones-gratis/lixeira