import styled from "styled-components";
import color from "../../../../styles";
import { CameraVideoFill } from "styled-icons/bootstrap/";
import { SearchAlt2 } from "styled-icons/boxicons-regular/";
import { MoreHorizontalOutline } from "styled-icons/evaicons-outline/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-items: flex-start;

  padding: 10px 0px 0px 0px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;

  color: ${color.dark.quinter};
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CameraIcon = styled(CameraVideoFill)`
  width: 15px;
  color: ${color.dark.white};
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 10px;
  margin-right: 10px;

  :hover {
    background-color: ${color.dark.tertary};
    border-radius: 80px;
  }
`;

export const SearchIcon = styled(SearchAlt2)`
  width: 15px;
  color: ${color.dark.white};
`;

export const MoreIcon = styled(MoreHorizontalOutline)`
  width: 15px;
  color: ${color.dark.white};
`;
