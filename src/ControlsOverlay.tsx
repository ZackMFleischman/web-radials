import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { startingCPVelocity, State } from "./State";
import { Toggler } from "./Toggler";
import randomColor from "randomcolor";
import { Dropdown } from "./Dropdown";

// Docs: https://github.com/davidmerfield/randomColor

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
  cursor: pointer;
`;

const ControlButton = styled.button`
  background-color: #0099ff;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

const StyledControlScrollerDiv = styled.div`
  overflow: auto;
  padding-right: 10px;
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

  const renderColorsSection = () => (
    <>
      <StyledSectionLabel>Colors</StyledSectionLabel>
      <ControlButton
        onClick={() => {
          state.colorPalette = ["white"];
          state.colorPaletteSize = 1;
        }}
      >
        All White
      </ControlButton>
      <ControlButton
        onClick={() => {
          state.colorPalette = randomColor({
            count: state.colorPaletteSize,
            hue: "random",
          });

          state.colorPaletteSize = state.colorPalette.length;
        }}
      >
        {`Random Color${state.colorPaletteSize > 1 ? "s" : ""}`}
      </ControlButton>
      <Dropdown
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
        placeholder="Select Color Palette..."
        label="Color Palette"
      />
      <Slider
        value={state.colorPaletteSize}
        min={1}
        max={state.numRadials}
        onChange={(size) => {
          if (state.colorPalette.length !== size) {
            if (state.colorPalette.length > size) {
              state.colorPalette = state.colorPalette.slice(0, size);
            } else {
              state.colorPalette = state.colorPalette.slice(0, size);
              const numColorsToGenerate = size - state.colorPalette.length;
              state.colorPalette = [
                ...state.colorPalette,
                ...randomColor({ count: numColorsToGenerate, hue: "random" }),
              ];
            }
          }

          state.colorPaletteSize = size;
        }}
        label="Num of Colors"
      />
    </>
  );

  const renderNumberOfRadialsSection = () => (
    <>
      <StyledSectionLabel>Radial Properties</StyledSectionLabel>
      <Slider
        value={state.numRadials}
        min={1}
        max={75}
        onChange={(numRadials) => {
          state.setNumRadials(numRadials);
          if (numRadials < state.colorPalette.length) {
            state.colorPalette = state.colorPalette.slice(0, numRadials);
            state.colorPaletteSize = numRadials;
          }
        }}
        label="Num of Radials"
      />
      <Slider
        value={state.curveWidth}
        min={1}
        max={30}
        onChange={(value) => (state.curveWidth = value)}
        label="Radial Thickness"
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
      <Toggler
        defaultChecked={state.showControlLines}
        onChange={() => (state.showControlLines = !state.showControlLines)}
        label="Show Control Lines"
      />
    </>
  );

  const renderControlPointSection = () => (
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

  const renderControlPointVelocitySection = () => (
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
      {renderControlPointSection()}
      {renderControlPointVelocitySection()}
      {renderColorsSection()}
      {renderNumberOfRadialsSection()}
    </ControlsDiv>
  );

  return (
    <OverlayDiv showBackground={showControls}>
      <StyledControlScrollerDiv>
        <StyledButton onClick={() => setShowControls((prev) => !prev)}>
          {showControls ? "Hide Controls" : "Show Controls"}
        </StyledButton>
        {showControls && (
          <ControlsContainerDiv>{renderControls()}</ControlsContainerDiv>
        )}
      </StyledControlScrollerDiv>
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
