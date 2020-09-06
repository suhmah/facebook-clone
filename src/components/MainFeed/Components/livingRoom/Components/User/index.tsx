import React from "react";

import {
  Container,
  UserImage,
  PolpUser,
  ContainerIcon,
  IconAdd,
} from "./styles";

export interface PropsLive {
  user?: boolean;
  online?: boolean;
  NameUser?: string;
  image: string;
}

const User: React.FC<PropsLive> = ({ user, online, NameUser, image }) => {
  return (
    <Container className={user ? "user" : ""} id={online ? "online" : ""}>
      {/* <UserImage>{user ? <IconAdd /> : ""}</UserImage> */}
      <UserImage image={image} className={user ? "user" : ""}>
        {user ? (
          <ContainerIcon className={user ? "user" : ""}>
            <IconAdd />
          </ContainerIcon>
        ) : (
          <ContainerIcon />
        )}
      </UserImage>
      <PolpUser>{NameUser}</PolpUser>
    </Container>
  );
};

export default User;
