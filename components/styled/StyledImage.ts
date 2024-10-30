import styled from "styled-components/native";
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
} from "styled-system";

const StyledImage = styled.Image<SpaceProps & FlexboxProps & LayoutProps>`
  ${layout}
  ${space}
  ${flexbox}
`;

export default StyledImage;
