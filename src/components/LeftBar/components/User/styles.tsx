import styled from "styled-components";

import color from "../../../../styles/index";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  margin-top: 30px;
  padding: 7px;

  span {
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin-left: 10px;

    width: 200px;
  }

  :hover {
    background-color: ${color.dark.tertary};
    width: 100%;
    border-radius: 10px;
  }
`;
export const UserPhoto = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 60px;
  flex-shrink: 0;
`;
