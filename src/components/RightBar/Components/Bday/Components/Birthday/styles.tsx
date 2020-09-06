import styled from "styled-components";
import color from "../../../../../../styles/";
import { Gift } from "styled-icons/boxicons-solid/";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 10px;
`;

export const ImageBday = styled(Gift)`
  width: 33px;
  height: 33px;

  color: ${color.dark.facebook};
`;

export const Bdays = styled.div`
  font-size: 14px;
  color: ${color.dark.white};
  margin-left: 8px;
  p {
    font-weight: 300;
  }
`;
