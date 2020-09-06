import React from "react";

import {
  Container,
  Morecontainer,
  ContainerMore,
  MoreIcon,
  Separator,
  SuspendContainer,
  Span,
} from "./styles";

import User from "./components/User";
import CovidList from "./components/CovidList/";
import PagList from "./components/PagList";
import FriendsList from "./components/FriendsList";
import MessengerList from "./components/MessengerList";
import Suspend from "./components/Suspend";
import Footer from "./components/Rodape";

import one from "../../assets/one.jpg";
import two from "../../assets/two.png";
import tree from "../../assets/tree.png";
import foue from "../../assets/foue.png";
import five from "../../assets/five.png";

const LeftBar: React.FC = () => {
  return (
    <Container>
      <User />
      <CovidList />
      <PagList />
      <FriendsList />
      <MessengerList />
      <Morecontainer>
        <ContainerMore>
          <MoreIcon />
        </ContainerMore>
        <span>Ver mais</span>
      </Morecontainer>

      <Separator> a</Separator>

      <SuspendContainer>
        <section>
          <Span>Seus Atalhos</Span>
          <div>Editar</div>
        </section>

        <Suspend photo={one} description="Todo Tipo De Música" />
        <Suspend photo={two} description="OMG" />
        <Suspend photo={tree} description="WHAT?" />
        <Suspend photo={foue} description="TRY" />
        <Suspend photo={five} description="BOO!" />
        <Morecontainer>
          <ContainerMore>
            <MoreIcon />
          </ContainerMore>
          <span>Ver mais</span>
        </Morecontainer>
      </SuspendContainer>

      <Footer />
    </Container>
  );
};

export default LeftBar;
