import styled from 'styled-components/native'
import { color, ColorProps, typography, TypographyProps, space, SpaceProps, flex, FlexProps } from 'styled-system'

const Text = styled.Text<ColorProps & TypographyProps & SpaceProps & FlexProps>`
  ${({ theme }) => `
    color:  ${theme.colors.text};
    font-family: ${theme.fonts.regular};
  `}
  ${color}
  ${typography}
  ${space}
  ${flex}
`

export default Text;
