import styled from "styled-components";
import { Search } from "@styled-icons/material";
import color from "../../../styles/index";

export const Container = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  width: 250px;
  height: 40px;

  margin-left: 10px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 38px;

  padding: 0 0 0 41px;
  border-radius: 7px;

  color: ${color.dark.white};
  background-color: ${color.dark.tertary};
  border-radius: 60px;
  font-size: 16px;
  font-weight: 100;
  position: relative;
  &::placeholder {
    color: ${color.dark.quinter};
    font-size: 16px;
    font-weight: 100;
  }

  ~ svg {
    position: relative;
    top: -80%;
    left: 10px;
    transition: 180ms ease-in-out;
  }
`;
export const SearchIcon = styled(Search)`
  width: 24px;
  color: ${color.dark.quinter};
`;
