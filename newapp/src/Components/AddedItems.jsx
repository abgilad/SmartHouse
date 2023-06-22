import React from 'react'

export default function AddedItems({ addedItems }) {
    return (
        <div>
            <div>item: {addedItems.itemName}</div>
            <div>item state: {addedItems.itemState}</div>
        </div>
    )
}
