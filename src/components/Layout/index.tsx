import React from "react";

import { Grid } from "./styles";
// import Menu from "../Menu";

import Search from "../HeaderSearch";
import MenuAction from "../MenuAction";
import MenuTable from "../MenuTable";

import LeftBar from "../LeftBar";
import Main from "../MainFeed";
import RightBar from "../RightBar";

function Layout() {
  return (
    <Grid>
      <Search />
      <MenuAction />
      <MenuTable />
      <LeftBar />
      <RightBar />

      <Main />
    </Grid>
  );
}

export default Layout;
