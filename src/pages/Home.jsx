import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Games from "../components/Games";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
      <Games />
    </Container>
  );
};

export default Home;
