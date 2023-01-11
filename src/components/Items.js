import React from 'react'
import Item from './Item';

const Items = ({items}) => {
  return (
    <main>
        {items.map(e => 
            <Item key={e.id} item={e}/>
            )}
    </main>
  )
}

export default Items;