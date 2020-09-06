import React from "react";

import { Container, Title } from "./styles";

import Pub from "./Components/Pub";
import image from "../../../../assets/mat.jpg";

const Busines: React.FC = () => {
  return (
    <Container>
      <Title>Patrocinado</Title>
      <Pub imagePub={image} title="olá" url="link" />
    </Container>
  );
};

export default Busines;
