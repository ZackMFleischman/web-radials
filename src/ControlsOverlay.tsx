import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { startingCPVelocity, State } from "./State";

const OverlayDiv = styled.div<{ showBackground: boolean }>`
  position: absolute;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;
  background: linear-gradient(
    0.25turn,
    rgba(0, 0, 0, ${(p) => (p.showBackground ? 0.5 : 0)}),
    92%,
    rgba(0, 0, 0, 0)
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const ControlsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlsContainerDiv = styled.div``;

const StyledDivider = styled.div`
  background-color: #555555;
  justify-self: center;
  align-self: center;
  height: 1px;
  width: 95%;
  margin: 8px 0px;

  @media (max-width: 768px) {
    margin: 4px 0px;
  }
`;

const StyledButton = styled.button`
  background-color: #0099ff;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  margin-top: 10px;
`;

const StyledSectionLabel = styled.span`
  color: white;
  font-size: 16px;
  padding: 16px 0px 4px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 0px 2px;
  }
`;

const StyledAnchor = styled.a`
 color: white;
 &:visited { color: whitesmoke; }
 &:hover { color: #06e; }​
`;

const StyledFooter = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
`;

const useForceUpdate = () => {
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  return forceUpdate;
};

export const ControlsOverlay: React.FC<{ state: State }> = ({ state }) => {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    state.renderControls = forceUpdate;
  }, [forceUpdate, state]);

  const [showControls, setShowControls] = useState(true);

  const [allCPVel, setAllCPVel] = useState(startingCPVelocity);

  const renderNumberOfRadialsSection = () => (
    <>
      <StyledSectionLabel>Radial Properties</StyledSectionLabel>
      <Slider
        value={state.numRadials}
        min={1}
        max={75}
        onChange={state.setNumRadials.bind(state)}
        label="Num of Radials"
      />
      <Slider
        value={state.spinVelocity}
        min={-1}
        max={1}
        step={0.1}
        onChange={(vel) => (state.spinVelocity = vel)}
        smallFont
        label="Spin Velocity"
      />
      <Slider
        value={state.skipEveryNthRadial}
        min={0}
        max={10}
        onChange={(n) => (state.skipEveryNthRadial = n)}
        label="Skip every Nth one"
      />
      <Slider
        value={state.numberOfRadialsToSkip}
        min={1}
        max={Math.max(state.skipEveryNthRadial - 1, 1)}
        onChange={(n) => (state.numberOfRadialsToSkip = n)}
        label="Num Radials to Skip"
      />
    </>
  );

  const renderControlPointSliders = () => (
    <>
      <StyledSectionLabel>Control Points</StyledSectionLabel>
      <Slider
        value={state.c1x}
        min={-state.maxControlPointSize}
        max={state.maxControlPointSize}
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
        min={-state.maxControlPointSize}
        max={state.maxControlPointSize}
        onChange={state.setC2y.bind(state)}
        label="CP 2: y Position"
        smallFont
      />
    </>
  );

  const renderControlPointVelocitySliders = () => (
    <>
      <StyledSectionLabel>Control Point Velocities</StyledSectionLabel>
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

  const renderControls = () => (
    <ControlsDiv>
      {renderControlPointSliders()}
      {renderControlPointVelocitySliders()}
      {renderNumberOfRadialsSection()}
    </ControlsDiv>
  );

  return (
    <OverlayDiv showBackground={showControls}>
      <div>
        <StyledButton onClick={() => setShowControls((prev) => !prev)}>
          {showControls ? "Hide Controls" : "Show Controls"}
        </StyledButton>
        {showControls && (
          <ControlsContainerDiv>{renderControls()}</ControlsContainerDiv>
        )}
      </div>
      {showControls && (
        <StyledFooter>
          ©
          <StyledAnchor href="http://www.zackmfleischman.com">
            Zack M Fleischman
          </StyledAnchor>
        </StyledFooter>
      )}
    </OverlayDiv>
  );
};
