import React from "react";

import { Container, UserPhoto } from "./styles";

import messenger from "../../../../assets/messenger.png";

const Messenger: React.FC = () => {
  return (
    <Container>
      <UserPhoto src={messenger} />
      <span>Messenger</span>
    </Container>
  );
};

export default Messenger;
