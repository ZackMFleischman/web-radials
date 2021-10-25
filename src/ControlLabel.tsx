import styled from "styled-components";

export const controlLabelHeight = 20;

export const ControlLabel = styled.span`
  text-align: center;
  line-height: ${controlLabelHeight}px;
  padding-left: 10px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
