import Select from "react-select";
import styled from "styled-components";
import { ControlLabel } from "./ControlLabel";
import { sliderSmallerWidthRatio, sliderWidth } from "./Slider";

const selectControlHeight = 24;

const customSelectStyles = {
  control: (provided: any) => ({
    ...provided,
    height: `${selectControlHeight}px`,
    minHeight: `${selectControlHeight}px`,
    backgroundColor: "#0099ff",
    border: "none",
    color: "white",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    padding: 0,
    height: `${selectControlHeight}px`,
    minHeight: `${selectControlHeight}px`,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: "white",
  }),
  input: (provided: any) => ({
    ...provided,
    caretColor: "transparent",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    paddingTop: 2,
    paddingLeft: 5,
    fontStyle: "italic",
    color: "white",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    paddingTop: 2,
    paddingLeft: 5,
    display: "inline-block",
    color: "white",
  }),
  valueContainer: () => ({
    fontSize: "15px",
    height: `${selectControlHeight}px`,
    minHeight: `${selectControlHeight}px`,
  }),
};

const StyledSelect = styled(Select)`
  z-index: 2;
  margin-top: 3px;
  margin-bottom: 5px;
  width: ${sliderWidth}px;

  @media (max-width: 768px) {
    width: ${sliderWidth * sliderSmallerWidthRatio}px;
  }

  svg {
    stroke: white !important;
    fill: white !important;
  }
`;

const StyledDropdownDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export interface DropdownOption<T = string> {
  value: T;
  label: string;
}

interface DropdownProps<T = string> {
  placeholder: string;
  options: DropdownOption[];
  label: string;
  value?: DropdownOption;
  onChange: (newValue: DropdownOption<T>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  options,
  label,
  value,
  onChange,
}) => {
  return (
    <StyledDropdownDiv>
      <StyledSelect
        options={options}
        styles={customSelectStyles}
        placeholder={placeholder}
        value={value}
        onChange={(newValue) => onChange(newValue as DropdownOption)}
      />
      <ControlLabel>{label}</ControlLabel>
    </StyledDropdownDiv>
  );
};
