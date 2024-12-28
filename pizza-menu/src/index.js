import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Delivery from './DeliveryVehicles';
const deliveryVehicles = [
  {
    id: 1,
    type: "Truck",
    capacity: "10 tons",
    driver: "John Doe",
    isAvailable: true,
     photoName :'vehicles/truck.jpeg'
  },
  {
    id: 2,
    type: "Van",
    capacity: "2 tons",
    driver: "Jane Smith",
    isAvailable: false,
    photoName :'vehicles/van.jpeg'
  },
  {
    id: 3,
    type: "Motorcycle",
    capacity: "50 kg",
    driver: "Alice Johnson",
    isAvailable: true,
    photoName :'vehicles/motorcycle.jpeg'
  },

  {
    id: 4,
    type: "Drone",
    capacity: "5 kg",
    driver: "Automated",
    isAvailable: true,
    photoName :'vehicles/drone.jpeg'
  },
  {
    id: 5,
    type: "Bicycle",
    capacity: "25 kg",
    driver: "Tom Brown",
    isAvailable: false,
    photoName :'vehicles/bicycle.jpeg'
  },
];

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
        {deliveryVehicles.map(vehicle=><Delivery deliveryObj={vehicle}/>)}
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
  {/* <Pizza name='pizza Spinaci' ingredient='Tomato, mozarella, spinach, and ricotta cheese' photoName= 'pizzas/spinaci.jpg'
  price={10} soldOut='false'/>
  <Pizza name = 'Pizza Prosciutto' ingredient='Tomato, mozarella, ham, aragula, and burrata cheese' 
  photoName='pizzas/prosciutto.jpg' price={18} soldOut='false'/> */}
  <ul className='pizzas'> 
  {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>) }

  </ul>
 
  </main>
  )
}
function Pizza(props){
  // console.log(props)
   return(   
     <li className='pizza'>
   <img src={props.pizzaObj.photoName} alt='pizza-focaccia'/>
    <div>
     <h3>{props.pizzaObj.name}</h3>
   <p>{props.pizzaObj.ingredient}</p>
   <p>{props.pizzaObj.price*3}</p>
   </div>
   <p>{props.pizzaObj.soldOut?'Available':'Sorry we are sold out'}</p>

   </li>
   )
}                   


function Footer (){
  
  let hour = new Date().getHours();
  const opeHour =12 ;
  const closeHour = 23;
  const isOpen = hour>=opeHour&&hour<=closeHour
  console.log(hour)
  return (<footer>{isOpen && (<p>Hello World</p>
  
  
  
  }
  <div className='order'>
<p>We are</p>
  </div>
  </footer>)
}
                                //   2: Return some html inform of jsx 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode><App/></StrictMode>)