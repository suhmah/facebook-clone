import React from "react";

import { Container, Image } from "./styles";

interface PropsSuspend {
  photo: string;
  description: string;
}

const Suspend: React.FC<PropsSuspend> = ({ photo, description }) => {
  return (
    <Container>
      <Image src={photo} alt={photo} />
      <span>{description}</span>
    </Container>
  );
};

export default Suspend;
