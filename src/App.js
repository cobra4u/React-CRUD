import React from 'react';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Read from './components/Read';
import Update from "./components/Update";




function App(){
  return(
  <div className = "container">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Create />}></Route>
            <Route path="/read" element={<Read />}></Route>
            <Route path="/update" element={<Update />}></Route>
        </Routes>  
    </BrowserRouter>
  </div>
 );
}
 
export default App;
