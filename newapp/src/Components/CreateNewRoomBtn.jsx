import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateNewRoomBtn() {


    return (
        <div>
            <Link to={'/ChooseNewRoom'}><button className='mainBtn'>+</button></Link>
        </div>
    )
}
