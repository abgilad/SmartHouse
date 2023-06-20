import React from 'react'
import { Link } from 'react-router-dom'
import Room from './Room'

<<<<<<< HEAD
export default function CreateNewRoomBtn({ allData, enterToCurrentRoom }) {
=======
export default function CreateNewRoomBtn({ allData }) {
>>>>>>> 55d1814df265c077c375b36686f66780cb1a2815

    const enterToCurrentRoom = (index) => {
        const findRoom = allData.data.find((val, i) => i == index);

    }

    const viewRooms = () => {
        return allData.data.map((val, i) => {
            return <button key={i} onClick={() => { enterToCurrentRoom(i) }} style={{ backgroundColor: val.color }}>{val.roomName}</button>
        })
    }


    const viewRooms = () => {
        return allData.data.map((val, i) => {
            return <Room key={i} data={val} index={i} enterToCurrentRoom={enterToCurrentRoom} />
        })
    }

    return (

        <div >
            <div className='roomsDiv'>
                <div className='currentRoom'>{viewRooms()}
                </div>
            </div>
            <Link to={'/ChooseNewRoom'}><button className='mainBtn'>+</button></Link>
        </div >
    )
}
