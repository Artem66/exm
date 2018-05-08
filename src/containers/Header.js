import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Header extends Component {

  render() {
    return <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href='#brand'>QAbyAI</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href='#'>
        Menu 1
      </NavItem>
      <NavItem eventKey={2} href='#'>
        Menu 2
      </NavItem>
      <NavItem eventKey={3} href='#'>
        Menu 3
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
  }
}
