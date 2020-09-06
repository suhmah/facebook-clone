import styled from "styled-components";
import color from "../../styles/index";
import { ArrowIosDownwardOutline } from "styled-icons/evaicons-outline/";

export const Container = styled.div`
  grid-area: LB;

  height: calc(100vh - 60px);
  overflow-y: hidden;

  display: flex;
  flex-direction: column;

  padding: 0 0 0 8px;
  background-color: ${color.dark.primary};
  /* background-color: red; */
  border-bottom: 1px solid ${color.dark.tertary};
  z-index: 11;
  overflow-y: scroll;

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

export const Morecontainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  background-color: transparent;

  padding: 7px;
  span {
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin-left: 10px;
  }
  :hover {
    background-color: ${color.dark.tertary};
    border-radius: 10px;
  }
`;

export const ContainerMore = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  background-color: ${color.dark.secondary};
  border-radius: 60px;
`;

export const MoreIcon = styled(ArrowIosDownwardOutline)`
  width: 20px;
  color: ${color.dark.white};
`;

export const SuspendContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      color: ${color.dark.facebook};
      visibility: hidden;
      padding: 8px;
      font-size: 14px;

      :hover {
        padding: 8px;
        background-color: ${color.dark.tertary};
        border-radius: 4px;
      }
    }
  }
  :hover section div {
    visibility: visible;
  }
`;

export const Span = styled.span`
  color: ${color.dark.white};
  margin-left: 8px;
  font-size: 15px;
  font-weight: 400;
`;

export const Separator = styled.div`
  height: 0.1px;
  margin-top: 15px;
  margin-left: 7px;
  background-color: ${color.dark.quart};
  color: transparent;
  border-radius: 50px;
`;
