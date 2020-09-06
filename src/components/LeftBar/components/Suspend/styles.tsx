import styled from "styled-components";

import color from "../../../../styles/index";

export const Container = styled.div`
  display: flex;

  margin-bottom: 5px;
  align-items: center;

  &:nth-child(0n + 1) {
    margin-top: 40px;
  }

  cursor: pointer;
  span {
    color: ${color.dark.white};
    margin-left: 10px;
    margin: 7px 0 7px 7px;
  }
  :hover {
    background-color: ${color.dark.tertary};
    border-radius: 10px;
  }
`;
export const Image = styled.img`
  width: 33px;
  height: 33px;
  margin: 7px 0 7px 7px;

  border-radius: 8px;
`;
