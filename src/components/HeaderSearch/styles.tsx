import styled from "styled-components";
import color from "../../styles/index";

export const Container = styled.div`
  grid-area: MS;

  height: 60px;

  display: flex;
  padding: 0 0 0 15px;
  align-items: center;
  background-color: ${color.dark.secondary};
  border-bottom: 1px solid ${color.dark.tertary};
  z-index: 10;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;

  background-color: ${color.dark.primary};
  border-radius: 50%;
`;
