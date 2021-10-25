import React from "react";
import styled from "styled-components";
import { ControlsOverlay } from "./ControlsOverlay";
import { RadialsCanvas } from "./RadialsCanvas";

const AppDiv = styled.div`
  position: relative;
`;

function App() {
  return (
    <AppDiv>
      <RadialsCanvas />
      <ControlsOverlay />
    </AppDiv>
  );
}

export default App;
