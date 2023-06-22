import React from 'react'

export default function AddedItems({ addedItems, index }) {
    return (
        <div className='itemMain'>
            <div>item: {addedItems.itemName}</div>
            <div>item state: {addedItems.itemState}</div>
            <div onClick={() => { }} style={{ backgroundColor: addedItems.colorState }}>on/off</div>
            <div>{index}</div>
        </div>
    )
}
