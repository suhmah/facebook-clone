import styled from "styled-components";
import color from "../../styles/index";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  grid-area: MC;

  display: flex;
  justify-content: space-between;
  background-color: ${color.dark.secondary};

  position: fixed;
`;
