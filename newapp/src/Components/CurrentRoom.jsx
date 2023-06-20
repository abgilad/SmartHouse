<<<<<<< HEAD
import React, { useState } from 'react'
import SelectNewItem from './SelectNewItem'

export default function CurrentRoom({ allData }) {

    const [flag, setFlag] = useState(false)

    console.log(allData.currentRoomIndex)

    let currentRoomItems = ''

    const viewRoomItems = () => {
        currentRoomItems = allData.data.find((val, i) => i === allData.currentRoomIndex)
    }
    viewRoomItems()

    const viewAddNewItems = () => {
        if (flag == true) {
            return <SelectNewItem />
        }
    }

    return (
        <div>
            <div>{currentRoomItems.roomName}</div>
            <div>{currentRoomItems.choosenRoom}</div>
            <button onClick={() => { setFlag(!flag) }}>add new item</button><br />
            {viewAddNewItems()}
        </div>
=======
import React from 'react'

export default function CurrentRoom() {
    return (
        <div>CurrentRoom</div>
>>>>>>> 55d1814df265c077c375b36686f66780cb1a2815
    )
}
