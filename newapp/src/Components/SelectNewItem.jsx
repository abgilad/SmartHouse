import React, { useState } from 'react'

export default function SelectNewItem() {

    const [newRoomItem, setNewRoomItem] = useState('')

    return (
        <div>
            <select value={newRoomItem} onChange={(e) => { setNewRoomItem(e.target.value) }}>
                <option value='' disabled hidden>Choose room item</option>
                <option value='conditioner'>conditioner</option>
                <option value='stereo'>stereo</option>
                <option value='boiler'>boiler</option>
                <option value='lamp'>lamp</option>
            </select><br />
            <button>add</button>
        </div>
    )
}
