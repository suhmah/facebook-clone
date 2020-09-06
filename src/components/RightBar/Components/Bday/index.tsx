import React from "react";

import { Container, Title } from "./styles";

import Birthday from "./Components/Birthday";

const Bday: React.FC = () => {
  return (
    <Container>
      <Title>Aniversários</Title>
      <Birthday />
    </Container>
  );
};

export default Bday;
