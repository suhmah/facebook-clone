import React from "react";

import {
  Container,
  User,
  UserPhoro,
  UserName,
  ContainerIcon,
  Icons,
  MoreIcon,
  MessengerIcon,
  NotificationIcon,
  ArrowIcon,
} from "./styles";

import Mat from "../../assets/mat.jpg";

export interface PropsMenssage {
  hasNotifications?: boolean;
  contentNotification?: string;
}

const IconMessenger: React.FC<PropsMenssage> = ({
  hasNotifications,
  contentNotification,
}) => {
  return (
    <Icons
      contentNotification={contentNotification}
      className={hasNotifications ? "notifcation" : ""}
    >
      <MessengerIcon />
      <span>Messenger</span>
    </Icons>
  );
};
const IconNotification: React.FC<PropsMenssage> = ({
  hasNotifications,
  contentNotification,
}) => {
  return (
    <Icons
      contentNotification={contentNotification}
      className={hasNotifications ? "notifcation" : ""}
    >
      <NotificationIcon />
      <span>Notificações</span>
    </Icons>
  );
};

const MenuAction: React.FC = () => {
  return (
    <Container>
      <User>
        <UserPhoro src={Mat} alt="Matheus Henrique" />
        <UserName>Matheus</UserName>
      </User>

      <ContainerIcon>
        <Icons>
          <MoreIcon />
          <span>Criar</span>
        </Icons>

        <IconMessenger contentNotification={"5"} hasNotifications />
        <IconNotification contentNotification={"+9"} hasNotifications />

        <Icons className="conta">
          <ArrowIcon />
          <span>Conta</span>
        </Icons>
      </ContainerIcon>
    </Container>
  );
};

export default MenuAction;
