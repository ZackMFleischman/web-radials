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

const StyledDivider = styled.div`
  background-color: grey;
  height: 1px;
  width: 500px;
  margin: 8px 0px;
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

  const [allCPVel, setAllCPVel] = useState(0.05);

  const renderControlPointSliders = () => {
    return (
      <>
        <Slider
          value={state.c1x}
          min={-state.maxCurveSize}
          max={state.maxCurveSize}
          onChange={state.setC1x.bind(state)}
          label="Control Point 1: x"
          smallFont
        />
        <Slider
          value={state.c1y}
          min={-state.maxCurveSize}
          max={state.maxCurveSize}
          onChange={state.setC1y.bind(state)}
          label="Control Point 1: y"
          smallFont
        />
        <Slider
          value={state.c2x}
          min={-state.maxCurveSize}
          max={state.maxCurveSize}
          onChange={state.setC2x.bind(state)}
          label="Control Point 2: x"
          smallFont
        />
        <Slider
          value={state.c2y}
          min={-state.maxCurveSize}
          max={state.maxCurveSize}
          onChange={state.setC2y.bind(state)}
          label="Control Point 2: y"
          smallFont
        />
      </>
    );
  };

  const renderControlPointVelocitySliders = () => {
    const maxCPVelocity = 0.5;
    return (
      <>
        <Slider
          value={allCPVel}
          min={0}
          max={maxCPVelocity}
          onChange={(vel) => {
            state.setC1xVelocity(vel);
            state.setC1yVelocity(vel);
            state.setC2xVelocity(vel);
            state.setC2yVelocity(vel);
            setAllCPVel(vel);
          }}
          label="Set All Velocities"
          step={0.01}
          smallFont
        />
        <StyledDivider />
        <Slider
          value={Math.abs(state.c1xVelocity)}
          min={0}
          max={maxCPVelocity}
          onChange={state.setC1xVelocity.bind(state)}
          label="Control Point 1: x Velocity"
          step={0.01}
          smallFont
        />
        <Slider
          value={Math.abs(state.c1yVelocity)}
          min={0}
          max={maxCPVelocity}
          onChange={state.setC1yVelocity.bind(state)}
          label="Control Point 1: y Velocity"
          step={0.01}
          smallFont
        />
        <Slider
          value={Math.abs(state.c2xVelocity)}
          min={0}
          max={maxCPVelocity}
          onChange={state.setC2xVelocity.bind(state)}
          label="Control Point 2: x Velocity"
          step={0.01}
          smallFont
        />
        <Slider
          value={Math.abs(state.c2yVelocity)}
          min={0}
          max={maxCPVelocity}
          onChange={state.setC2yVelocity.bind(state)}
          label="Control Point 2: y Velocity"
          step={0.01}
          smallFont
        />
      </>
    );
  };

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
      <h4>Control Points</h4>
      {renderControlPointSliders()}
      <h4>Control Point Velocities</h4>
      {renderControlPointVelocitySliders()}
    </OverlayDiv>
  );
};
