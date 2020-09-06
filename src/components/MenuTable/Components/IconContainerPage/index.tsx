import React from "react";

import { ContainerIcon, PageIcon } from "../../styles";

interface MenuTableProps {
  isActive?: boolean;
  hasNotifications?: boolean;
  contentNotification?: string;
}

const IconContainerPage: React.FC<MenuTableProps> = ({
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
      <PageIcon />
      <span>Páginas</span>
    </ContainerIcon>
  );
};

export default IconContainerPage;
