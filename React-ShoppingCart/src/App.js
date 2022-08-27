import React from 'react'
import Header from './components/Header';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/cart' element={<Cart />} exact/>
      </Routes>
    </Router>
  )
}
export default App;
