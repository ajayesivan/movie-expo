import styled from 'styled-components/native'
import { color, ColorProps, typography, TypographyProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'

const StyledText = styled.Text<ColorProps & TypographyProps & SpaceProps & FlexboxProps>`
  ${({ theme }) => `
    color:  ${theme.colors.textPrimary};
    font-family: ${theme.fonts.regular};
  `}
  ${color}
  ${typography}
  ${space}
  ${flexbox}
`

export default StyledText;
