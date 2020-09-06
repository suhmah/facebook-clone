import styled from "styled-components";

import color from "../../../../styles";
import { MoreHorizontalOutline } from "styled-icons/evaicons-outline/";

import { Like } from "styled-icons/evil/";
import { MessageSquare } from "styled-icons/feather/";
import { ShareForward } from "styled-icons/remix-fill/";
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${color.dark.secondary};
  margin-top: 20px;
  margin-bottom: 40px;

  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
export const IconMore = styled(MoreHorizontalOutline)`
  width: 20px;
  color: ${color.dark.quinter};
`;

export const Poster = styled.img`
  margin-top: 5px;
  width: 100%;

  cursor: pointer;

  border-top: 0.5px solid ${color.dark.quart};
  border-bottom: 0.5px solid ${color.dark.quart};
`;

export const ContainerActions = styled.div`
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin-top: 2px;
  margin-bottom: 20px;
`;

export const Action = styled.div`
  width: 150px;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${color.dark.tertary};
    border-radius: 8px;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    margin-left: 5px;
    color: ${color.dark.quinter};
  }
`;

export const IconLike = styled(Like)`
  width: 23px;

  color: ${color.dark.quinter};
`;

export const IconComents = styled(MessageSquare)`
  width: 18px;

  color: ${color.dark.quinter};
`;

export const IconShare = styled(ShareForward)`
  width: 18px;

  color: ${color.dark.quinter};
`;
