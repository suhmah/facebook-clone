import React from "react";

import {
  Container,
  Image,
  Info,
  Name,
  Time,
  Hours,
  IconWordl,
  Friends,
  Private,
} from "./styles";

export interface PosterProps {
  imageProp?: string;
  name?: string;
  timeProp?: string;
  isPublic?: boolean;
  isPrivate?: boolean;
  isFriends?: boolean;
}

const User: React.FC<PosterProps> = ({
  imageProp,
  name,
  timeProp,
  isPublic,
  isPrivate,
  isFriends,
}) => {
  return (
    <Container>
      <Image src={imageProp} />
      <Info>
        <Name>{name}</Name>
        <Time>
          <Hours> {timeProp} · </Hours>

          {isPublic ? <IconWordl /> : ""}
          {isPrivate ? <Private /> : ""}
          {isFriends ? <Friends /> : ""}
        </Time>
      </Info>
    </Container>
  );
};

export default User;
