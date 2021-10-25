import { default as ReactToggle } from "react-toggle";
import styled from "styled-components";
import { ControlLabel } from "./ControlLabel";

import "./Toggler.css";

// Docs: http://aaronshaf.github.io/react-toggle/

interface TogglerProps {
  label: string;
  defaultChecked: boolean;
  onChange: () => void;
}

const ContainerDiv = styled.div`
  display: flex;
`;

const StyledControlLabel = styled(ControlLabel)`
  margin: 5px 0px;
`;

export const Toggler: React.FC<TogglerProps> = ({
  defaultChecked,
  onChange,
}) => (
  <ContainerDiv>
    <ReactToggle
      defaultChecked={defaultChecked}
      icons={false}
      onChange={onChange}
    />
    <StyledControlLabel>Show Control Lines</StyledControlLabel>
  </ContainerDiv>
);
