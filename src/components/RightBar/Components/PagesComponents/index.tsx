import React from "react";

import { Container, Title } from "./styles";

import YourPages from "./Components/YourPages";

import image from "../../../../assets/mat.jpg";

const PagesComponents: React.FC = () => {
  return (
    <Container>
      <Title>Suas Páginas</Title>
      <YourPages imageP={image} nameP="nome da pag" not="20" />
    </Container>
  );
};

export default PagesComponents;
