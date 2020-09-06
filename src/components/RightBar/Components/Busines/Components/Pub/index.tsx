import React from "react";

import { Container, ImagePub, Info } from "./styles";

interface PubProps {
  imagePub?: string;
  title?: string;
  url?: string;
}

const Pub: React.FC<PubProps> = ({ imagePub, title, url }) => {
  return (
    <Container>
      <ImagePub src={imagePub} />
      <Info>
        <strong>{title}</strong>
        <span>{url}</span>
      </Info>
    </Container>
  );
};

export default Pub;
