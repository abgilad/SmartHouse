
import React, { useState } from 'react'
import SelectNewItem from './SelectNewItem'
import AddedItems from './AddedItems'

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
            return <SelectNewItem allData={allData} setFlag={setFlag} />
        }
    }

    const viewAddedItems = () => {
        return currentRoomItems.items.map((val, i) => {
            return <AddedItems key={i} addedItems={val} index={i} />
        })
    }

    return (
        <div>
            <div>{currentRoomItems.roomName}</div>
            <div>{currentRoomItems.choosenRoom}</div>
            <button onClick={() => { setFlag(!flag) }}>add new item</button><br />
            {viewAddNewItems()}<br />
            {viewAddedItems()}
        </div>
    )
}