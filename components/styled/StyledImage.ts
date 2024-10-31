import styled from "styled-components/native";
import { Image } from "expo-image";
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
} from "styled-system";

const StyledImage = styled(Image)<
  SpaceProps & FlexboxProps & LayoutProps & BorderProps
>`
  ${layout}
  ${space}
  ${flexbox}
  ${border}
`;

export default StyledImage;
