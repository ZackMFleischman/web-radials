import { useState, useCallback } from "react";
import ReactSlider from "react-slider";
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

interface SliderProps {
  defaultValue: number;
  label: string;
}

const StyledSliderContainer = styled.div`
  display: flex;
`;

const StyledLabelSpan = styled.span`
  text-align: center;
  line-height: ${sliderHeight}px;
  padding-left: 10px;
`;

export const Slider: React.FC<SliderProps> = ({ defaultValue, label }) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <StyledSliderContainer>
      <StyledSlider
        value={[value]}
        onChange={onChange}
        renderTrack={Track}
        renderThumb={Thumb}
      />
      <StyledLabelSpan>{label}</StyledLabelSpan>
    </StyledSliderContainer>
  );
};
