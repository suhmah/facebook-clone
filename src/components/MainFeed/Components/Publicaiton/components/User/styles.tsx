import styled from "styled-components";
import color from "../../../../../../styles";

import { Earth } from "styled-icons/ionicons-outline/";
import { UserFriends } from "styled-icons/fa-solid/";
import { LockAlt } from "styled-icons/boxicons-regular/";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: 40px;
  border-radius: 100px;
`;

export const Info = styled.div`
  display: flex;
  height: 40px;
  flex-direction: column;
  align-content: center;
  justify-items: space-between;
  margin-left: 10px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 500;

  color: ${color.dark.white};
`;

export const Time = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Hours = styled.time`
  font-size: 13px;
  font-weight: 300;
  color: ${color.dark.quinter};
`;

export const IconWordl = styled(Earth)`
  width: 12px;
  color: ${color.dark.quinter};
`;

export const Friends = styled(UserFriends)`
  width: 12px;
  color: ${color.dark.quinter};
`;

export const Private = styled(LockAlt)`
  width: 12px;
  color: ${color.dark.quinter};
`;
