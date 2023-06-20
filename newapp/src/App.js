import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Logo from './Components/Logo';
import CreateNewRoomBtn from './Components/CreateNewRoomBtn';
import ChooseNewRoom from './Components/ChooseNewRoom';



function App() {

  const [data, setData] = useState([{choosenRoom:'kitchen',roomName:'Gilad',color:'red'}])
  console.log(data);

  //Functions////////////////////////////////

  const addNewRoom = (chooseRoom,name,color)=>{
    const findTheSameRoom = data.find((val)=>val.roomName===name);
    
     if(findTheSameRoom){
      return alert('the room name is exist!')
     }
     else if(!(findTheSameRoom)){
      let temp= {
        choosenRoom:chooseRoom,
        roomName:name,
        color
      }
      setData([...data,temp])
     }
  }

  

  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route path='/' element={<CreateNewRoomBtn />} />
        <Route path='/ChooseNewRoom' element={<ChooseNewRoom addNewRoom={addNewRoom}/>} />
      </Routes>
    </div>
  );
}

export default App;
