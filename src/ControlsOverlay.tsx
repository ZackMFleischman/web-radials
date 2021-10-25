import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { StateContext } from "./State";

const OverlayDiv = styled.div`
  position: absolute;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

const useForceUpdate = () => {
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  return forceUpdate;
};

export const ControlsOverlay = () => {
  const state = useContext(StateContext);
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    state.renderControls = forceUpdate;
  }, [forceUpdate, state]);

  return (
    <OverlayDiv>
      <h3>Controls</h3>

      <Slider
        value={state.numRadials}
        min={1}
        max={75}
        onChange={state.setNumRadials.bind(state)}
        label="Number of Radials"
      />

      <Slider
        value={state.c1x}
        min={-250}
        max={250}
        onChange={state.setC1x.bind(state)}
        label="Control Point 1: x"
        smallFont
      />
      <Slider
        value={state.c1y}
        min={-250}
        max={250}
        onChange={state.setC1y.bind(state)}
        label="Control Point 1: y"
        smallFont
      />
      <Slider
        value={state.c2x}
        min={-250}
        max={250}
        onChange={state.setC2x.bind(state)}
        label="Control Point 2: x"
        smallFont
      />
      <Slider
        value={state.c2y}
        min={-250}
        max={250}
        onChange={state.setC2y.bind(state)}
        label="Control Point 2: y"
        smallFont
      />
    </OverlayDiv>
  );
};
