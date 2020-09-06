import React from "react";

import {
  Container,
  Header,
  Title,
  Icons,
  CameraIcon,
  SearchIcon,
  MoreIcon,
  Item,
} from "./styles";

import User from "./Components/User";

import Mat from "../../../../assets/mat.jpg";

const Users: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Contatos</Title>
        <Icons>
          <Item>
            <CameraIcon />
          </Item>
          <Item>
            <SearchIcon />
          </Item>
          <Item>
            <MoreIcon />
          </Item>
        </Icons>
      </Header>
      <User image={Mat} name="Matheus Henrique" isOnline />
    </Container>
  );
};

export default Users;
