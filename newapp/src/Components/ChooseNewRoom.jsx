import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChooseNewRoom({addNewRoom}) {

    const nav = useNavigate()

    const [chooseNewRoom, setChooseNewRoom] = useState('')
    const[roomName,setRoomName]=useState('')
    const[roomColor,setRoomColor]=useState('')

    return (
        <div>
            <select value={chooseNewRoom} onChange={(e) => { setChooseNewRoom(e.target.value) }}>
                <option value='' disabled hidden>Choose room</option>
                <option value='kitchen'>kitchen</option>
                <option value='bathroom'>bathroom</option>
                <option value='bedroom'>bedroom</option>
            </select><br />
            <input onChange={(e)=>{setRoomName(e.target.value)}} maxLength={5} type='text' placeholder='room name' /><br />
            <input onChange={(e)=>{setRoomColor(e.target.value)}} type='text' placeholder='room color' /><br />
            <button onClick={()=>{addNewRoom(chooseNewRoom,roomName,roomColor);nav('/')}}>CREATE</button>
        </div>
    )
}
