import styled from "styled-components";
import color from "../../../../styles/";

import { CameraVideoFill } from "styled-icons/bootstrap/";

import { PhotoLibrary } from "styled-icons/material-rounded/";

import { Happy } from "styled-icons/ionicons-outline/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  background-color: ${color.dark.secondary};

  border-radius: 10px;
  padding: 15px;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const User = styled.img`
  height: 35px;
  width: 35px;
  background-color: white;
  border-radius: 60px;
  flex-shrink: 0;
  opacity: 1;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const InputStatus = styled.input`
  width: 100%;

  margin-left: 6px;
  padding: 10px;

  background-color: ${color.dark.tertary};
  border-radius: 100px;

  ::placeholder {
    color: ${color.dark.quinter};
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${color.dark.tertary};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Actions = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButton = styled.div`
  width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0 10px 0;

  background-color: transparent;
  border-radius: 12px;
  cursor: pointer;

  :hover {
    background-color: ${color.dark.tertary};
  }
`;

export const IconCamera = styled(CameraVideoFill)`
  width: 20px;
  color: ${color.dark.red};
`;
export const IconPhoto = styled(PhotoLibrary)`
  width: 20px;
  color: ${color.dark.green};
`;
export const IconHappy = styled(Happy)`
  width: 20px;
  color: ${color.dark.yerlow};
`;

export const Description = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-left: 5px;
  color: ${color.dark.quinter};
`;
