import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Header = () => {
  return (
    <div className="my-navbar">
      <Navbar className="border" color="faded" light  expand="md">
          <NavbarBrand href="/">BABS' CAMERA SHOP</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/checkout">Checkout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/bdoring/ReactRedux-babs-camera-shop">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default Header;
