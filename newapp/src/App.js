import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Logo from './Components/Logo';
import CreateNewRoomBtn from './Components/CreateNewRoomBtn';
import ChooseNewRoom from './Components/ChooseNewRoom';
import CurrentRoom from './Components/CurrentRoom';



function App() {

  const [data, setData] = useState([{ choosenRoom: 'kitchen', roomName: 'Gilad', color: 'red' }])
<<<<<<< HEAD
  const [currentRoomIndex, setCurrentRoomIndex] = useState('')
=======
  console.log(data);

  // Object All data

  const allData = {
    data: data,
    setData: setData
  }

  //Functions////////////////////////////////

  const addNewRoom = (chooseRoom, name, color) => {
    const findTheSameRoom = data.find((val) => val.roomName === name);

    if (findTheSameRoom) {
      return alert('the room name is exist!')
    }
    else if (!(findTheSameRoom)) {
      let temp = {
        choosenRoom: chooseRoom,
        roomName: name,
        color
      }
      setData([...data, temp])
    }
  }
>>>>>>> 55d1814df265c077c375b36686f66780cb1a2815



  //Functions////////////////////////////////

  const addNewRoom = (chooseRoom, name, color) => {
    const findTheSameRoom = data.find((val) => val.roomName === name);

    if (findTheSameRoom) {
      return alert('the room name is exist!')
    }
    else if (!(findTheSameRoom)) {
      let temp = {
        choosenRoom: chooseRoom,
        roomName: name,
        color
      }
      setData([...data, temp])
    }
  }

  //function move to current room 

  const enterToCurrentRoom = (index) => {
    setCurrentRoomIndex(index)
  }

  // Object All data

  const allData = {
    data: data,
    setData: setData,
    currentRoomIndex: currentRoomIndex,
    setCurrentRoomIndex: setCurrentRoomIndex,

  }

  return (
    <div className="App">
      <Logo />
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<CreateNewRoomBtn allData={allData} enterToCurrentRoom={enterToCurrentRoom} />} />
        <Route path='/ChooseNewRoom' element={<ChooseNewRoom addNewRoom={addNewRoom} />} />
        <Route path='/currentRoom:id' element={<CurrentRoom allData={allData} />} />
=======
        <Route path='/' element={<CreateNewRoomBtn allData={allData} />} />
        <Route path='/ChooseNewRoom' element={<ChooseNewRoom addNewRoom={addNewRoom} />} />
        <Route path='/currentRoom' element={<CurrentRoom />} />
>>>>>>> 55d1814df265c077c375b36686f66780cb1a2815
      </Routes>
    </div>
  );
}

export default App;
