import styled from "styled-components";

const StyledCanvas = styled.canvas`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #222222;
`;

export const RadialsCanvas = () => {
  return <StyledCanvas id="radials-canvas" />;
};
