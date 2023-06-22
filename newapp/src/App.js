import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Logo from './Components/Logo';
import CreateNewRoomBtn from './Components/CreateNewRoomBtn';
import ChooseNewRoom from './Components/ChooseNewRoom';
import CurrentRoom from './Components/CurrentRoom';



function App() {

  const [data, setData] = useState([{ id: 1, choosenRoom: 'kitchen', roomName: 'Gilad', color: 'red', items: [{ itemName: 'conditioner', itemState: 'false', colorState: 'red' }] }])
  const [currentRoomIndex, setCurrentRoomIndex] = useState('')
  const [cnt, setCnt] = useState(1)

  console.log(data);


  useEffect(() => {
    setCnt(cnt + 1)
  }, [data])

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
        color,
        items: []
      }
      setData([...data, temp])
    }
  }

  //function move to current room 

  const enterToCurrentRoom = (index) => {
    setCurrentRoomIndex(index)
  }

  // function add new item

  const addNewItemToRoom = (item, index) => {
    let temp = {
      itemName: item,
      itemState: 'false',
      colorState: 'red'
    }

    const findRoom = data.find((val, i) => i == index)

    findRoom.items = [...findRoom.items, temp]
    return findRoom
  }

  // console.log(addNewItemToRoom('kumkum', 0));

  // Object All data

  const allData = {
    data: data,
    setData: setData,
    currentRoomIndex: currentRoomIndex,
    setCurrentRoomIndex: setCurrentRoomIndex,
    addNewItemToRoom: addNewItemToRoom
  }

  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route path='/' element={<CreateNewRoomBtn allData={allData} enterToCurrentRoom={enterToCurrentRoom} />} />
        <Route path='/ChooseNewRoom' element={<ChooseNewRoom addNewRoom={addNewRoom} />} />
        <Route path='/currentRoom/:id' element={<CurrentRoom allData={allData} />} />
      </Routes>
    </div>
  );
}

export default App;
