import styled from "styled-components";
import color from "../../../../../../styles/";
import { Bell } from "styled-icons/entypo/";
import { Megaphone } from "styled-icons/ionicons-outline/";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const ContaonerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    font-size: 16px;
    font-weight: 500;

    color: ${color.dark.white};
    margin-left: 10px;
  }
`;

export const ImagePage = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 15px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 10px;
`;

export const Label = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: ${color.dark.quinter};

  margin-left: 10px;
`;

export const IconNotification = styled(Bell)`
  width: 18px;

  color: ${color.dark.quinter};
`;

export const IconBusines = styled(Megaphone)`
  width: 18px;

  color: ${color.dark.quinter};
`;
