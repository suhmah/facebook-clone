import React from "react";

import {
  Container,
  StatusContainer,
  User,
  InputStatus,
  Actions,
  ActionButton,
  IconCamera,
  IconPhoto,
  IconHappy,
  Description,
  Separator,
} from "./styles";

import Mat from "../../../../assets/mat.jpg";

const Status: React.FC = () => {
  return (
    <Container>
      <StatusContainer>
        <User src={Mat} />
        <InputStatus placeholder="No que vocês está pensando, Matheus?" />
      </StatusContainer>

      <Separator />

      <Actions>
        <ActionButton>
          <IconCamera />
          <Description>Vídeo ao vivo</Description>
        </ActionButton>
        <ActionButton>
          <IconPhoto />
          <Description>Foto/vídeo</Description>
        </ActionButton>
        <ActionButton>
          <IconHappy />
          <Description>Sentimento/atividade</Description>
        </ActionButton>
      </Actions>
    </Container>
  );
};

export default Status;
