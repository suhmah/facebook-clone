import styled from "styled-components";

import color from "../../../../../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 5px;
  padding: 8px 8px 8px 6px;

  cursor: pointer;

  :hover {
    background-color: ${color.dark.tertary};
    border-radius: 10px;
  }
`;

export const ContainerImage = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  &.online {
    :after {
      width: 7px;
      height: 7px;

      background-color: ${color.dark.green};
      flex-shrink: 0;

      border-radius: 60px;
      margin-top: 20px;
      margin-left: -8px;

      border: 2px solid ${color.dark.secondary};
      content: " ";
    }
  }
`;
export const ImageUser = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 60px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-left: 12px;
  color: ${color.dark.white};
`;
