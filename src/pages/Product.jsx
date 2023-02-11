import styled from "styled-components";
import Button from "../UI/Button";

const Products = () => {
  return (
    <>
      <Container>
        <NavList>
          <ListItem>
            Product Name 1 <Button to="id"> Details </Button>{" "}
          </ListItem>
          <ListItem>
            Product Name 2 <Button to="id1"> Details </Button>{" "}
          </ListItem>
          <ListItem>
            Product Name 3 <Button to="id3"> Details </Button>{" "}
          </ListItem>
          <ListItem>
            Product Name 4 <Button to="id4"> Details </Button>{" "}
          </ListItem>
        </NavList>
      </Container>
      <Button style={{ marginLeft: "0", color: "#fff" }} to="/">
        go Back
      </Button>
    </>
  );
};

export default Products;

const NavList = styled.ul`
  margin: 0 auto;
  list-style: none;
`;

const Container = styled.div`
  margin-top: 50px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 70px;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  font-size: 20px;
`;
