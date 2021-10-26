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
    color: "white",
  }),
  valueContainer: () => ({
    fontSize: "16px",
    height: `${selectControlHeight}px`,
    minHeight: `${selectControlHeight}px`,
  }),
};

const StyledSelect = styled(Select)`
  z-index: 2;
  margin-top: 2px;
  margin-bottom: 3px;
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

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  placeholder: string;
  options: DropdownOption[];
  label: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  options,
  label,
}) => {
  return (
    <StyledDropdownDiv>
      <StyledSelect
        options={options}
        styles={customSelectStyles}
        placeholder={placeholder}
      />
      <ControlLabel>{label}</ControlLabel>
    </StyledDropdownDiv>
  );
};
