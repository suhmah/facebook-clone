import React from "react";

import { Container, ContainerMenu } from "./styles";

import IconContainerHome from "./Components/IconContainerHome/index";
import IconContainerPage from "./Components/IconContainerPage/index";
import IconContainerPlay from "./Components/IconContainerPlay/index";
import IconContainerMarkt from "./Components/IconContainerMarkt/index";
import IconContainerFriends from "./Components/IconContainerFriends/index";

const MenuTable: React.FC = () => {
  return (
    <Container>
      <ContainerMenu>
        <IconContainerHome isActive />
        <IconContainerPage contentNotification="11" hasNotifications />
        <IconContainerPlay contentNotification="2" hasNotifications />
        <IconContainerMarkt contentNotification="3" hasNotifications />
        <IconContainerFriends contentNotification="29" hasNotifications />
      </ContainerMenu>
    </Container>
  );
};

export default MenuTable;
