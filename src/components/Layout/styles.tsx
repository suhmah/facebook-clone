import styled from "styled-components";

//MS - Menu Search
//MT - Menu Table
//MA - Menu Action
//LB - Left Bar
//MN - Main
//RB - Right Bar

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 350px auto 350px;
  grid-template-areas:
    "MS MT MA"
    "LB MN RB ";

  height: 100vh;
`;

export const HeaderContainer = styled.div`
  position: fixed;
`;
