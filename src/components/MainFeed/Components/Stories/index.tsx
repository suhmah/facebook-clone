import React from "react";

import {
  ContainerStory,
  IconAdd,
  CreateStory,
  User,
  IconAddContainer,
  ViewStory,
} from "../../styles";

export interface MenuTableProps {
  isCreate?: boolean;
  isUser?: boolean;
  image?: string;
  storie?: string;
  userImage?: string;
  nameUser?: string;
}

const IconContainerFriends: React.FC<MenuTableProps> = ({
  isCreate,
  isUser,
  image,
  userImage,
  nameUser,
}) => {
  return (
    <ContainerStory
      image={image}
      className={isCreate ? "create" : ""}
      id={isUser ? "user" : ""}
    >
      {isCreate ? (
        <footer>
          <IconAddContainer>
            <IconAdd />
          </IconAddContainer>
          <CreateStory>Criar um</CreateStory>
          <CreateStory> story</CreateStory>
        </footer>
      ) : (
        ""
      )}

      {!isUser && !isCreate ? (
        <>
          <User src={userImage} /> <ViewStory>{nameUser}</ViewStory>
        </>
      ) : (
        ""
      )}
      {isUser ? (
        <>
          <User src={userImage} /> <ViewStory>Seu Story</ViewStory>
        </>
      ) : (
        ""
      )}
    </ContainerStory>
  );
};

export default IconContainerFriends;
