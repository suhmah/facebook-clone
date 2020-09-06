import styled from "styled-components";
import color from "../../../../../../styles/";
import { Plus } from "styled-icons/entypo/";

import { PropsLive } from ".";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-left: 15px;
  &.user {
    margin-left: 0px;
  }
  &#online {
    :after {
      width: 7px;
      height: 7px;

      background-color: ${color.dark.green};

      border-radius: 60px;
      margin-top: 30px;
      margin-left: -10px;

      border: 2px solid ${color.dark.secondary};
      content: " ";
    }
  }

  cursor: pointer;

  :hover {
    article {
      opacity: 0.8;
      visibility: visible;
    }
  }
`;

export const UserImage = styled.div<PropsLive>`
  width: 40px;
  height: 40px;

  background-color: white;

  background-image: url(${(PropsLive) => PropsLive.image && PropsLive.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40px;

  border-radius: 50px;
`;

export const ContainerIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0);
  border-radius: 50px;

  :hover {
    background-color: rgba(250, 250, 250, 0.2);
  }
  &.user {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50px;

    opacity: 1;

    :hover {
      opacity: 0.7;
    }
  }
`;
export const IconAdd = styled(Plus)`
  width: 20px;

  color: ${color.dark.white};
`;

export const PolpUser = styled.article`
  visibility: hidden;
  background-color: ${color.dark.white};
  color: ${color.dark.primary};
  opacity: 0.8;
  transition: visibility 0 ease-out;
  padding: 20px;
  margin-top: 40px;
  border-radius: 6px;

  text-align: center;
  font-weight: 500;
  font-size: 16px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 20;
`;
