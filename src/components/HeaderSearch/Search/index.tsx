import React from "react";

import { Container, InputWrapper, SearchInput, SearchIcon } from "./styles";

const Search: React.FC = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchInput placeholder="Pesquisar no Facebook" />
        <SearchIcon />
      </InputWrapper>
    </Container>
  );
};

export default Search;
