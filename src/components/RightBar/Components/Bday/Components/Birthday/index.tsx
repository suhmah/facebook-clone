import React from "react";

import { Container, ImageBday, Bdays } from "./styles";

const Birthday: React.FC = () => {
  return (
    <Container>
      <ImageBday />
      <Bdays>
        <p>
          <strong>Suzimara Dos santos</strong> e{" "}
          <strong>outras 6 pessoas </strong>
          Fazem aniversário hoje.
        </p>
      </Bdays>
    </Container>
  );
};

export default Birthday;
