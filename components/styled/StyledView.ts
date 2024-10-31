import styled from "styled-components/native";
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  border,
  BorderProps,
} from "styled-system";

interface CustomProps {
  gap?: string | number;
}

const StyledView = styled.View<
  SpaceProps &
    FlexboxProps &
    LayoutProps &
    CustomProps &
    ColorProps &
    BorderProps
>`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${border}
  gap: ${(props) => props.gap}
`;

export default StyledView;
