import styled from 'styled-components/native'
import {color, ColorProps, typography, TypographyProps} from 'styled-system'

const Text = styled.Text<ColorProps | TypographyProps>`
  color: "black";
  font-family: ${props => props.theme.fonts.regular};
  ${color}
  ${typography}
`

export default Text;
