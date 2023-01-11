import React, { useState } from 'react'
import { FaShopify } from 'react-icons/fa'

export default function Header() {
    let[cartOpen, setCartOpen] =useState(false)

    return (
        <header>
            <div>
                <span className='logo'>Chair Shop</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShopify 
                className={`shop-cart-btn ${cartOpen && 'active'}`} //если на кнопку нажали то применяется класс active(red btn)
                onClick={() => setCartOpen(cartOpen = !cartOpen)} //если на кнопку нажали то устанавливается противоположное значение
                />
                {cartOpen && (
                    <div className='shop-cart'></div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
