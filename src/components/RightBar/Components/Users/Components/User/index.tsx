import React from "react";

import { Container, ContainerImage, ImageUser, Name } from "./styles";

interface UserProps {
  image?: string;
  name?: string;
  isOnline?: boolean;
}

const User: React.FC<UserProps> = ({ image, name, isOnline }) => {
  return (
    <Container>
      <ContainerImage className={isOnline ? "online" : ""}>
        <ImageUser src={image} />
      </ContainerImage>
      <Name>{name}</Name>
    </Container>
  );
};

export default User;
