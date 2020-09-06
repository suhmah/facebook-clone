import React from "react";

import {
  Container,
  Create,
  Info,
  CreatedAt,
  IoncPublic,
  IoncUserFriends,
  Description,
} from "./styles";

interface FooterProps {
  created?: string;
  createdAt?: string;
  isPublic?: boolean;
  isFriends?: boolean;

  description?: string;
}

const Content: React.FC<FooterProps> = ({
  created,
  createdAt,
  isPublic,
  isFriends,
  description,
}) => {
  return (
    <Container>
      <Create>{created}</Create>
      <Info>
        <CreatedAt>{createdAt}</CreatedAt>
        {isPublic ? <IoncPublic /> : ""}
        {isFriends ? <IoncUserFriends /> : ""}
      </Info>
      <Description>{description}</Description>
    </Container>
  );
};

export default Content;
