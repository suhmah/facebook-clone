import styled from "styled-components";
import color from "../../../../styles/index";

export const Container = styled.div`
  padding: 0 10px 10px 10px;
  color: ${color.dark.quinter};
  span {
    cursor: pointer;
    font-size: 12px;

    :hover {
      text-decoration: underline;
    }
  }
`;
