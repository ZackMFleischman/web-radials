import React, { useRef } from "react";
import styled from "styled-components";
import { ControlsOverlay } from "./ControlsOverlay";
import { RadialsCanvas } from "./RadialsCanvas";
import { State, StateContext } from "./State";

const AppDiv = styled.div`
  position: relative;
`;

function App() {
  const stateRef = useRef<State>(new State());

  return (
    <StateContext.Provider value={stateRef.current}>
      <AppDiv>
        <RadialsCanvas />
        <ControlsOverlay />
      </AppDiv>
    </StateContext.Provider>
  );
}

export default App;
