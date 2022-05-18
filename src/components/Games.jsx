import React from "react";
import styled from "styled-components";
import { gameItems } from "../data";
import Game from "./Game";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

const Products = () => {
  return (
    <Container>
      {gameItems.map((item) => (
        <Game item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
