import React from "react";

import {
  Container,
  Living,
  Room,
  IconLive,
  IconInfo,
  CreateRoom,
  Users,
} from "./styles";

import User from "./Components/User";

import mat from "../../../../assets/mat.jpg";

const LivingRoom: React.FC = () => {
  return (
    <Container>
      <Living>
        <Room>
          <IconLive />
          <strong>Salas </strong>
          <span>- faça um bate-papo de vídeo com os amigos</span>
          <IconInfo />
        </Room>
        <CreateRoom>Criar Sala</CreateRoom>
      </Living>
      <Users>
        <User user NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} online />
        <User NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} online />
        <User NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} online />
        <User NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} online />
        <User NameUser="Matheus" image={mat} />
        <User NameUser="Matheus" image={mat} online />
        <User NameUser="Matheus" image={mat} />
      </Users>
    </Container>
  );
};

export default LivingRoom;
