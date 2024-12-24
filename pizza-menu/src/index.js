import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
    return (
        <div className='container'>
        <Header/>
        <Menu/>
        <Footer/>
        </div>
    )
}
// When you want to create a new Component we usually do so as functions 
// The component function has to 1: Start with capital letter 

function Header(){
  return (
  <header className='header'>

    <h1 >Fast React Pizza Co.</h1>
  </header>

  )
}
function Menu(){
  return (
    <main className='menu'>
  <h2>Our Menu</h2>
  <Pizza name='pizza Spinaci' ingredient='Tomato, mozarella, spinach, and ricotta cheese' photoName= 'pizzas/spinaci.jpg'
  price={10} soldOut='false'/>
  <Pizza name = 'Pizza Prosciutto' ingredient='Tomato, mozarella, ham, aragula, and burrata cheese' 
  photoName='pizzas/prosciutto.jpg' price={18} soldOut='false'/>
  </main>
  )
}
function Pizza(props){
  // console.log(props)
   return(   
     <div className='pizza'>
   <img src={props.photoName} alt='pizza-focaccia'/>
    <div>
     <h3>{props.name}</h3>
   <p>{props.ingredient}</p>
   <p>{props.price*3}</p>
   </div>
   <p>{props.soldOut?'Available':'Sorry we are sold out'}</p>

   </div>
   )
}                   

function Footer (){
  let hour = new Date().getHours();
  console.log(hour)
  return <footer>{hour>7 && hour<19? `We are Open`:`Sorry We are Closed`}</footer>
}
                                //   2: Return some html inform of jsx 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode><App/></StrictMode>)