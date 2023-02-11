import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ children, to, ...props }) => {
  return (
    <Link to={to}>
      <Btn {...props}> {children} </Btn>
    </Link>
  );
};

export default Button;

const Btn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background: #43b6b2;
  color: #fff;
  font-size: 20px;
`;
