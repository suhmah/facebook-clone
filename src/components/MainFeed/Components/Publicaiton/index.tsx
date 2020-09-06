import React from "react";

import {
  Container,
  Header,
  IconMore,
  Poster,
  ContainerActions,
  Action,
  IconLike,
  IconComents,
  IconShare,
} from "./styles";

import User from "./components/User/";

import Footer from "./components/Footer";

import Mat from "../../../../assets/mat.jpg";

const Publicaiton: React.FC = () => {
  return (
    <Container>
      <Header>
        <User imageProp={Mat} name="Lívya" timeProp="35 min" isPublic />
        <IconMore />
      </Header>
      <Poster src={Mat} />
      <Footer
        created="Página"
        createdAt="17 h"
        description="decrição"
        isPublic
      />

      <ContainerActions>
        <Action>
          <IconLike />
          <span>Curtir</span>
        </Action>
        <Action>
          <IconComents />
          <span>Comentar</span>
        </Action>
        <Action>
          <IconShare />
          <span>Compartilhar</span>
        </Action>
      </ContainerActions>

      {/* <Reaction reactions="4" coments="5" share="15" />
      <Coment image="" /> */}
    </Container>
  );
};

export default Publicaiton;
