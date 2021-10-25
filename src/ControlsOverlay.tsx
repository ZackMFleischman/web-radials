import styled from "styled-components";
import { Slider } from "./Slider";

const OverlayDiv = styled.div`
  position: absolute;
  color: white;
`;

export const ControlsOverlay = () => {
  return (
    <OverlayDiv>
      <h3>Controls</h3>
      <Slider defaultValue={50} label="Foo bar" />
    </OverlayDiv>
  );
};
