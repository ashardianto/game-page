import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Login from "./components/LoginPage/LoginPage";
import Register from "./components/RegisterPage/RegisterPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App;
