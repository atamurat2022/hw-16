import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const MyOrders = () => {
  return (
    <div>
      <>
        <Card>
          My Cards <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi
          eaque suscipit pariatur dignissimos nisi dolores unde veniam est
          tenetur.
        </Card>

        <Button to="/">Go Back</Button>
      </>
    </div>
  );
};

export default MyOrders;

const Card = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 40vh;
  margin-top: 50px;
  background-color: #fff;
  text-align: center;
  font-size: 22px;
`;
