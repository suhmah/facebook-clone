import styled from "styled-components";
import color from "../../../../../../styles";
import { Earth } from "styled-icons/ionicons-outline/";
import { UserFriends } from "styled-icons/fa-solid/";
export const Container = styled.div`
  width: 95%;
  height: 90px;

  align-self: center;

  margin-bottom: 10px;

  padding: 10px;

  border-left: 0.6px solid ${color.dark.quart};
  border-right: 0.6px solid ${color.dark.quart};
  border-bottom: 0.6px solid ${color.dark.quart};

  border-radius: 0 6px;
`;

export const Create = styled.div`
  font-size: 16px;
  font-weight: 600;

  color: ${color.dark.white};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CreatedAt = styled.div`
  font-size: 13px;
  font-weight: 300;

  color: ${color.dark.white};
`;

export const IoncPublic = styled(Earth)`
  width: 12px;
  color: ${color.dark.white};

  margin-left: 5px;
  margin-top: 8px;
  margin-bottom: 10px;
`;
export const IoncUserFriends = styled(UserFriends)`
  width: 12px;
  color: ${color.dark.white};

  margin-left: 5px;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;

  color: ${color.dark.white};
`;
