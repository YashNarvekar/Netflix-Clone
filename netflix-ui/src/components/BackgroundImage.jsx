import React from "react";
import background from "../assets/background.png";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <Container>
      <img className="img" src={background} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
`;
