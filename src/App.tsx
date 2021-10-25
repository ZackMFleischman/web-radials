import React, { useRef } from "react";
import styled from "styled-components";
import { ControlsOverlay } from "./ControlsOverlay";
import { RadialsCanvas } from "./RadialsCanvas";
import { State } from "./State";

const AppDiv = styled.div`
  position: relative;
`;

function App() {
  const stateRef = useRef<State>(new State());

  return (
    <AppDiv>
      <RadialsCanvas state={stateRef.current} />
      <ControlsOverlay state={stateRef.current} />
    </AppDiv>
  );
}

export default App;
