import { useContext } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { StateContext } from "./State";

const OverlayDiv = styled.div`
  position: absolute;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ControlsOverlay = () => {
  const state = useContext(StateContext);

  return (
    <OverlayDiv>
      <h3>Controls</h3>

      <Slider
        defaultValue={16}
        min={1}
        max={75}
        onChange={state.setNumRadials.bind(state)}
        label="Number of Radials"
      />

      <Slider defaultValue={75} label="Foo bar 2" step={0.01} smallFont />
    </OverlayDiv>
  );
};
