import React from "react";

import { ContainerIcon, PlayIcon } from "../../styles";

interface MenuTableProps {
  isActive?: boolean;
  hasNotifications?: boolean;
  contentNotification?: string;
}

const IconContainerPlay: React.FC<MenuTableProps> = ({
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
      <PlayIcon />
      <span>Watch</span>
    </ContainerIcon>
  );
};

export default IconContainerPlay;
