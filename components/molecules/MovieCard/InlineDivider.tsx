import styled from "styled-components/native";

const InlineDivider = styled.View`
  width: 2px;
  height: 4px;
  border-radius: 1px;
  background-color: ${(props) => props.theme.colors.border};
`;

export default InlineDivider;
