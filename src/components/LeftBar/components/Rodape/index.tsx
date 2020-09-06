import React from "react";

import { Container } from "./styles";

const Rodape: React.FC = () => {
  return (
    <Container>
      <p>
        <span>Privacidade</span> · <span>Termos</span> ·{" "}
        <span>Publicidade</span> · <span>Escolhas para anúncios</span> ·{" "}
        <span>Cookies</span> · <span>Facebook</span> · <span>© 2020</span>
      </p>
    </Container>
  );
};

export default Rodape;
