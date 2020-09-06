import styled from "styled-components";
import color from "../../styles/index";
import { Home } from "styled-icons/boxicons-solid";
import { Flag2 } from "styled-icons/remix-line/";
import { CollectionPlay } from "styled-icons/bootstrap/";
import { Store } from "styled-icons/boxicons-regular/";
import { Users } from "@styled-icons/fa-solid/";

import { MenuTableProps } from "./Components/IconContainerFriends";

export const Container = styled.div`
  grid-area: MT;

  display: flex;
  justify-content: center;
  background-color: ${color.dark.secondary};
  border-bottom: 1px solid ${color.dark.tertary};
`;

export const ContainerMenu = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;
export const ContainerIcon = styled.div<MenuTableProps>`
  color: ${color.dark.quinter};
  width: 128px;
  height: 88%;
  border-radius: 8px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  align-items: center;
  align-content: center;
  justify-items: center;

  span {
    visibility: hidden;
    background-color: ${color.dark.white};
    color: ${color.dark.primary};
    opacity: 0.8;
    transition: visibility 0 ease-out;
    padding: 10px;
    margin-top: 100px;
    border-radius: 6px;

    text-align: center;
    font-weight: 300;
    font-size: 13px;
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 20;
  }
  :hover {
    background-color: ${color.dark.tertary};
    height: 88%;
    border-radius: 8px;
    span {
      visibility: visible;
    }
  }
  &.active {
    color: ${color.dark.facebook};
    border-bottom: 3px solid ${color.dark.facebook};
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    border-radius: 0;
    height: 100%;

    :hover {
      background-color: transparent;
      height: 100%;
      border-radius: 0;
    }
  }
  &#notifcation {
    :after {
      width: 15px;
      height: 15px;

      position: absolute;
      margin-top: -20px;
      margin-left: 22px;

      border-radius: 100px;
      background-color: ${color.dark.red};
      color: ${color.dark.white};
      font-size: 10px;
      font-weight: bold;

      display: flex;
      justify-content: center;
      align-items: center;
      content: "${(MenuTableProps) =>
        MenuTableProps.contentNotification &&
        MenuTableProps.contentNotification}";
    }
  }
`;
export const HomeIcon = styled(Home)`
  width: 28px;
  height: 100%;
`;

export const PageIcon = styled(Flag2)`
  width: 28px;
  height: 100%;
`;

export const PlayIcon = styled(CollectionPlay)`
  width: 28px;
  height: 100%;
`;

export const MarketplaceIcon = styled(Store)`
  width: 28px;
  height: 100%;
`;

export const FriendsIcon = styled(Users)`
  width: 28px;
  height: 100%;
`;
