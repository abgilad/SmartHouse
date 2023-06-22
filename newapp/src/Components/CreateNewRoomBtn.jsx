import React from 'react'
import { Link } from 'react-router-dom'
import Room from './Room'

export default function CreateNewRoomBtn({ allData, enterToCurrentRoom }) {

    const enterToCurrentRoom = (index) => {
        const findRoom = allData.data.find((val, i) => i == index);

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
