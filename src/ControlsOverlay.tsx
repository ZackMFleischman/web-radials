import styled from "styled-components";
import { Slider } from "./Slider";

const OverlayDiv = styled.div`
  position: absolute;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ControlsOverlay = () => {
  return (
    <OverlayDiv>
      <h3>Controls</h3>
      <Slider defaultValue={50} label="Foo bar" />
      <Slider defaultValue={75} label="Foo bar 2" />
    </OverlayDiv>
  );
};
