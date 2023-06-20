import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Room({ data, index, enterToCurrentRoom }) {

    console.log(index)


    const nav = useNavigate()



    return (
        <div onClick={() => { enterToCurrentRoom(index); nav(`/currentRoom/${data.roomName}`) }}>
            <div style={{ backgroundColor: data.color }}>
                <div>{data.roomName}</div>
            </div>
        </div>
    )
}
