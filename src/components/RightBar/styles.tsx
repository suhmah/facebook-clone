import styled from "styled-components";
import color from "../../styles/index";

export const Container = styled.div`
  grid-area: RB;

  height: calc(100vh - 60px);
  overflow-y: hidden;

  display: flex;
  flex-direction: column;

  padding: 0 10px 0 14px;
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
export const Separator = styled.div`
  height: 0.3px;
  background-color: ${color.dark.quart};

  margin-top: 10px;
`;
