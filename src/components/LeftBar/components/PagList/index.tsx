import React from "react";

import { Container, UserPhoto } from "./styles";

import pages from "../../../../assets/pages.png";

const PagList: React.FC = () => {
  return (
    <Container>
      <UserPhoto src={pages} />
      <span>Páginas</span>
    </Container>
  );
};

export default PagList;
