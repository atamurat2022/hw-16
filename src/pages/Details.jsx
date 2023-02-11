import React from "react";
import {  useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";

const Details = () => {
  const { id } = useParams();

  return (
    <>
      <Container>
        <h1>Product Details Page</h1>
        <h1>Product Name {id} </h1>
      </Container>

      <Button to="/">Go Back</Button>
    </>
  );
};

export default Details;
const Container = styled.div`
  width: 80%;
  height: 50vh;
  background: #fff;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
