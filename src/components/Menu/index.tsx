import React from "react";

import { Container } from "./styles";

import Search from "../HeaderSearch";
import MenuTable from "../MenuTable";
import MenuAction from "../MenuAction";

const Menu: React.FC = () => {
  return (
    <Container>
      <Search />
      <MenuTable />
      <MenuAction />
    </Container>
  );
};

export default Menu;
