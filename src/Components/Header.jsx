import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div><Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
      <i class="fa-sharp fa-solid fa-utensils"></i>
      FOODHUB
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header