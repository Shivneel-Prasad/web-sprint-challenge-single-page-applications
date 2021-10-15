import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './Components/Homepage';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Homepage />
      </div>
    </BrowserRouter>
  )
};
export default App;
