import styled from "styled-components/native";
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
} from "styled-system";

interface CustomProps {
  gap?: string | number;
}

const StyledView = styled.View<
  SpaceProps & FlexboxProps & LayoutProps & CustomProps
>`
  ${layout}
  ${space}
  ${flexbox}
  gap: ${(props) => props.gap}
`;

export default StyledView;
