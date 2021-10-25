import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { startingCPVelocity, StateContext } from "./State";

const OverlayDiv = styled.div`
  position: absolute;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledDivider = styled.div`
  background-color: grey;
  height: 1px;
  width: 360px;
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

  const [showControls, setShowControls] = useState(true);

  const [allCPVel, setAllCPVel] = useState(startingCPVelocity);

  const renderControlPointSliders = () => {
    return (
      <>
        <Slider
          value={state.c1x}
          min={-state.maxCurveSize}
          max={state.maxCurveSize}
          onChange={state.setC1x.bind(state)}
          label="CP 1: x Position"
          smallFont
        />
        <Slider
          value={state.c1y}
          min={-state.maxControlPointSize}
          max={state.maxControlPointSize}
          onChange={state.setC1y.bind(state)}
          label="CP 1: y Position"
          smallFont
        />
        <Slider
          value={state.c2x}
          min={-state.maxControlPointSize}
          max={state.maxControlPointSize}
          onChange={state.setC2x.bind(state)}
          label="CP 2: x Position"
          smallFont
        />
        <Slider
          value={state.c2y}
          min={-state.maxCurveSize}
          max={state.maxCurveSize}
          onChange={state.setC2y.bind(state)}
          label="CP 2: y Position"
          smallFont
        />
      </>
    );
  };

  const renderControlPointVelocitySliders = () => {
    return (
      <>
        <Slider
          value={allCPVel}
          min={0}
          max={state.maxCPVelocity}
          onChange={(vel) => {
            state.setC1xVelocity(vel);
            state.setC1yVelocity(vel);
            state.setC2xVelocity(vel);
            state.setC2yVelocity(vel);
            setAllCPVel(vel);
          }}
          label="Set All CP Velocities"
          step={0.01}
          smallFont
        />
        <StyledDivider />
        <Slider
          value={Math.abs(state.c1xVelocity)}
          min={0}
          max={state.maxCPVelocity}
          onChange={state.setC1xVelocity.bind(state)}
          label="CP 1: x Velocity"
          step={0.01}
          smallFont
        />
        <Slider
          value={Math.abs(state.c1yVelocity)}
          min={0}
          max={state.maxCPVelocity}
          onChange={state.setC1yVelocity.bind(state)}
          label="CP 1: y Velocity"
          step={0.01}
          smallFont
        />
        <Slider
          value={Math.abs(state.c2xVelocity)}
          min={0}
          max={state.maxCPVelocity}
          onChange={state.setC2xVelocity.bind(state)}
          label="CP 2: x Velocity"
          step={0.01}
          smallFont
        />
        <Slider
          value={Math.abs(state.c2yVelocity)}
          min={0}
          max={state.maxCPVelocity}
          onChange={state.setC2yVelocity.bind(state)}
          label="CP 2: y Velocity"
          step={0.01}
          smallFont
        />
      </>
    );
  };

  return (
    <OverlayDiv>
      <h3>
        Controls{"  "}
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => setShowControls((prev) => !prev)}
        >
          {showControls ? "Hide" : "Show"}
        </button>
      </h3>
      {showControls && (
        <>
          <Slider
            value={state.numRadials}
            min={1}
            max={75}
            onChange={state.setNumRadials.bind(state)}
            label="Number of Radials"
          />
          <Slider
            value={state.skipEveryNthRadial}
            min={0}
            max={10}
            onChange={(n) => (state.skipEveryNthRadial = n)}
            label="Skip Some Every Nth Radial"
          />
          <Slider
            value={state.numberOfRadialsToSkip}
            min={1}
            max={Math.max(state.skipEveryNthRadial - 1, 1)}
            onChange={(n) => (state.numberOfRadialsToSkip = n)}
            label="Number of Radials to Skip"
          />
          <h4>Control Points</h4>
          {renderControlPointSliders()}
          <h4>Control Point Velocities</h4>
          {renderControlPointVelocitySliders()}
        </>
      )}
    </OverlayDiv>
  );
};
