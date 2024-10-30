import styled from "styled-components/native";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from "styled-system";

const StyledTouchableOpacity = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: (props.theme as any).activeOpacity,
}))<ColorProps & SpaceProps & FlexboxProps & LayoutProps & BorderProps>`
  ${color}
  ${space}
  ${flexbox}
  ${layout}
  ${border}
`;

export default StyledTouchableOpacity;
