import React from "react";

import { Container, Separator } from "./styles";

import Busines from "./Components/Busines";
import Page from "./Components/PagesComponents";
import Bday from "./Components/Bday";
import Users from "./Components/Users";

const RightBar: React.FC = () => {
  return (
    <Container>
      <Busines />
      <Separator />
      <Page />
      <Separator />
      <Bday />
      <Separator />
      <Users />
    </Container>
  );
};

export default RightBar;
