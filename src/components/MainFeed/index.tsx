import React from "react";

import { Container, StoryesMain, Feed } from "./styles";

import Stories from "./Components/Stories/index";
import Status from "./Components/Status";
import Livin from "./Components/livingRoom";

import Publication from "./Components/Publicaiton/";

import Mat from "../../assets/mat.jpg";
import on from "../../assets/01.jpg";
import onn from "../../assets/011.jpg";
import tw from "../../assets/02.jpg";
import tww from "../../assets/022.jpg";
import tr from "../../assets/03.jpg";
import tr4 from "../../assets/033.jpg";
import fo from "../../assets/04.jpeg";
const MainFeed: React.FC = () => {
  return (
    <Container>
      <Feed>
        <StoryesMain>
          <Stories isCreate image={Mat} />
          <Stories image={fo} userImage={Mat} isUser />
          <Stories image={on} userImage={onn} nameUser="Ana Carolina Martins" />
          <Stories
            image={tw}
            userImage={tww}
            nameUser="Vitória Brandão Martins"
          />
          <Stories image={tr} userImage={tr4} nameUser="Talita Lessas" />
        </StoryesMain>

        <Status />
        <Livin />
        <Publication />
      </Feed>
    </Container>
  );
};

export default MainFeed;
