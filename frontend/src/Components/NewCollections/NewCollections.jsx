import React from 'react'
import './NewCollections.css'
import NewColl from '../Assets/new_collections.js'
import { Item } from '../Item/Item'

export const NewCollections = () => {
    const nCollections = NewColl.map((item) => {
        return (
            <Item
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collection-items">
                {nCollections}
            </div>
        </div>
    )
}



