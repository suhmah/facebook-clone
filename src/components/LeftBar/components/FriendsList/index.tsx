import React from "react";

import { Container, UserPhoto } from "./styles";

import friends from "../../../../assets/friends.png";

const FriendList: React.FC = () => {
  return (
    <Container>
      <UserPhoto src={friends} />
      <span>Amigos</span>
    </Container>
  );
};

export default FriendList;
