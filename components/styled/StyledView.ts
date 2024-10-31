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
} from "styled-system";

interface CustomProps {
  gap?: string | number;
}

const StyledView = styled.View<
  SpaceProps & FlexboxProps & LayoutProps & CustomProps & ColorProps
>`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  gap: ${(props) => props.gap}
`;

export default StyledView;
