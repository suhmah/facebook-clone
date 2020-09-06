import styled from "styled-components";

import color from "../../../../../../styles/";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 10px;
`;

export const ImagePub = styled.img`
  width: 100px;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;

  margin-left: 10px;

  strong {
    font-size: 14px;
    font-weight: 400;

    color: ${color.dark.white};
  }

  span {
    font-size: 12px;
    font-weight: 300;

    color: ${color.dark.quart};
  }
`;
