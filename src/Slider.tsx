import { useState, useCallback } from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import styled from "styled-components";

// https://zillow.github.io/react-slider/
const sliderHeight = 30;
const sliderWidth = 300;

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
`;

const StyledSliderContainer = styled.div<{ fontSize: number }>`
  display: flex;
  padding: 5px 0px;
  ${StyledThumb} {
    font-size: ${(p) => p.fontSize}px;
  }
`;

const StyledLabelSpan = styled.span`
  text-align: center;
  line-height: ${sliderHeight}px;
  padding-left: 10px;
`;

interface SliderProps extends Partial<ReactSliderProps<number>> {
  defaultValue: number;
  label: string;
  onChange?: (value: number) => void;
  smallFont?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  defaultValue,
  label,
  onChange: onChangeExternal,
  step,
  min,
  max,
  smallFont = false,
}) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(
    (newValue) => {
      setValue(newValue);
      onChangeExternal?.(newValue);
    },
    [onChangeExternal]
  );

  return (
    <StyledSliderContainer fontSize={smallFont ? 12 : 16}>
      <StyledSlider
        renderTrack={Track}
        renderThumb={Thumb}
        value={[value]}
        onChange={onChange}
        step={step}
        min={min}
        max={max}
      />
      <StyledLabelSpan>{label}</StyledLabelSpan>
    </StyledSliderContainer>
  );
};
