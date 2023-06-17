import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Logo from './Components/Logo';
import CreateNewRoomBtn from './Components/CreateNewRoomBtn';
import ChooseNewRoom from './Components/ChooseNewRoom';



function App() {

  const [data, setData] = useState([])



  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route path='/' element={<CreateNewRoomBtn />} />
        <Route path='/ChooseNewRoom' element={<ChooseNewRoom />} />
      </Routes>
    </div>
  );
}

export default App;
