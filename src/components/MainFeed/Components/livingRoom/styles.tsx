import styled from "styled-components";
import color from "../../../../styles/";
import { InfoCircleFill } from "styled-icons/bootstrap/";
import { VideoCamera } from "styled-icons/zondicons/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 20px;

  background-color: ${color.dark.secondary};

  border-radius: 10px;
  padding: 15px;
  max-width: 100%;
  overflow-x: hidden;
`;

export const Living = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  strong {
    color: ${color.dark.white};
    font-size: 15px;
    margin-left: 8px;
  }

  span {
    color: ${color.dark.quinter};
    font-size: 15px;
    margin-left: 5px;
  }
`;
export const Room = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconLive = styled(VideoCamera)`
  color: #a357e1;

  width: 20px;
`;

export const IconInfo = styled(InfoCircleFill)`
  width: 15px;
  color: ${color.dark.quinter};
  margin-left: 10px;
`;

export const CreateRoom = styled.div`
  font-size: 15px;
  color: ${color.dark.facebook};
`;

export const Users = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
