import React from "react";
import './App.css';
import {Button, Alert,Accordion,Navbar, Container } from 'react-bootstrap';
import Counter from "./Components/Counter";
import Register from "./Components/Register";
import UserList from "./Components/UserList";

const App=()=> {

  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

  return (
    <div>
      <Navbar bg="dark" expand='sm'  variant='dark'>
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
        </Container>

      </Navbar>
      {/* <Counter/> */}
      {/* <Register/> */}
      <UserList data={productsArr}/>
    </div>
  );
}

export default App;
