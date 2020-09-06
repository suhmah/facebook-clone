import React from "react";

import { ContainerIcon, MarketplaceIcon } from "../../styles";

interface MenuTableProps {
  isActive?: boolean;
  hasNotifications?: boolean;
  contentNotification?: string;
}

const IconContainerMarket: React.FC<MenuTableProps> = ({
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
      <MarketplaceIcon />
      <span>Marketplace</span>
    </ContainerIcon>
  );
};

export default IconContainerMarket;
