import styled from "styled-components/native";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
} from "styled-system";

const StyledTextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholder,
}))<ColorProps & SpaceProps & FlexboxProps & BorderProps & LayoutProps>`
  ${({ theme }) => `
    color:  ${theme.colors.textPrimary};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.s}
  `}
  ${color}
  ${space}
  ${flexbox}
  ${border}
  ${layout}
`;

export default StyledTextInput;
