import React from "react";
import styled from "styled-components";
import { navItems } from '../constants/constants'
// import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <Aside>
      {/* <Logo>
        <img src="" alt="" />
        logo
      </Logo> */}
      <Nav>
        <NavMenu>
          <NavList>
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.to}>
                  <i className={item.icon} />
                  {/* {item.name} */}
                </a>
              </li>
        
            ))}
          </NavList>
        </NavMenu>
      </Nav>
      <NavFooter>&copy; 2023.</NavFooter>
    </Aside>
  );
};
const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  min-height: 100vh;
  background: var(--body-color);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2.5rem 1.5rem;
  z-index: 10;
`;
const Logo = styled.a``;

const Nav = styled.nav`
  justify-self: center;
  align-self: center;
`;
const NavMenu = styled.div``;
const NavList = styled.ul`
display: flex;
flex-direction: column;
row-gap: 1rem;

li a {
  font-size: 1.5rem;
  color: var(--title-color);
  font-weight: var(--font-bold);
}
`;

const NavFooter = styled.div`
  color: hsl(245, 15%, 65%);
  font-size: var(--smaller-size);
  letter-spacing: -1.3;
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
`;


export default Sidebar;
