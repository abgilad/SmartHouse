import React from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'


export default function Room({ data, index, enterToCurrentRoom }) {

    console.log(index)


    const nav = useNavigate()



    return (
        <div onClick={() => { enterToCurrentRoom(index); nav(`/currentRoom/${data.roomName}`) }}>
            <div style={{ backgroundColor: data.color }}>
                <div>{data.roomName}</div>
=======

export default function Room({ chosenRoom }) {
    return (
        <div >
            <div >
                <div>{chosenRoom.roomName}</div>
>>>>>>> 55d1814df265c077c375b36686f66780cb1a2815
            </div>
        </div>
    )
}
