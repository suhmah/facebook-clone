import styled from "styled-components";
import color from "../../styles/index";

import { Add } from "styled-icons/material/";
import { ArrowRight } from "styled-icons/bootstrap/";

import { MenuTableProps } from "./Components/Stories";

export const Container = styled.div`
  grid-area: MN;

  display: flex;
  justify-content: center;
  background-color: ${color.dark.primary};

  overflow-y: scroll;

  /* z-index: 10; */

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 20px;
  }
  :hover {
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${color.dark.tertary};
      border-radius: 20px;
    }
  }
`;

export const Feed = styled.div`
  width: 600px;
`;
export const StoryesMain = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerStory = styled.div<MenuTableProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  height: 200px;
  width: 130px;

  padding: 10px;

  background-color: ${color.dark.secondary};

  background-image: url(${(MenuTableProps) =>
    MenuTableProps.image && MenuTableProps.image});
  background-size: 120px;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-size: 121px;
    opacity: 0.8;
  }

  &.create {
    height: 200px;
    width: 130px;
    margin-left: 0px;

    padding: 0;

    background-color: ${color.dark.secondary};

    background-image: url(${(MenuTableProps) =>
      MenuTableProps.image && MenuTableProps.image});
    background-size: 130px;
    background-position: center top !important;
    background-repeat: no-repeat;
    border-radius: 10px;

    align-items: center;
    justify-content: flex-end;

    opacity: 1;

    cursor: pointer;
    opacity: 1;

    :hover {
      background-size: 131px;
      opacity: 0.8;
    }
    :hover footer {
      background-size: 140px;
      background-color: #202122;
    }

    footer {
      background-color: ${color.dark.secondary};
      width: 100%;
      height: 71px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0 0 10px 10px;
      padding-top: 25px;
    }
  }
`;
export const ContainerNext = styled.div`
  width: 45px;
  height: 45px;
  margin-right: -25px;
  background-color: ${color.dark.secondary};

  position: relative;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  :hover {
    background-color: ${color.dark.tertary};
  }
`;

export const Next = styled(ArrowRight)`
  width: 25px;
  color: ${color.dark.white};
`;

export const Footer = styled.div``;

export const IconAddContainer = styled.div`
  width: 40px;
  height: 40px;

  margin-top: -45px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${color.dark.facebook};
  border: 4px solid ${color.dark.secondary};
  border-radius: 100px;
`;

export const IconAdd = styled(Add)`
  width: 30px;
  color: ${color.dark.white};
`;
export const CreateStory = styled.div`
  color: ${color.dark.white};
  font-size: 15px;
  font-weight: 500;
`;

export const User = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 60px;
  border: 3px solid ${color.dark.facebook};
`;
export const ViewStory = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${color.dark.white};
`;

export const Image = styled.div``;
