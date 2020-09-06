import styled from "styled-components";
import color from "../../styles/index";

import { Plus } from "styled-icons/entypo/";
import { Messenger } from "styled-icons/boxicons-logos/";
import { Notifications } from "styled-icons/ionicons-solid/";
import { ArrowDown } from "styled-icons/evaicons-solid/";

import { PropsMenssage } from ".";

export const Container = styled.div`
  grid-area: MA;
  height: 60px;
  display: flex;

  flex-direction: row;
  justify-content: flex-end;
  padding: 0 15px 0 0;

  align-items: center;
  background-color: ${color.dark.secondary};
  border-bottom: 1px solid ${color.dark.tertary};
  z-index: 10;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  padding: 4px 10px 4px 4px;
  cursor: pointer;

  :hover {
    background-color: ${color.dark.tertary};
    border-radius: 60px;
  }
`;

export const UserPhoro = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 60px;
  background-color: red;
`;
export const UserName = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-left: 4px;

  color: ${color.dark.white};
`;

export const ContainerIcon = styled.div`
  width: 190px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Icons = styled.div<PropsMenssage>`
  width: 40px;
  height: 40px;
  display: flex;

  align-content: center;
  justify-content: center;

  border-radius: 60px;
  color: ${color.dark.white};
  background-color: ${color.dark.tertary};
  cursor: pointer;

  span {
    visibility: hidden;
    background-color: ${color.dark.white};
    color: ${color.dark.primary};
    opacity: 0.8;
    transition: visibility 0 ease-out;
    padding: 10px;
    margin-top: 50px;
    border-radius: 6px;

    text-align: center;
    font-weight: 300;
    font-size: 13px;
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
  :hover {
    span {
      visibility: visible;
    }
  }

  :hover {
    background-color: ${color.dark.quart};
  }

  &.notifcation {
    :after {
      width: 18px;
      height: 18px;

      position: absolute;
      margin-top: -4px;
      margin-left: 30px;

      border-radius: 100px;
      background-color: ${color.dark.red};
      color: ${color.dark.white};
      font-size: 12px;
      font-weight: bold;

      display: flex;
      justify-content: center;
      align-items: center;
      content: "${(PropsMenssage) =>
        PropsMenssage.contentNotification &&
        PropsMenssage.contentNotification}";
    }
  }

  &.conta {
    :after {
      width: 8px;
      height: 8px;

      position: absolute;
      margin-top: 0px;
      margin-left: 28px;

      border-radius: 100px;
      border: 2px solid ${color.dark.secondary};

      background-color: ${color.dark.red};
      color: ${color.dark.white};
      font-size: 12px;
      font-weight: bold;

      display: flex;
      justify-content: center;
      align-items: center;
      content: "";
    }
  }
`;

export const MoreIcon = styled(Plus)`
  width: 23px;
`;
export const MessengerIcon = styled(Messenger)`
  width: 21px;
`;
export const NotificationIcon = styled(Notifications)`
  width: 18px;
  transform: rotate(-9deg);
`;
export const ArrowIcon = styled(ArrowDown)`
  width: 20px;
`;
