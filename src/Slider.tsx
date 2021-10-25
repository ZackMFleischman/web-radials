import { useCallback } from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import styled from "styled-components";
import { ControlLabel, controlLabelHeight } from "./ControlLabel";

// https://zillow.github.io/react-slider/
const sliderHeight = controlLabelHeight;
const sliderWidth = 200;

const StyledThumb = styled.div`
  height: ${sliderHeight + 2}px;
  line-height: ${sliderHeight + 2}px;
  width: ${sliderHeight + 2}px;
  text-align: center;
  background-color: #0099ff;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  &:focus {
    outline: none;
  }
`;

export const Thumb = (props: any, state: any) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div<{ index: number }>`
  height: ${sliderHeight}px;
  border-radius: 999px;
  background: ${(props) => (props.index === 0 ? "#005bd9" : "#1e217d")};
  border: 1px solid #606060;
`;

export const Track = (props: any, state: any) => (
  <StyledTrack {...props} index={state.index} />
);

const StyledSlider = styled(ReactSlider)`
  width: ${sliderWidth}px;

  @media (max-width: 768px) {
    width: ${sliderWidth * 0.7}px;
  }
`;

const StyledSliderContainer = styled.div<{ fontSize: number }>`
  display: flex;
  padding: 5px 0px;
  ${StyledThumb} {
    font-size: ${(p) => p.fontSize}px;
  }
`;

interface SliderProps extends Partial<ReactSliderProps<number>> {
  value: number;
  label: string;
  onChange?: (value: number) => void;
  smallFont?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  label,
  onChange: onChangeExternal,
  step,
  min,
  max,
  smallFont = false,
}) => {
  const onChange = useCallback(
    (newValue) => {
      onChangeExternal?.(newValue);
    },
    [onChangeExternal]
  );

  return (
    <StyledSliderContainer fontSize={smallFont ? 9 : 16}>
      <StyledSlider
        renderTrack={Track}
        renderThumb={Thumb}
        value={[value]}
        onChange={onChange}
        step={step}
        min={min}
        max={max}
      />
      <ControlLabel>{label}</ControlLabel>
    </StyledSliderContainer>
  );
};
