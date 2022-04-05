//import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/posts" activeStyle>
            Le Blog
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Me
          </NavLink>
          
          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;