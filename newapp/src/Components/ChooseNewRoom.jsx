import React, { useState } from 'react'

export default function ChooseNewRoom() {

    const [newRoom, setNewRoom] = useState('')
    console.log(newRoom);
    return (
        <div>
            <select onChange={(e) => { setNewRoom(e.target.value) }}>
                <option value="" disabled hidden>Choose room</option>
                <option value='kitchen'>kitchen</option>
                <option value='bathroom'>bathroom</option>
                <option value='bedroom'>bedroom</option>
            </select><br />
            <input maxLength={5} type='text' placeholder='room name' /><br />
            <input type='text' placeholder='room color' /><br />
            <button>CREATE</button>
        </div>
    )
}
