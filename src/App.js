import React, { useState } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from './components/Items';


 const inishialState = [
    {
      id: 1,
      title: 'Стул серый',
      img: 'chair-grey.jpeg',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 2,
      title: 'Стул зелёный',
      img: 'chair-green.jpeg',
      category: 'chairs',
      price: '48.99'
    },
    {
      id: 3,
      title: 'Стул чёрный',
      img: 'chair-black.jpeg',
      category: 'chairs',
      price: '100.00'
    },
  ];


const App = () => {
  const[items,  setItems] = useState (inishialState)
 
  return (
    <div className="wrapper">
      <Header/>
      <Items items={items}/>
      <Footer/>
    </div>
  );
}

export default App;
