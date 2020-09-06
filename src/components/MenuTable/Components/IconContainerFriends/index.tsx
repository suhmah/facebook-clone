import React from "react";

import { ContainerIcon, FriendsIcon } from "../../styles";

export interface MenuTableProps {
  isActive?: boolean;
  hasNotifications?: boolean;
  contentNotification?: string;
}

const IconContainerFriends: React.FC<MenuTableProps> = ({
  isActive,
  hasNotifications,
  contentNotification,
}) => {
  return (
    <ContainerIcon
      className={isActive ? "active" : ""}
      id={hasNotifications ? "notifcation" : ""}
      contentNotification={contentNotification}
    >
      <FriendsIcon />
      <span>Amigos</span>
    </ContainerIcon>
  );
};

export default IconContainerFriends;
