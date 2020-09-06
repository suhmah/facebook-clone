import React from "react";

import { Container, UserPhoto } from "./styles";

import covid from "../../../../assets/covid19.png";

const Covid: React.FC = () => {
  return (
    <Container>
      <UserPhoto src={covid} />
      <span>Covid-19: Central de Informações</span>
    </Container>
  );
};

export default Covid;
