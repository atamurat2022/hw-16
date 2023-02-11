import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      style={{ color: match ? "black" : "white", textDecoration: "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <Menu>
          <CustomLink to="/products">Products</CustomLink>
          <CustomLink to="/cards">My Cards</CustomLink>
          <CustomLink to="/orders">My Orders</CustomLink>
        </Menu>
      </nav>
    </Container>
  );
};

export default Header;

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 500px;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
`;

const Container = styled.header`
  width: 100%;
  height: 30vh;
  background: #1d59c8;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
