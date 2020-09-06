import React from "react";

import { Container, Logo } from "./styles";

import InputSearch from "./Search/";

import fb from "../../assets/facebook.png";

const HeaderSearch: React.FC = () => {
  return (
    <Container>
      <Logo src={fb} alt="logo" />
      <InputSearch />
    </Container>
  );
};

export default HeaderSearch;
