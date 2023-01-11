import React from 'react'

const Item = ({item}) => {
  return (
    <div className='item'>
        <img src={"./img/" + item.img}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className='add-to-card'> + </div>
    </div>
  )
}

export default  Item;