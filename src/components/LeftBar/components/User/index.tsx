import React from "react";

import { Container, UserPhoto } from "./styles";

import Math from "../../../../assets/mat.jpg";

const User: React.FC = () => {
  return (
    <Container>
      <UserPhoto src={Math} />
      <span>Matheus Henrique</span>
    </Container>
  );
};

export default User;
