import React from "react";

import { ContainerIcon, HomeIcon } from "../../styles";

interface MenuTableProps {
  isActive?: boolean;
  hasNotifications?: boolean;
  contentNotification?: string;
}

const IconContainerHome: React.FC<MenuTableProps> = ({
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
      <HomeIcon />
      <span>Página inícial</span>
    </ContainerIcon>
  );
};

export default IconContainerHome;
