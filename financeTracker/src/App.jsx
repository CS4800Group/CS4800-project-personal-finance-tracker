import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/signup' element = {<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;