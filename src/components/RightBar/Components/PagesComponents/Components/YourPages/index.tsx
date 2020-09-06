import React from "react";

import {
  Container,
  ContaonerImage,
  ImagePage,
  Info,
  Item,
  IconNotification,
  IconBusines,
  Label,
} from "./styles";

interface Pagesprops {
  imageP?: string;
  nameP?: string;
  not?: string;
}

const YourPages: React.FC<Pagesprops> = ({ imageP, nameP, not }) => {
  return (
    <Container>
      <ContaonerImage>
        <ImagePage src={imageP} />
        <span>{nameP}</span>
      </ContaonerImage>
      <Info>
        <Item>
          <IconNotification />
          <Label>{not} notificações</Label>
        </Item>
        <Item>
          <IconBusines />
          <Label>Fazer anúncio</Label>
        </Item>
      </Info>
    </Container>
  );
};

export default YourPages;
